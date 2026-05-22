const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, ScanCommand, PutCommand, UpdateCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);
const TABLE = process.env.TABLE_NAME || 'InfrastructureCards';
const CATEGORIES = ['Compute', 'Deployment / Hosting', 'Frontend', 'Backend', 'Database', 'Storage', 'Networking', 'Authentication / Identity', 'AI / ML', 'DevOps / CI-CD', 'Monitoring / Observability', 'Messaging / Event Systems'];

const response = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*', 'Access-Control-Allow-Headers': '*' },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  const { httpMethod, path, pathParameters, body } = event;
  const parsed = body ? JSON.parse(body) : {};

  try {
    if (httpMethod === 'OPTIONS') return response(200, {});

    if (httpMethod === 'GET' && path === '/cards') {
      const { Items } = await ddb.send(new ScanCommand({ TableName: TABLE }));
      return response(200, Items);
    }

    if (httpMethod === 'POST' && path === '/cards') {
      const item = { id: Date.now().toString(), ...parsed };
      await ddb.send(new PutCommand({ TableName: TABLE, Item: item }));
      return response(201, item);
    }

    if (httpMethod === 'PUT' && path.startsWith('/cards/')) {
      const id = pathParameters?.id || path.split('/').pop();
      const item = { id, ...parsed };
      await ddb.send(new PutCommand({ TableName: TABLE, Item: item }));
      return response(200, item);
    }

    if (httpMethod === 'DELETE' && path.startsWith('/cards/')) {
      const id = pathParameters?.id || path.split('/').pop();
      await ddb.send(new DeleteCommand({ TableName: TABLE, Key: { id } }));
      return response(200, { deleted: id });
    }

    if (httpMethod === 'POST' && path === '/validate-round') {
      const { cards } = parsed;
      if (!cards || cards.length < 5) return response(400, { valid: false, message: 'Need at least 5 cards' });
      const categories = new Set(cards.map(c => c.category));
      const valid = categories.size >= 5 && CATEGORIES.every(cat => categories.has(cat));
      return response(200, { valid, message: valid ? 'You made an app!' : 'Missing required categories' });
    }

    if (httpMethod === 'POST' && path === '/validate-proving-stage') {
      const { answers } = parsed;
      const allCorrect = answers.every(a => a.selected === a.correct);
      return response(200, { correct: allCorrect, message: allCorrect ? 'Correct. You proved you understand this infrastructure stack.' : 'Not quite. Go back to the learning stage.' });
    }

    return response(404, { message: 'Not found' });
  } catch (err) {
    return response(500, { message: err.message });
  }
};

export const CATEGORIES = ['AI / ML', 'Compute', 'Deployment / Hosting', 'Backend', 'Database']

export const seedCards = [
  { id: 'nova', name: 'Nova', category: 'AI / ML', color: 'purple', definition: 'Amazon Nova is a family of foundation models for generative AI applications.', useCases: ['chatbots', 'content generation', 'reasoning'] },
  { id: 'bedrock', name: 'Bedrock', category: 'AI / ML', color: 'violet', definition: 'Amazon Bedrock provides access to foundation models through managed APIs.', useCases: ['AI agents', 'model inference', 'generative AI apps'] },
  { id: 'lambda', name: 'Lambda', category: 'Compute', color: 'blue', definition: 'AWS Lambda runs code without provisioning or managing servers.', useCases: ['serverless APIs', 'event processing', 'automation'] },
  { id: 'amplify', name: 'Amplify', category: 'Deployment / Hosting', color: 'orange', definition: 'AWS Amplify helps developers build and deploy full-stack applications.', useCases: ['frontend hosting', 'CI/CD', 'full-stack deployment'] },
  { id: 'spring-boot', name: 'Spring Boot', category: 'Backend', color: 'green', definition: 'Spring Boot is a Java framework for backend services and APIs.', useCases: ['enterprise APIs', 'microservices', 'backend systems'] },
  { id: 'rails', name: 'Ruby on Rails', category: 'Backend', color: 'red', definition: 'Ruby on Rails is a framework for building full-stack web applications.', useCases: ['CRUD apps', 'startup applications', 'admin systems'] },
  { id: 'aurora', name: 'Aurora', category: 'Database', color: 'teal', definition: 'Amazon Aurora is a managed relational database service.', useCases: ['transactional systems', 'SaaS applications', 'relational workloads'] },
  { id: 'dynamodb', name: 'DynamoDB', category: 'Database', color: 'cyan', definition: 'Amazon DynamoDB is a fully managed NoSQL database.', useCases: ['serverless apps', 'high-scale workloads', 'key-value storage'] },
]

# 🏗️ Infrastructure Builder

An educational web game that teaches how AWS and modern infrastructure components fit together to form real-world applications.

## Tech Stack

**Frontend:** React, Vite, TailwindCSS  
**Backend:** AWS Lambda, Amazon DynamoDB  
**Hosting:** AWS Amplify

## Local Development

```bash
npm install
npm run dev
```

The app runs locally with seed data — no backend required for basic gameplay.

Set `VITE_API_URL` in `.env.local` to connect to your deployed Lambda API:

```
VITE_API_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com
```

## AWS Deployment

### 1. DynamoDB

Create a table:
- Table name: `InfrastructureCards`
- Partition key: `id` (String)

Seed it:
```bash
AWS_REGION=us-east-1 node scripts/seed-dynamodb.js
```

### 2. Lambda

1. Zip the `lambda/` directory
2. Create a Lambda function (Node.js 20.x runtime)
3. Set environment variable: `TABLE_NAME=InfrastructureCards`
4. Attach a policy allowing DynamoDB access to the table
5. Create an API Gateway (HTTP API) with routes:
   - `GET /cards`
   - `POST /cards`
   - `PUT /cards/{id}`
   - `DELETE /cards/{id}`
   - `POST /validate-round`
   - `POST /validate-proving-stage`

### 3. Amplify

1. Connect your GitHub repo in the AWS Amplify console
2. Amplify will auto-detect `amplify.yml` for build settings
3. Add environment variable `VITE_API_URL` pointing to your API Gateway URL
4. Deploy

## Game Flow

1. **Learning Stage** — Create, edit, delete, and flip cards to learn infrastructure concepts
2. **Building Stage** — Drag cards into the play area to build a valid 5-category infrastructure stack
3. **Proving Stage** — Categorize cards correctly to prove understanding

## Project Structure

```
src/
  components/   # Reusable UI components
  pages/        # Stage pages (Learning, Building, Proving)
  hooks/        # Game state hook
  services/     # API client
  utils/        # Color utilities
  data/         # Seed data and constants
lambda/         # AWS Lambda function
scripts/        # DynamoDB seed script
```

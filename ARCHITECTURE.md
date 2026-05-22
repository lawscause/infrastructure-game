# Infrastructure Builder - Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              USERS                                       │
│                         (Web Browser)                                    │
└─────────────────────────────┬───────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        AWS AMPLIFY                                       │
│                   (Frontend Hosting)                                     │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │  React + Vite + TailwindCSS                                       │  │
│  │  - Learning Stage (card management)                               │  │
│  │  - Building Stage (drag & drop game)                              │  │
│  │  - Quiz Stage (category validation)                               │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  • Auto-deploy from GitHub                                              │
│  • CI/CD via amplify.yml                                                │
│  • Environment variable: VITE_API_URL                                   │
└─────────────────────────────┬───────────────────────────────────────────┘
                              │ HTTPS
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                       AWS LAMBDA                                         │
│                (InfrastructureGameAPI)                                   │
│                                                                         │
│  • Runtime: Node.js 20.x                                                │
│  • Exposed via Lambda Function URL                                      │
│  • Single function, route-based logic                                   │
│  • Environment: TABLE_NAME=InfrastructureCards                          │
│                                                                         │
│  Endpoints:                                                             │
│  ├── GET    /cards                                                      │
│  ├── POST   /cards                                                      │
│  ├── PUT    /cards/{id}                                                 │
│  ├── DELETE /cards/{id}                                                 │
│  ├── POST   /validate-round                                            │
│  └── POST   /validate-proving-stage                                    │
│                                                                         │
│  IAM Role: InfrastructureGameLambdaRole                                 │
│  ├── AWSLambdaBasicExecutionRole                                        │
│  └── DynamoDB: Scan, PutItem, DeleteItem                                │
└─────────────────────────────┬───────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                     AMAZON DYNAMODB                                      │
│                  (InfrastructureCards)                                   │
│                                                                         │
│  • Partition Key: id (String)                                           │
│  • Billing: Pay-per-request (on-demand)                                 │
│  • 66 infrastructure cards seeded                                       │
│                                                                         │
│  Card Schema:                                                           │
│  { id, name, category, color, image, definition, useCases[] }           │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│                        GITHUB                                            │
│          (lawscause/infrastructure-game)                                │
│                                                                         │
│  • Source control                                                       │
│  • Triggers Amplify auto-deploy on push to main                         │
└─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════
                          DATA FLOW
═══════════════════════════════════════════════════════════════════════════

  1. User visits Amplify-hosted URL
  2. React app loads, fetches cards from Lambda Function URL
  3. Lambda queries DynamoDB, returns card data
  4. User interacts with game (Learning → Building → Quiz)
  5. Game validation requests go through same Lambda URL

═══════════════════════════════════════════════════════════════════════════
                       APPROVED STACK
═══════════════════════════════════════════════════════════════════════════

  ✅ AWS Amplify        — Frontend hosting & CI/CD
  ✅ AWS Lambda         — Backend compute (Function URL)
  ✅ Amazon DynamoDB    — Data storage

═══════════════════════════════════════════════════════════════════════════
```

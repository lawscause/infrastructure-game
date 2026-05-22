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
│                    AMAZON API GATEWAY                                    │
│                      (HTTP API)                                          │
│                                                                         │
│  Routes:                                                                │
│  ├── GET    /cards                                                      │
│  ├── POST   /cards                                                      │
│  ├── PUT    /cards/{id}                                                 │
│  ├── DELETE /cards/{id}                                                 │
│  ├── POST   /validate-round                                            │
│  └── POST   /validate-proving-stage                                    │
│                                                                         │
│  • CORS enabled (all origins)                                           │
│  • $default stage with auto-deploy                                      │
└─────────────────────────────┬───────────────────────────────────────────┘
                              │ AWS_PROXY integration
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                       AWS LAMBDA                                         │
│                (InfrastructureGameAPI)                                   │
│                                                                         │
│  • Runtime: Node.js 20.x                                                │
│  • Handler: index.handler                                               │
│  • Single function, route-based logic                                   │
│  • Environment: TABLE_NAME=InfrastructureCards                          │
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
                         DEPLOYMENT DETAILS
═══════════════════════════════════════════════════════════════════════════

  Account:    868775176951
  Region:     us-west-2
  API URL:    https://p59le7eqlb.execute-api.us-west-2.amazonaws.com

═══════════════════════════════════════════════════════════════════════════
                          DATA FLOW
═══════════════════════════════════════════════════════════════════════════

  1. User visits Amplify-hosted URL
  2. React app loads, fetches cards from API Gateway
  3. API Gateway proxies request to Lambda
  4. Lambda queries DynamoDB, returns card data
  5. User interacts with game (Learning → Building → Quiz)
  6. Game validation requests go through same API path

═══════════════════════════════════════════════════════════════════════════
```

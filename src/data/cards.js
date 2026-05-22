export const CATEGORIES = [
  'Compute',
  'Deployment / Hosting',
  'Frontend',
  'Backend',
  'Database',
  'Storage',
  'Networking',
  'Authentication / Identity',
  'AI / ML',
  'DevOps / CI-CD',
  'Monitoring / Observability',
  'Messaging / Event Systems',
]

export const seedCards = [
  // Compute
  { id: 'lambda', name: 'Lambda', category: 'Compute', color: 'blue', image: '/logos/Lambda.png', definition: 'AWS Lambda runs code without provisioning or managing servers.', useCases: ['serverless APIs', 'event processing', 'automation'] },
  { id: 'ec2', name: 'EC2', category: 'Compute', color: 'blue', image: '/logos/EC2.webp', definition: 'Amazon EC2 provides resizable compute capacity in the cloud.', useCases: ['web servers', 'batch processing', 'enterprise apps'] },
  { id: 'ecs', name: 'ECS', category: 'Compute', color: 'blue', image: '/logos/ECS.png', definition: 'Amazon ECS is a container orchestration service.', useCases: ['microservices', 'batch jobs', 'containerized apps'] },
  { id: 'fargate', name: 'Fargate', category: 'Compute', color: 'blue', image: '/logos/Fargate.png', definition: 'AWS Fargate runs containers without managing servers.', useCases: ['serverless containers', 'microservices', 'batch processing'] },
  { id: 'kubernetes', name: 'Kubernetes', category: 'Compute', color: 'blue', image: '/logos/Kubernetes.webp', definition: 'Kubernetes is an open-source container orchestration platform.', useCases: ['container orchestration', 'auto-scaling', 'service mesh'] },
  { id: 'cloud-run', name: 'Cloud Run', category: 'Compute', color: 'blue', image: '/logos/Cloud Run.png', definition: 'Google Cloud Run is a serverless container platform.', useCases: ['stateless containers', 'APIs', 'event-driven apps'] },

  // Deployment / Hosting
  { id: 'amplify', name: 'Amplify', category: 'Deployment / Hosting', color: 'orange', image: '/logos/Amplify.png', definition: 'AWS Amplify helps developers build and deploy full-stack applications.', useCases: ['frontend hosting', 'CI/CD', 'full-stack deployment'] },
  { id: 'vercel', name: 'Vercel', category: 'Deployment / Hosting', color: 'orange', image: '/logos/Vercel.png', definition: 'Vercel is a platform for frontend frameworks and static sites.', useCases: ['Next.js hosting', 'edge functions', 'preview deployments'] },
  { id: 'netlify', name: 'Netlify', category: 'Deployment / Hosting', color: 'orange', image: '/logos/Netlify.svg', definition: 'Netlify is a platform for modern web projects.', useCases: ['static sites', 'serverless functions', 'form handling'] },
  { id: 'heroku', name: 'Heroku', category: 'Deployment / Hosting', color: 'orange', image: '/logos/Heroku.png', definition: 'Heroku is a cloud platform for building and deploying apps.', useCases: ['rapid prototyping', 'startups', 'managed infrastructure'] },
  { id: 'render', name: 'Render', category: 'Deployment / Hosting', color: 'orange', image: '/logos/Render.png', definition: 'Render is a unified cloud to build and run apps.', useCases: ['web services', 'static sites', 'background workers'] },
  { id: 'railway', name: 'Railway', category: 'Deployment / Hosting', color: 'orange', image: '/logos/Railway.png', definition: 'Railway is an infrastructure platform for deploying apps.', useCases: ['instant deployments', 'databases', 'cron jobs'] },

  // Frontend
  { id: 'react', name: 'React', category: 'Frontend', color: 'cyan', image: '/logos/React.png', definition: 'React is a JavaScript library for building user interfaces.', useCases: ['SPAs', 'component libraries', 'interactive UIs'] },
  { id: 'angular', name: 'Angular', category: 'Frontend', color: 'cyan', image: '/logos/Angular.png', definition: 'Angular is a TypeScript-based web application framework.', useCases: ['enterprise apps', 'PWAs', 'complex UIs'] },
  { id: 'vue', name: 'Vue', category: 'Frontend', color: 'cyan', image: '/logos/Vue.png', definition: 'Vue.js is a progressive JavaScript framework.', useCases: ['SPAs', 'interactive widgets', 'rapid prototyping'] },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', color: 'cyan', image: '/logos/nextjs.png', definition: 'Next.js is a React framework for production applications.', useCases: ['SSR', 'static generation', 'full-stack React'] },
  { id: 'nuxt', name: 'Nuxt', category: 'Frontend', color: 'cyan', image: '/logos/Nuxt.png', definition: 'Nuxt is a Vue.js framework for server-side rendering.', useCases: ['SSR', 'static sites', 'Vue applications'] },

  // Backend
  { id: 'spring-boot', name: 'Spring Boot', category: 'Backend', color: 'green', image: '/logos/Spring Boot.png', definition: 'Spring Boot is a Java framework for backend services and APIs.', useCases: ['enterprise APIs', 'microservices', 'backend systems'] },
  { id: 'rails', name: 'Ruby on Rails', category: 'Backend', color: 'red', image: '/logos/Ruby on Rails.png', definition: 'Ruby on Rails is a framework for building full-stack web applications.', useCases: ['CRUD apps', 'startup applications', 'admin systems'] },
  { id: 'express', name: 'Express', category: 'Backend', color: 'green', image: '/logos/Express.png', definition: 'Express is a minimal Node.js web application framework.', useCases: ['REST APIs', 'middleware', 'web servers'] },
  { id: 'django', name: 'Django', category: 'Backend', color: 'green', image: '/logos/Django.png', definition: 'Django is a Python web framework for rapid development.', useCases: ['web apps', 'REST APIs', 'admin panels'] },
  { id: 'fastapi', name: 'FastAPI', category: 'Backend', color: 'green', image: '/logos/FastAPI.png', definition: 'FastAPI is a modern Python framework for building APIs.', useCases: ['high-performance APIs', 'async services', 'ML serving'] },
  { id: 'laravel', name: 'Laravel', category: 'Backend', color: 'green', image: '/logos/Laravel.png', definition: 'Laravel is a PHP framework for web artisans.', useCases: ['web apps', 'APIs', 'queue workers'] },

  // Database
  { id: 'dynamodb', name: 'DynamoDB', category: 'Database', color: 'teal', image: '/logos/DynamoDB.svg', definition: 'Amazon DynamoDB is a fully managed NoSQL database.', useCases: ['serverless apps', 'high-scale workloads', 'key-value storage'] },
  { id: 'aurora', name: 'Aurora', category: 'Database', color: 'teal', image: '/logos/Aurora.png', definition: 'Amazon Aurora is a managed relational database service.', useCases: ['transactional systems', 'SaaS applications', 'relational workloads'] },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database', color: 'teal', image: '/logos/PostgreSQL.png', definition: 'PostgreSQL is a powerful open-source relational database.', useCases: ['OLTP', 'geospatial data', 'complex queries'] },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', color: 'teal', image: '/logos/MongoDB.png', definition: 'MongoDB is a document-oriented NoSQL database.', useCases: ['flexible schemas', 'content management', 'real-time analytics'] },
  { id: 'mysql', name: 'MySQL', category: 'Database', color: 'teal', image: '/logos/MySQL.jpg', definition: 'MySQL is a widely-used open-source relational database.', useCases: ['web applications', 'e-commerce', 'data warehousing'] },
  { id: 'redis', name: 'Redis', category: 'Database', color: 'teal', image: '/logos/Redis.png', definition: 'Redis is an in-memory data structure store.', useCases: ['caching', 'session storage', 'real-time leaderboards'] },

  // Storage
  { id: 's3', name: 'S3', category: 'Storage', color: 'yellow', image: '/logos/S3.png', definition: 'Amazon S3 is scalable object storage in the cloud.', useCases: ['file storage', 'backups', 'static hosting'] },
  { id: 'ebs', name: 'EBS', category: 'Storage', color: 'yellow', image: '/logos/EBS.png', definition: 'Amazon EBS provides block storage for EC2 instances.', useCases: ['databases', 'boot volumes', 'throughput-intensive apps'] },
  { id: 'efs', name: 'EFS', category: 'Storage', color: 'yellow', image: '/logos/EFS.png', definition: 'Amazon EFS is a managed file system for EC2.', useCases: ['shared file storage', 'content management', 'big data'] },
  { id: 'minio', name: 'MinIO', category: 'Storage', color: 'yellow', image: '/logos/MinIO.png', definition: 'MinIO is a high-performance S3-compatible object store.', useCases: ['private cloud storage', 'AI/ML data', 'backups'] },
  { id: 'cloudflare-r2', name: 'Cloudflare R2', category: 'Storage', color: 'yellow', image: '/logos/Cloudflare R2 .png', definition: 'Cloudflare R2 is zero-egress-fee object storage.', useCases: ['CDN storage', 'media assets', 'log storage'] },

  // Networking
  { id: 'api-gateway', name: 'API Gateway', category: 'Networking', color: 'indigo', image: '/logos/API Gateway.png', definition: 'Amazon API Gateway manages APIs at any scale.', useCases: ['REST APIs', 'WebSocket APIs', 'rate limiting'] },
  { id: 'cloudfront', name: 'CloudFront', category: 'Networking', color: 'indigo', image: '/logos/CloudFront.png', definition: 'Amazon CloudFront is a global content delivery network.', useCases: ['static assets', 'video streaming', 'API acceleration'] },
  { id: 'route53', name: 'Route 53', category: 'Networking', color: 'indigo', image: '/logos/Route53.webp', definition: 'Amazon Route 53 is a scalable DNS web service.', useCases: ['domain registration', 'DNS routing', 'health checks'] },
  { id: 'nginx', name: 'NGINX', category: 'Networking', color: 'indigo', image: '/logos/NGINX.png', definition: 'NGINX is a web server and reverse proxy.', useCases: ['load balancing', 'reverse proxy', 'static serving'] },
  { id: 'kong', name: 'Kong', category: 'Networking', color: 'indigo', image: '/logos/Kong.png', definition: 'Kong is a cloud-native API gateway.', useCases: ['API management', 'microservices', 'service mesh'] },
  { id: 'load-balancers', name: 'Load Balancers', category: 'Networking', color: 'indigo', image: '/logos/Load Balancers.png', definition: 'Load balancers distribute traffic across targets.', useCases: ['high availability', 'auto-scaling', 'fault tolerance'] },

  // Authentication / Identity
  { id: 'cognito', name: 'Cognito', category: 'Authentication / Identity', color: 'pink', image: '/logos/Cognito.jpg', definition: 'Amazon Cognito provides user authentication and authorization.', useCases: ['user sign-up', 'social login', 'MFA'] },
  { id: 'auth0', name: 'Auth0', category: 'Authentication / Identity', color: 'pink', image: '/logos/Auth0.png', definition: 'Auth0 is an identity platform for developers.', useCases: ['SSO', 'social login', 'passwordless auth'] },
  { id: 'okta', name: 'Okta', category: 'Authentication / Identity', color: 'pink', image: '/logos/Okta.png', definition: 'Okta is an enterprise identity management service.', useCases: ['workforce identity', 'SSO', 'lifecycle management'] },
  { id: 'keycloak', name: 'Keycloak', category: 'Authentication / Identity', color: 'pink', image: '/logos/Keycloak.png', definition: 'Keycloak is an open-source identity and access management tool.', useCases: ['SSO', 'LDAP integration', 'social login'] },
  { id: 'iam', name: 'IAM', category: 'Authentication / Identity', color: 'pink', image: '/logos/IAM.png', definition: 'AWS IAM manages access to AWS services securely.', useCases: ['access control', 'roles', 'policies'] },

  // AI / ML
  { id: 'nova', name: 'Nova', category: 'AI / ML', color: 'purple', image: '/logos/Nova.png', definition: 'Amazon Nova is a family of foundation models for generative AI applications.', useCases: ['chatbots', 'content generation', 'reasoning'] },
  { id: 'bedrock', name: 'Bedrock', category: 'AI / ML', color: 'violet', image: '/logos/Bedrock.png', definition: 'Amazon Bedrock provides access to foundation models through managed APIs.', useCases: ['AI agents', 'model inference', 'generative AI apps'] },
  { id: 'openai', name: 'OpenAI', category: 'AI / ML', color: 'purple', image: '/logos/OpenAI.png', definition: 'OpenAI provides advanced AI models and APIs.', useCases: ['chatbots', 'code generation', 'content creation'] },
  { id: 'claude', name: 'Claude', category: 'AI / ML', color: 'purple', image: '/logos/Claude.png', definition: 'Claude is an AI assistant by Anthropic.', useCases: ['analysis', 'coding', 'writing'] },
  { id: 'hugging-face', name: 'Hugging Face', category: 'AI / ML', color: 'purple', image: '/logos/Hugging Face.png', definition: 'Hugging Face is a platform for open-source ML models.', useCases: ['NLP', 'model hosting', 'datasets'] },
  { id: 'vertex-ai', name: 'Vertex AI', category: 'AI / ML', color: 'purple', image: '/logos/Vertex AI.png', definition: 'Google Vertex AI is a managed ML platform.', useCases: ['model training', 'prediction', 'MLOps'] },

  // DevOps / CI-CD
  { id: 'github', name: 'GitHub', category: 'DevOps / CI-CD', color: 'gray', image: '/logos/Github.png', definition: 'GitHub is a platform for version control and collaboration.', useCases: ['source control', 'CI/CD', 'code review'] },
  { id: 'gitlab', name: 'GitLab', category: 'DevOps / CI-CD', color: 'gray', image: '/logos/GitLab.png', definition: 'GitLab is a DevOps platform for the software lifecycle.', useCases: ['CI/CD', 'source control', 'security scanning'] },
  { id: 'terraform', name: 'Terraform', category: 'DevOps / CI-CD', color: 'gray', image: '/logos/Terraform.png', definition: 'Terraform is an infrastructure-as-code tool.', useCases: ['cloud provisioning', 'multi-cloud', 'state management'] },
  { id: 'jenkins', name: 'Jenkins', category: 'DevOps / CI-CD', color: 'gray', image: '/logos/Jenkins.png', definition: 'Jenkins is an open-source automation server.', useCases: ['CI/CD pipelines', 'build automation', 'testing'] },
  { id: 'circleci', name: 'CircleCI', category: 'DevOps / CI-CD', color: 'gray', image: '/logos/CiercleCI.png', definition: 'CircleCI is a continuous integration and delivery platform.', useCases: ['automated testing', 'deployments', 'pipelines'] },

  // Monitoring / Observability
  { id: 'cloudwatch', name: 'CloudWatch', category: 'Monitoring / Observability', color: 'rose', image: '/logos/CloudWatch.png', definition: 'Amazon CloudWatch monitors AWS resources and applications.', useCases: ['metrics', 'logs', 'alarms'] },
  { id: 'datadog', name: 'Datadog', category: 'Monitoring / Observability', color: 'rose', image: '/logos/Datadog.png', definition: 'Datadog is a monitoring and analytics platform.', useCases: ['APM', 'infrastructure monitoring', 'log management'] },
  { id: 'grafana', name: 'Grafana', category: 'Monitoring / Observability', color: 'rose', image: '/logos/Grafana.png', definition: 'Grafana is an open-source visualization platform.', useCases: ['dashboards', 'alerting', 'data exploration'] },
  { id: 'prometheus', name: 'Prometheus', category: 'Monitoring / Observability', color: 'rose', image: '/logos/Prometheus.png', definition: 'Prometheus is an open-source monitoring system.', useCases: ['metrics collection', 'alerting', 'time-series data'] },
  { id: 'new-relic', name: 'New Relic', category: 'Monitoring / Observability', color: 'rose', image: '/logos/New Relic.png', definition: 'New Relic is an observability platform.', useCases: ['APM', 'error tracking', 'distributed tracing'] },

  // Messaging / Event Systems
  { id: 'sqs', name: 'SQS', category: 'Messaging / Event Systems', color: 'amber', image: '/logos/SQS.jpg', definition: 'Amazon SQS is a managed message queuing service.', useCases: ['decoupling', 'async processing', 'buffering'] },
  { id: 'sns', name: 'SNS', category: 'Messaging / Event Systems', color: 'amber', image: '/logos/SNS.png', definition: 'Amazon SNS is a pub/sub messaging service.', useCases: ['notifications', 'fan-out', 'event-driven'] },
  { id: 'eventbridge', name: 'EventBridge', category: 'Messaging / Event Systems', color: 'amber', image: '/logos/EventBridge.png', definition: 'Amazon EventBridge is a serverless event bus.', useCases: ['event routing', 'SaaS integration', 'scheduling'] },
  { id: 'kafka', name: 'Kafka', category: 'Messaging / Event Systems', color: 'amber', image: '/logos/Kafka.png', definition: 'Apache Kafka is a distributed event streaming platform.', useCases: ['event streaming', 'log aggregation', 'real-time pipelines'] },
  { id: 'rabbitmq', name: 'RabbitMQ', category: 'Messaging / Event Systems', color: 'amber', image: '/logos/RabbitMQ.png', definition: 'RabbitMQ is an open-source message broker.', useCases: ['task queues', 'pub/sub', 'request/reply'] },
]

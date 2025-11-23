<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

A NestJS REST API built with TypeScript. This project demonstrates a simple books API using NestJS framework.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (v8 or higher) - Install globally with `npm install -g pnpm`
- **NestJS CLI** (optional, but recommended) - Install globally with `pnpm install -g @nestjs/cli`

## Installation

### 1. Install NestJS CLI (if not already installed)

```bash
pnpm install -g @nestjs/cli
```

### 2. Clone and Install Dependencies

```bash
# Clone the repository (if applicable)
# git clone <repository-url>
# cd nest-api

# Install project dependencies
pnpm install
```

## Project Setup

The project is already configured with:
- TypeScript compilation
- ESLint for code linting
- Prettier for code formatting
- Jest for testing

## Running the Project

### Development Mode

Start the application in development mode with hot-reload:

```bash
pnpm run start:dev
```

The API will be available at `http://localhost:3000`

### Production Mode

First, build the project:

```bash
pnpm run build
```

Then start the production server:

```bash
pnpm run start:prod
```

### Debug Mode

Start the application in debug mode:

```bash
pnpm run start:debug
```

### Standard Start

Start the application without watch mode:

```bash
pnpm run start
```

## Environment Variables

The application supports the following environment variable:

- `PORT` - Server port (default: 3000)

Example:

```bash
PORT=8080 pnpm run start:dev
```

## API Endpoints

### Books

- `GET /books/all` - Get all books

Example request:
```bash
curl http://localhost:3000/books/all
```

## Project Structure

```
nest-api/
├── src/
│   ├── app.controller.ts    # Main controller
│   ├── app.service.ts       # Main service
│   ├── app.module.ts        # Root module
│   ├── main.ts              # Application entry point
│   └── FakeDatabase.ts      # Mock database
├── test/                    # E2E tests
├── dist/                    # Compiled output (generated)
├── nest-cli.json            # NestJS CLI configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## Available Scripts

### Development

- `pnpm run start` - Start the application
- `pnpm run start:dev` - Start in watch mode (development)
- `pnpm run start:debug` - Start in debug mode
- `pnpm run start:prod` - Start in production mode

### Building

- `pnpm run build` - Build the project for production

### Code Quality

- `pnpm run format` - Format code with Prettier
- `pnpm run lint` - Lint code with ESLint

### Testing

- `pnpm run test` - Run unit tests
- `pnpm run test:watch` - Run tests in watch mode
- `pnpm run test:cov` - Run tests with coverage
- `pnpm run test:debug` - Run tests in debug mode
- `pnpm run test:e2e` - Run end-to-end tests

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can:

1. Kill the process using port 3000:
   ```bash
   lsof -ti :3000 | xargs kill -9
   ```

2. Or use a different port:
   ```bash
   PORT=3001 pnpm run start:dev
   ```

### Module Not Found Errors

If you encounter module not found errors, try:

```bash
pnpm install
```

## Learn More

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS CLI Documentation](https://docs.nestjs.com/cli/overview)

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

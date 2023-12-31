# CRUD Operations
# Express Application with MongoDB using TypeScript

This is an Express application with CRUD operations.

## Live-Link 

https://type-practice.vercel.app/


## End-Points:

- /api/users(POST) [Create a user]
- /api/users(GET) [Get all users]
- /api/users/:userId(GET) [Get a user info]
- /api/users/:userId(PUT) [Update a user]
- /api/users/:userId(DELETE) [Delete a user]
- /api/users/:userId/orders(PUT) [Add New Product in Order]
- /api/users/:userId/orders(GET) [Retrieve all orders for a specific user]
- /api/users/:userId/orders/total-price(GET) [Calculate Total Price of Orders for a Specific User]


## Prerequisites

Ensure you have the following installed before running the application:

- Node.js and npm (Node Package Manager)
- MongoDB (Make sure the MongoDB server is running)

## Installation

1. Clone the repository:

2. Navigate to the project directory:

   ```bash
   cd your-express-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and specify the required environment variables:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   ```

## Running the Application

To run the Express application in development mode:

```bash
npm run start:dev
```

The server will start at `http://localhost:3000` by default.

## Available Scripts

- `npm run lint:fix`: Fix errors
- `npm run lint`: Find the errors if any.


This README.md file provides instructions for installation, running the application, available scripts, project structure, contributing guidelines, and licensing information. Adjust it according to your project's specific setup and requirements.

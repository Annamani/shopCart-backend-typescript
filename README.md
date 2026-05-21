# shopCart-backend-typescript(TypeScript)

## About the Project

ShopCart Backend API is a RESTful backend application built with Node.js, Express.js, and TypeScript.
The project provides shopping cart functionality including cart creation,product creation, product management, cart total calculation, and cart deletion with validation and error handling.

The application uses file-based JSON storage to manage products and carts and demonstrates backend architecture, TypeScript integration, API validation, and modular service-based development.

## Features

- Add new products to products list
- Create new shopping carts
- Get all carts
- Add products to cart
- Calculate cart total dynamically
- Delete cart by ID
- Product ID validation before adding items
- New Products validation using Zod
- Cart request validation using Zod
- Error handling with meaningful API responses
- Modular architecture using Controllers, Services, Models, and Repositories

## Technologies Used

- TypeScript
- Node.js
- Express.js
- Zod
- REST API

## Installation

### Prerequisites

- Node.js
- npm

### Clone Repository

1. Clone repository from below link
   git clone https://github.com/Annamani/shopCart-backend-typescript.git
2. Navigate to folder
   cd shopCart-backend-typescript
3. Install Dependencies
   npm install
4. Run Development Server
   npm run dev
5. Server runs on: http://localhost:3000

## API Endpoints

- GET /products - Get all products
- POST /products - Create a new Product
- GET /cart - Get all carts
- POST /cart - Create new cart
- POST /cart/add - Add item to cart
- GET /cart/total - Calculate cart total
- DELETE /cart/:cartId - Delete cart

## Contributors
- [Annamani](https://github.com/Annamani)
- [Abirame](https://github.com/abikrithika)
- [Jyoti](https://github.com/JyotiHYF)
## Repository

https://github.com/Annamani/shopCart-backend-typescript

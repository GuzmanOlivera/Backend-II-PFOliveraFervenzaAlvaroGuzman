# SurtidoCompleto

This project is a web application for managing products and shopping carts, utilizing Node.js, Express, MongoDB with mongoose and mongoose-paginate-v2 for efficient database operations, Socket.IO for real-time communication, Handlebars for templating, passport for authentication, bcrypt for password encryption, JWT for secure token-based authentication and dotenv for environment variable management.

## Overview

The name "SurtidoCompleto" reflects the idea of providing a complete assortment or full range of products, emphasizing comprehensive and extensive offerings within the project.

## Features

- **Product management**: Add, update, delete, and list products with support for pagination, filtering, and sorting.
- **Cart Management**: Create carts, add products to carts, update product quantities, remove products from carts, and view cart details.
- **Ticketing system**: Automatically generate tickets for purchases.
- **Real-time product Updates**: Use Socket.IO for live updates in product management.
- **User authentication**: Secure user registration and login using JWT with password encryption via bcrypt.
- **Role-based access control**: Roles such as 'user' and 'admin' for restricted access.
- **User information**: Retrieve the logged-in user's information securely.
- **User interface**: Handlebars templates combined with Bootstrap and custom CSS for a clean, user-friendly UI.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/GuzmanOlivera/PFOliveraFervenzaAlvaroGuzman.git
   ```

2. Navigate to the project directory:

   ```bash
   cd PFOliveraFervenzaAlvaroGuzman
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

# Endpoints

## Carts

- `POST /api/carts`: Create a new cart.
- `GET /api/carts/:cid`: Get a cart by its ID.
- `POST /api/carts/:cid/products/:pid`: Add a product to the cart.
- `PUT /api/carts/:cid/products/:pid`: Update a product in the cart. You can optionally specify the desired product quantity in the request body.
- `DELETE /api/carts/:cid/products/:pid`: Remove a product from the cart.
- `PUT /api/carts/:cid`: Update an entire cart.
- `DELETE /api/carts/:cid`: Clear all products from the cart.
- `GET /api/carts/:cid/purchase`: Generate a ticket after purchasing.

## Products

- `GET /api/products`: Retrieves a paginated list of products with optional filtering and sorting capabilities.
  - It supports the following filters:
    - category (string): Filter products by category.
    - availability (boolean): Filter products by availability. Use true for available products and false for unavailable ones.
  - It also, can sort by price in ascending or descending order:
    -  asc: Sorts products with the lowest price first. 
    -  desc: Sorts products with the highest price first.
- `GET /api/products/:pid`: Get a product by its ID.
- `POST /api/products`: Add a new product.
- `PUT /api/products/:pid`: Update an existing product.
- `DELETE /api/products/:pid`: Delete a product.

## Users

### Authentication

- `POST /api/users/register`: Register a new user. Requires username, first name, last name, email, age, password, and role.
- `POST /api/sessions/login`: Authenticate a user and return a JWT token.
- `POST /api/sessions/logout`: Log out the current user.
- `GET /api/sessions/current`: Validate the logged-in user and return their associated data.


### CRUD operations

- `GET /api/users/`: Get all users.
- `GET /api/users/:uid`: Get user by its ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:uid`: Update a user.
- `DELETE /api/users/:uid`: Delete a user.

### Views

`/`: Home page displaying a list of products.
`/realtimeproducts`: Real-time product management page.
`/carts/:cid`: View a cart's details.
`/login`: Login page.
`/register`: Registration page.
`/onlyAdmin`: Admin access-only page. This view it's shown when user is accessing protected routes.
`/onlyUser`: User access-only page. This view it's shown when admin is accessing protected routes.

# Project Structure

**Controllers**: Manage the business logic of carts, products, users, and sessions.

`src/controllers/carts.controller.js`
`src/controllers/products.controller.js`
`src/controllers/users.controller.js`

**Routes**: Define the endpoints for managing products, carts, users, and views.

`src/routes/carts.router.js`: Routes for cart management.
`src/routes/products.router.js`: Routes for product management.
`src/routes/session.router.js`: Routes for user sessions (login, logout).
`src/routes/users.router.js`: Routes for user management.
`src/routes/views.router.js`: Routes for rendering Handlebars views.

**DAO (Managers)**: Act as the data access layer, handling operations for products, carts, tickets, and users.
`src/dao/db/cart-manager-db.js`
`src/dao/db/product-manager-db.js`
`src/dao/db/ticket-manager-db.js`
`src/dao/db/user-manager-db.js`

**DTO (Data Transfer Objects)**: Ensure only necessary data is sent between layers.
`src/dto/cart.dto.js`
`src/dto/product.dto.js`
`src/dto/ticket.dto.js`
`src/dto/user.dto.js`

**Middleware**: Authentication and role-based access control.

`src/middleware/auth.js`: Extracts the user from JWT and handles access control for different roles.

**Services**: Contain business logic and interface with repositories.

`src/services/carts.service.js`
`src/services/products.service.js`
`src/services/users.service.js`

**Repositories**: Interfaces to interact with the DAOs.

`src/repositories/cartRepository.js`
`src/repositories/productRepository.js`
`src/repositories/ticketRepository.js`
`src/repositories/userRepository.js`

**Models**: Define the database schema for products, carts, tickets, and users.

`src/dao/models/cart.model.js`
`src/dao/models/product.model.js`
`src/dao/models/ticket.model.js: New model for handling purchase tickets.`
`src/dao/models/user.model.js`

**Views**: Handlebars templates for rendering pages.

`src/views/layouts/main.handlebars`
`src/views/cartDetail.handlebars`
`src/views/home.handlebars`
`src/views/login.handlebars`
`src/views/register.handlebars`
`src/views/onlyAdmin.handlebars`
`src/views/onlyUser.handlebars`
`src/views/realTimeProducts.handlebars`

**Environment variables**

- `.env`: Environment variables for connecting MongoDB database.

**Core configuration and public asset**

- `src/app.js`: Main application and server configuration.
- `src/config/database.js`: MongoDB database connection and configuration.
- `src/config/passport.config.js`: Passport configuration for user authentication.
- `src/public/js/main.js`: Client-side logic for real-time interaction.
- `src/public/css/style.css`: Custom application styles.

### Notes

This project uses MongoDB for data storage and retrieval. Ensure that you have MongoDB configured. Additionally, it is needed to create a .env file in the root directory of the project, following the structure outlined in .env.example, to set up environment variables for connecting to MongoDB.
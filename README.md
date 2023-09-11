# E-commerce product list app

<img width="960" alt="home page" src="https://github.com/San033/e-commerce/assets/137187976/7e05227f-b107-4e69-a7e2-1a3bc17b4a8a">
This application purpose is to help managing a list of products for e-commerce purposes. It includes both frontend and backend components that allow users to view, add, edit, and delete product list.

## About the Application

This application is a e-commerce products management tool designed to assist seller or e-commerce in tracking products data. The application encompasses four main functions: viewing a list of products, adding new products, editing existing product data, and deleting selected product.

## Features

- **Search Product List:** Display a complete list of products with product's ID, product's name, and product's description.
- **Add New Product:** Add new product with name, description and product's rating.
- **Edit/Update product Data:** Modify existing product data, including name and description.
- **Delete Products:** Remove existing product entries from the list.

<img width="960" alt="product page" src="https://github.com/San033/e-commerce/assets/137187976/49023d49-4f2a-486d-9873-0e8726020e93">

## Getting Started

### Prerequisites

Before getting started, make sure you have met the following requirements:

- Node.js is installed on your computer.
- PostgreSQL database is configured and running. Update the database configuration in `knexfile.js` if necessary.
  you can see my knexfile.js for see my data base and you can change
- if you "change" data base don't forget to running migrations and seed

## How to Run Migration and Seed

1. first running migration: npx knex migrate:latest
2. second running Seed : npx knex seed:run

## Instalation

Terminal Bash:

1.  git clone https://github.com/San033/e-commerce.git
2.  cd e-commerce
3.  npm install

## Usage

1. cd e-commerce
2. npm run start
   The server will run on http://localhost:3000.
3. open another terminal
4. npm run serve
   Open your browser and access the frontend at http://localhost:5000.
   You can click "Product" for see product menu

## API Endpoints

The following API endpoints are available:\

1. POST /products/create: Create new product.
2. GET /products/all: Get all products list available.
3. PUT /products/update/:id: Update a product by ID.
4. DELETE /product/delete:id: Delete a product by ID.
   You can use these endpoints to interact with the product data.

## Postman Documenter

https://documenter.getpostman.com/view/29458305/2s9YC1VZSD

# Simple E-commerce

Simple E-commerce is a straightforward e-commerce application developed using NEXT.js. It includes essential pages such as Home, Product, and Cart, along with a seamless checkout process integrated with Stripe.

## Features

- **Home Page**: Provides an overview of the available products.
- **Product Page**: Displays detailed information about a selected product.
- **Cart Page**: Allows users to review and manage items added to the cart.
- **Checkout Process**: Seamlessly integrates with Stripe for secure and efficient payment processing.

## Demo Project

This project serves as a demonstration for a portfolio and showcases the use of NEXT.js and React. It is intended to illustrate the experienced utilization of these technologies and does not represent a fully functional production-ready e-commerce solution.
## Next Features

The following features are planned to be added in future iterations:

- **State Management**: Implement a robust state management solution (e.g., Redux) to efficiently manage the application state.
- **User Management with NextAuth**: Integrate NextAuth for user authentication and authorization to enhance security and user experience.
- **Additional Payment Gateways**: Add support for more payment gateways to offer users more payment options.
- **Product Reviews and Ratings**: Allow users to leave reviews and ratings for products to enhance the shopping experience.

## Technologies Used

- **NEXT.js**: A React framework for building server-side rendered React applications.
- **React**: A JavaScript library for building user interfaces.
- **Stripe**: A payment processing platform for online transactions.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed on your local machine.
- Stripe account for handling payments (API keys required).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SamantaPM/simple-ecommerce.git

2. Navigate to the project directory
   ```sh
   cd simple-ecommerce
3. Install dependencies
   ```sh
   npm install
4. Set up environment variables
   - Create a .env.local file in the root directory.
   - Add your Stripe API keys to the .env.local file.
   ```sh
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key

### Usage
1. Start the development server
2. Open your browser and visit http://localhost:3000 to see the application.

### Deployment 
To deploy the Simple Ecommerce application, follow the deployment instructions provided by Next.js for your preferred hosting platform.

## License
Distributed under the MIT License. See LICENSE for more information.

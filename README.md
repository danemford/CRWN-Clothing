# Ecommerce Store
Welcome to my E-commerce project, a comprehensive platform designed to showcase the capabilities of a real-world online shopping experience. While this is primarily a portfolio project, it mirrors the functionality you'd expect from a professional E-commerce platform.

## Tech Stack
Here is the tech stack I used in this project:

**React**: The primary JavaScript library used to build the user interface and manage state.

**Firebase**: Firebase handles user authentication, allowing sign-ins with Google accounts and traditional email-password combinations. It also provides a database solution for storing user data, cart items, and product details.

**Styled Components**: Leveraged for styling the components, ensuring a responsive and visually appealing design.

**Netlify**: The platform chosen for deploying and hosting the E-commerce project, offering seamless integration with the development environment and continuous deployment capabilities.

## Features
Here are some of the features:

**Shopping Cart**: Add items to your cart and witness live updates as you modify its contents.

**Checkout System**: A robust checkout page where items can be increased, decreased, or removed. It provides a real-time reflection of changes both on the checkout page and cart component.

**Authentication**: With Firebase, users can sign in using their Google accounts. Additionally, features for traditional sign-up and sign-in using email and password have been incorporated.

## Challenges
One of the main challenges was ensuring seamless integration between different services, especially Firebase for authentication and storage. Creating a user-friendly interface that dynamically updates based on cart changes was another hurdle which involved learning how to use React's Context API.

## Future Improvements
Here are some of the features I would like to add in the future:

Stripe API Integration: In the pipeline is the integration with Stripe API to simulate the payment process, providing a hands-on experience of building with Stripe.
Replace React Context API with Redux for state management: While the Context API is sufficient for this project, Redux is a more robust solution for managing state in larger applications.

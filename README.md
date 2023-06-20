

# E-commerce Project Back-End

This is an E-commerce project built using Node.js, Express.js, Sequelize, MySQL, bcrypt, and seed.

## Project Overview

The E-commerce project is an online platform designed to facilitate the buying and selling of products. It provides features such as user registration, product catalog, shopping cart functionality, order management, and user authentication.

## Prerequisites

Before running the E-commerce project, ensure you have the following prerequisites installed on your machine:

- Node.js (v12 or above)
- MySQL database
- Package manager (npm or yarn)

## Getting Started

To get started with the E-commerce project, follow these steps:

1. Clone the repository:

Copy code
git clone https://github.com/petrosyan-zaven/RELQ-main-back

2. Install dependencies:

cd e_commerce_back
npm install


3. Database Configuration:

- Create a MySQL database for the project.
- Configure the database connection settings in the `config/config.json` file.

4. Run database migrations:
npx sequelize-cli db:migrate


5. Seed the database (optional):
npx sequelize-cli db:seed:all


This will populate the database with initial data.
6. Start the server:

npm start


This will start the server and make the application available at `http://localhost:5000`.

## Project Structure

The project structure follows a common MVC (Model-View-Controller) pattern:

- **config:** Contains configuration files, including database configuration.
- **controllers:** Handles the application logic by interacting with models and sending responses to views.
- **models:** Defines the database schema and handles data access.
- **routes:** Defines the API endpoints and routes requests to the appropriate controller.
- **views:** Contains the templates and views for rendering HTML pages (if using server-side rendering).
- **public:** Stores static files (CSS, JavaScript, images, etc.) served by the application.
- **migrations:** Contains database migration files to manage schema changes.
- **seeders:** Contains seed files to populate the database with initial data.

## Contributing

If you would like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch to your fork.
4. Submit a pull request, explaining the changes you have made.

## License

The E-commerce project is open-source and released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the codebase as per the terms of the license.

## Contact

If you have any questions, suggestions, or issues, please feel free to contact the project maintainers at[petrosyanzaven310@gmail.com]



# E-commerce Project Front-end 

This is the README documentation for the E-commerce front-end project, which is built using ReactJS, AntD, and SCSS.

## Project Overview

The E-commerce front-end project is a user interface for the E-commerce platform. It provides a responsive and interactive interface for users to browse products, add items to the cart, manage orders, and perform various other e-commerce functionalities.

## Prerequisites

Before running the E-commerce front-end project, ensure you have the following prerequisites installed on your machine:

- Node.js (v12 or above)
- Package manager (npm or yarn)

## Getting Started

To get started with the E-commerce front-end project, follow these steps:

1. Clone the repository:
git clone https://github.com/petrosyan-zaven/RELQ-main-front


2. Install dependencies:
cd e-commerce-front
npm install


3. Start the development server:



This will start the development server and make the application available at `http://localhost:3005`.

## Project Structure

The project structure follows a component-based architecture, with reusable components organized in a hierarchical structure:

- **src:** Contains the main source code of the project.
- **components:** Contains reusable components used throughout the application.
- **pages:** Contains individual pages or views of the application.
- **styles:** Contains SCSS files for custom styling.
- **utils:** Contains utility functions and helper modules.
- **App.js:** The main entry point of the application.
- **index.js:** The root file that renders the application.

## Customization and Theming

The E-commerce front-end project is built on top of AntD, which provides a powerful theming mechanism. You can easily customize the design and theme of the application by modifying the AntD theme variables or creating your own SCSS styles.

To customize the AntD theme, refer to the [AntD Customization](https://ant.design/docs/react/customize-theme) documentation.

To modify the SCSS styles, navigate to the `src/styles` directory and update the SCSS files according to your needs.

## Deployment

To deploy the E-commerce front-end project for production, you need to build the optimized bundle. Follow these steps:

1. Run the build command:


2. The optimized and minified files will be generated in the `build` directory.
3. Deploy the contents of the `build` directory to your preferred hosting platform.

## Contributing

If you would like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch to your fork.
4. Submit a pull request, explaining the changes you have made.

## License

The E-commerce front-end project is open-source and released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the codebase as per the terms of the license.

## Acknowledgments

- [ReactJS](https://reactjs.org/)
- [AntD](https://ant.design/)
- SCSS

## Contact

If you have any questions, suggestions, or issues, please feel free to contact the project maintainers at [petrosyanzaven310@gmail.com].


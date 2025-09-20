# GEMINI.md

## Project Overview

This is a web application called "MindMatch" built with React, Vite, and AWS Amplify. The application is designed to connect corporate professionals with specialized psychologists based on their unique needs and preferences. It features a landing page, a survey for matching users with psychologists, and a page to browse psychologists. The backend is powered by AWS Amplify, using Cognito for authentication and AppSync with DynamoDB for the API and database.

## Building and Running

### Prerequisites

*   Node.js and npm
*   AWS Amplify CLI

### Installation

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the application

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the Vite development server and open the application in your browser at `http://localhost:5173`.

### Building the application

To build the application for production, use the following command:

```bash
npm run build
```

This will create a `dist` directory with the production-ready files.

### Linting the application

To lint the application, use the following command:

```bash
npm run lint
```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling.
*   **Components:** The project uses a component-based architecture with components located in the `src/components` directory.
*   **Routing:** The project uses `react-router-dom` for routing.
*   **State Management:** The project uses `@tanstack/react-query` for state management.
*   **Backend:** The project uses AWS Amplify for the backend, with the backend code located in the `amplify` directory.

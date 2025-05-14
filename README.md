## UI Inspiration

Design inspiration from this Behance project:  
🔗 [Dashboard Overview Inspi.](https://www.figma.com/design/mFEgP4AtSU7AABYlcV0qvE/Free-Hospital-Management-System-Dasboard-Design-Template--Community-?node-id=0-1&p=f&t=Kn76POP352M1LSM1-0)













# Acme Corp - Patient Dashboard (MERN Prototype)

This is a take-home challenge prototype for a Patient Dashboard for Acme Corp. It includes a React frontend (Vite, Tailwind CSS) and a Node.js/Express.js backend.

## Core Features Implemented in Prototype:

*   **Secure User Authentication:**
    *   Login page.
    *   Mock authentication (hardcoded user: `patient@acme.com` / `password123`).
    *   JWT-based session management.
    *   Protected routes for dashboard pages.
*   **Dashboard Overview:**
    *   Landing page showing key summary mock data (current weight, next shipment, progress).
*   **Weight Loss Progress:**
    *   View historical weight data (chart using Recharts and a table).
    *   Display related mock metrics (BMI, progress towards goal).
*   **Medication & Shipment Tracking:**
    *   View details of mock past and upcoming shipments.
    *   Display mock current medication details.

## Project Structure

*   `/client`: Contains the React frontend application.
*   `/server`: Contains the Node.js/Express.js backend API.

## Prerequisites

*   Node.js (v18.x or later recommended)
*   npm (v9.x or later recommended) or yarn

## Setup & Running

### 1. Backend (`server/`)

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Create environment file:**
    Copy `.env.example` to a new file named `.env`:
    ```bash
    cp .env.example .env
    ```
    Open `.env` and set your `JWT_SECRET`. A simple string is fine for this prototype (e.g., `mysecretkey123`).
    The `PORT` is set to `5001` by default. `CLIENT_URL` should match your frontend dev server (default `http://localhost:5173`).

4.  **Run the backend server:**
    For development (with nodemon, restarts on file changes):
    ```bash
    npm run dev
    ```
    For production (less common for local dev):
    ```bash
    npm start
    ```
    The backend API will be running on `http://localhost:5001` (or your configured port).

### 2. Frontend (`client/`)

1.  **Navigate to the client directory (from the root project folder):**
    ```bash
    cd client
    # If you are already in server/, do: cd ../client
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Run the frontend development server (Vite):**
    ```bash
    npm run dev
    ```
    The frontend application will be accessible at `http://localhost:5173` (Vite's default port). Vite is configured to proxy API requests starting with `/api` to the backend server at `http://localhost:5001`.

## Using the Application

1.  Ensure both the backend and frontend servers are running.
2.  Open your browser and navigate to `http://localhost:5173`.
3.  You will be redirected to the login page.
4.  Use the following mock credentials:
    *   **Email:** `patient@acme.com`
    *   **Password:** `password123`
5.  Upon successful login, you will be redirected to the Dashboard Overview page.
6.  Navigate through the dashboard sections: Overview, Weight Progress, and Shipments.

## Design Choices & Technologies

*   **Frontend:**
    *   React (with Vite for fast development and optimized builds)
    *   Tailwind CSS (for utility-first styling)
    *   React Router DOM (for client-side routing)
    *   Axios (for HTTP requests)
    *   Recharts (for displaying charts)
    *   Context API (for global state management like authentication)
*   **Backend:**
    *   Node.js
    *   Express.js (for building the REST API)
    *   jsonwebtoken (for JWT authentication)
    *   cors (to enable cross-origin requests from the frontend)
    *   dotenv (for environment variables)
*   **Data:**
    *   All data is currently mocked in the backend for this prototype. No database is connected.

## Further Considerations (Beyond Prototype)

*   **Real Database:** Integrate MongoDB (with Mongoose) or another database for persistent storage.
*   **Full CRUD for Weight/Shipments:** Implement API endpoints and UI for creating, updating, and deleting weight entries and managing shipments (if applicable).
*   **User Registration:** Add a registration flow.
*   **Enhanced Error Handling:** More robust error handling on both frontend and backend.
*   **Input Validation:** Comprehensive validation for all user inputs.
*   **Testing:** Unit, integration, and end-to-end tests.
*   **Security Hardening:** Implement security best practices (HTTPS, rate limiting, input sanitization, Helmet.js for backend, CSRF protection if using cookies, etc.).
*   **Accessibility (a11y):** Ensure the UI is accessible.
*   **Responsiveness:** Improve mobile views and interactions.
*   **State Management:** For larger applications, consider more advanced state management like Zustand or Redux Toolkit.
*   **Deployment:** Containerize with Docker and deploy to a cloud platform (AWS, GCP, Azure).
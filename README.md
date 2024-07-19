
## Running the Frontend 

To set up and run the frontend of the application, follow these steps:

1. Navigate to the frontend directory:
   ```sh 
   cd frontend/Task Test
   ```
2. Install all the required packages:
    ```
    npm install
    ```
3. Start the frontend on your local host:
    ```
    npm run dev
    ```
This will start the frontend development server, and you should be able to access the application on your local host.

## Running the Backend
To start the backend, follow these steps:
1. Navigate to the backend directory:
    ```
    cd backend
    ```
2. Ensure your database is running and properly connected.
3. Start the server using the following command:
    ```
    npm start
    ```

### Note:
Make sure to create a `.env` file in the backend directory with the following database configuration variables:

    PORT=[port to listen on]
    DB_HOST=localhost
    DB_PORT=[your database port]
    DB_NAME=[database name]
    DB_USERNAME=[database username]
    DB_PASSWORD=[database password]

Replace the placeholder values with your actual configuration details.

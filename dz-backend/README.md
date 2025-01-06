# Project Setup and Migrations

## Steps to Run Migrations

1. **Make a copy of the `.env` file** and configure the PostgreSQL connection string as needed.

    ```bash
    cp .env.example .env
    ```

   Update the `DATABASE_URL` in the `.env` file with your PostgreSQL connection details.

2. **Run migrations** using the following command:

    ```bash
    npm run migrations:run
    ```

3. (Optional) **Configure cron job settings** in the `.env` file if necessary.

4. You can also find the Swagger API docs here
    ```
   http://localhost:5000/docs
   ```
---

That's it! You can now run the application and interact with the database.

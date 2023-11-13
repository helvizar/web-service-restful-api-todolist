# TodoList API Documentation 🚀

Welcome to the TodoList API documentation! Below, you'll discover the magic of managing your todos seamlessly.

**Important Note:** This API is designed to be interacted with using tools like Postman, as there is currently no graphical user interface available.

If you prefer a hassle-free experience, alternatively, you can download the pre-configured Postman collection:
[Todo API Collection](https://github.com/helvizar/cloud/files/13339927/Express.Todo.Api.postman_collection.json).
Import it into your Postman application and start managing your todos effortlessly! 🚀

## Register User ✨

- **Method:** `POST`
- **URL:** `https://express-todolist-api.cyclic.app/auth/register`
- **Body (raw JSON):**

```
"username": "your_username",
"password": "your_password",
"email": "your_email@example.com",
"fullname": "Your Full Name"
```

## Login 🚪

- **Method:** `POST`
- **URL:** `https://express-todolist-api.cyclic.app/auth/login`
- **Body (raw JSON):**

```
"username": "your_username",
"password": "your_password",
```

## Create Todo 📝

**Note:**
To interact with the API, use a tool like Postman. Follow the instructions below to manage your todos effectively. Make sure to include the Bearer token in the Authorization header for authentication.

- **Method:** `POST`
- **URL:** `https://express-todolist-api.cyclic.app/todos` 
- **Body (raw JSON):**

```
"userId": "your_user_id",
"task": "Your new task"
```

You can use your username to fill userId

## Get All Todos 📚

- **Method:** `GET`
- **URL:** `https://express-todolist-api.cyclic.app/todos`

## Get Todo by ID 🧐

- **Method:** `GET`
- **URL:** `https://express-todolist-api.cyclic.app/todos/:id`
- Replace `:id` with the ID of the desired todo.

## Update Todo ✏️

- **Method:** `PUT`
- **URL:** `https://express-todolist-api.cyclic.app/todos/:id`
- Replace `:id` with the ID of the todo to be updated.
- **Body (raw JSON):**

```"task": "Updated task"```

## Delete Todo ❌

- **Method:** `DELETE`
- **URL:** `https://express-todolist-api.cyclic.app/todos/:id`
- Replace `:id` with the ID of the todo to be deleted.

## Delete All Todos 🧨

- **Method:** `DELETE`
- **URL:** `https://express-todolist-api.cyclic.app/todos`

**Note:** Replace placeholders like `your_user_id`, `your_username`, `your_password`, `your_email@example.com`, and `:id` with actual values.

Feel the power of organized living! If you have any questions or need assistance, don't hesitate to reach out. Happy todo-ing! 🚀

<!--
Authored by: Helvizar
-->


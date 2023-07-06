# Todo List API Documentation

## Base URL

The base URL for all API endpoints is: https://localhost:8000

## Endpoints

### List Task

Retrieve a list of tasks.

### `GET /`

#### Parameters
- `completed` (optional): Filter tasks by completed. Possible values are true or false.

### Create Task

Create a new task.

### `POST /`

#### Parameters
- `note` (required): The note of the task.

### Update Task

Update an existing task.

### `PUT /{id}`

#### Parameters
- `id` (required): The ID of the task.
- `note` (required): The updated note of the task.
- `completed` (optional): The updated status of the task. Possible values are true or false.

### List Task

Delete a task.

### `DELETE /{id}`

#### Parameters
- `id` (required): The ID of the task to be deleted.

Happy coding!
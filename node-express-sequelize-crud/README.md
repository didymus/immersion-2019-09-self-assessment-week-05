## Node Express Sequelize CRUD

> You are tasked to build an API that accepts CRUD (Create, Read, Update, Delete) operations on users stored in a SQLite database.

### Getting Started

1. First, start your server. You should use the debugger to do this.
2. Once your server is started, some "seed" data will be added to your database.
3. Next, go ahead and [shell into SQLite](#sqlite) so you can view your database.
4. Using Express and Sequelize, implement the following features:

- [ ] On a `GET /api/users` you server should:
  - [ ] Get all the users from the database __using the `User` model__
  - [ ] Respond with a `200` status code and an array of the users in the body
  - [ ] If the query to the database fails, you should log the error and send back a `500` status code
  - Example response:
    ```http
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 121
    ETag: W/"79-maVJASfRPDPBSajgrvd7YS9ATI8"
    Date: Tue, 28 May 2019 19:06:18 GMT
    Connection: keep-alive

    [{"id":1,"username":"zlester","createdAt":"2019-05-28 19:06:17.879 +00:00","updatedAt":"2019-05-28 19:06:17.879 +00:00"}]
    ```
- [ ] On a `POST /api/users` you server should:
  - [ ] Accept a JSON body that includes a `"username"` property:
    ```json
    {
      "username": "Alice"
    }
    ```
  - [ ] Create a new user in the database __using the `User` model__
  - [ ] Respond with a `201` status code and an object representing the user in the body
  - [ ] If the query to the database fails, you should log the error and send back a `500` status code
  - Example response:
    ```http
    HTTP/1.1 201 Created
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 105
    ETag: W/"69-kOWNO0tl/uDi7W7g4TFZsenB3ms"
    Date: Tue, 28 May 2019 19:08:08 GMT
    Connection: keep-alive

    {"id":2,"username":"alice","updatedAt":"2019-05-28T19:08:08.420Z","createdAt":"2019-05-28T19:08:08.420Z"}
    ```
- [ ] On a `GET /api/users/:id` you server should:
  - [ ] Get the user in the database with the `id` __using the `User` model__
  - [ ] Respond with a `200` status code and an object representing the user in the body
  - [ ] If a user with the `id` does not exist, you should send back a `404` status code
  - [ ] If the query to the database fails, you should log the error and send back a `500` status code
  - Example response:
    ```http
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 117
    ETag: W/"75-uyn07JW40vFZ5zCY0oHd5Sfk9+Y"
    Date: Tue, 28 May 2019 19:09:02 GMT
    Connection: keep-alive

    {"id":2,"username":"alice","createdAt":"2019-05-28 19:08:08.420 +00:00","updatedAt":"2019-05-28 19:08:08.420 +00:00"}
    ```
- [ ] On a `PUT /api/users/:id` you server should:
  - [ ] Accept a JSON body that includes a `"username"` property:
    ```json
    {
      "username": "Bob"
    }
    ```
  - [ ] Update the user in the database with the `id` __using the `User` model__
  - [ ] Respond with a `200` status code
  - [ ] If a user with the `id` does not exist, you should send back a `404` status code
  - [ ] If the query to the database fails, you should log the error and send back a `500` status code
  - Example response:
    ```http
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: text/plain; charset=utf-8
    Content-Length: 2
    ETag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
    Date: Tue, 28 May 2019 19:10:12 GMT
    Connection: keep-alive

    OK
    ```

- [ ] On a `DELETE /api/users/:id` you server should:
  - [ ] Delete the user in the database with the `id` __using the `User` model__
  - [ ] Respond with a `200` status code
  - [ ] If a user with the `id` does not exist, you should send back a `404` status code
  - [ ] If the query to the database fails, you should log the error and send back a `500` status code
  - Example response:
    ```http
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: text/plain; charset=utf-8
    Content-Length: 2
    ETag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
    Date: Tue, 28 May 2019 19:10:38 GMT
    Connection: keep-alive

    OK
    ```

## SQLite

To connect and query your database run:
```bash
$ sqlite3 db.test.sqlite
```
From there you can write regular SQL queries:
```sql
SQLite version 3.24.0 2018-06-04 14:10:15
Enter ".help" for usage hints.
sqlite> SELECT * FROM users;
1|zlester|2019-05-28 18:20:53.453 +00:00|2019-05-28 18:20:53.453 +00:00
sqlite>
```

## Available resources for this prompt:

* MDN
* Express Docs
* Sequelize Docs

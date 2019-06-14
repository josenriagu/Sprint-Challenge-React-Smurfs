1.  Explain the differences between `client-side routing` and `server-side routing`.

    As the name denotes, `client-side routing` takes place on the `browser` or the client's interface while `server-side routing` takes place on the `server`.
    In `server-side routing,` the server returns a fresh HTML page to the browser which causes the browser to refresh in order to render the new content. Whereas, in `client-side routing,` all the required content are downloaded on the browser during the first mount and only shown to the users according to the routes or history.

1.  What does HTTP stand for?

    HTTP stands for `HyperText Transfer Protocol`. A network protocol is a set of rules that govern communication between two or more network devices or elements. In the like manner, HTTP is an internet protocol that govern the transfer of files between two or more connectec devices.

1.  What does CRUD stand for?

    CRUD stands for the four major database operations of

    - `POST(Create)`,
    - `GET(Read)`,
    - `PUT(Update)` and
    - `DELETE(Delete)`

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    - `POST - Create`
    - `GET - Read`
    - `PUT - Update`
    - `DELETE - Delete`

1.  Mention three tools we can use to make AJAX requests

    AJAX requests can be made in either of these three ways and chained with `.then()`, `.catch()` and `.finally()` Promise methods:

    1. `Native JS fetch` as in `fetch`('https://dog.ceo/api/dogs')
    1. `JQUERY Ajax` as in `$.ajax`('https://dog.ceo/api/dogs')
    1. `Axios` as in `axios.get`('https://dog.ceo/api/dogs') which may also use `async and await` if not Promise-based.

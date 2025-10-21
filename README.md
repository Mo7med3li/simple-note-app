Notes App API

A simple RESTful API for user management and note management using Express.js and MySQL. Users can sign up, sign in, and manage their notes.

Technologies

Node.js

Express.js

MySQL


Installation

Clone the repository:

git clone <your-repo-link>
cd <your-project-folder>


Install dependencies:

npm install




Database Setup

Create a MySQL database:


API Endpoints
User Endpoints
Method	Endpoint	Description
POST	/signup	Create new user
POST	/signin	Sign in user
PUT	/update-user/:id	Update user info
DELETE	/delete-user/:id	Delete user
Note Endpoints
Method	Endpoint	Description
POST	/add-note	Add a new note
GET	/notes	Get all notes
GET	/notes-by-user/:id	Get all notes of a user
GET	/users-with-notes	Get all users with notes
PUT	/note/:id	Update note by ID
DELETE	/delete-note/:id	Delete note by ID
Usage

Start the server:

npm run dev


The server will run on: http://localhost:3000/

You can test endpoints using Postman, Insomnia, or any API client.


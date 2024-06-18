# social-network-api

[![License: MIT](https://shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The social-network-api is a functioning social media back-end which provides a REST API that utilises the Mongoose ODM to interact with a MongoDB database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

In order to run the application the user must have [node.js](https://nodejs.org/en/download/current) installed. Then the user must install dependencies (Express.js, mongoose and dayjs) by running `npm i` on the command line in the root directory of the repository.

Users must also have [MongoDB](https://www.mongodb.com/try/download/community) installed.

## Usage

To start the application server listening the user must run `npm start`.

The user can then start interacting with the database using their favored API tool (Insomnia, Postman, etc...).

The endpints available are:
- `/api/users`
	- GET all users
	- POST new user
- `/api/users/:userId`
	- GET user by id
	- PUT update user
	- DELETE user
- `/api/users/:userId/friends/:friendId`
	- PUT add friend
	- DELETE friend

- `/api/thoughts`
	- GET all thoughts
	- POST new thought
- `/api/thoughts/:thoughtId`
	- GET thought by id
	- PUT update thought
	- DELETE thought
- `/api/thoughts/:thoughtId/reactions`
	- POST new reaction
- `/api/thoughts/:thoughtId/reactions/:reactionId`
	- DELETE reaction

Find the video walkthrough here:
[Video Walkthrough](https://drive.google.com/XXXX)

## Credits

[simonjbr](https://github.com/simonjbr)

[Node.js](https://nodejs.org/en)

[MongoDB](https://www.mongodb.com)

[mongoose](https://mongoosejs.com/)

[Day.js](https://day.js.org/)

## License

Please refer to [MIT license](./LICENSE) information in the repository.
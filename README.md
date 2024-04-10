# Ai Chat Bot Documentation

## Prerequisites

This project requires a small Express server to be running in conjunction with the client. You can [find it here](https://github.com/maidbarion/ai-chat-bot-server). Follow the instructions in the README file to get it running locally - this is required for API calls to OpenAi.

## Config

Ensure that you create both a .env file and also .env.test file in your root directory. In both files, place the following...

REACT_APP_API_BASE_URL="http://localhost:5000/api".

## Installation

This project has only been tested using Node v18.17.0.

### `yarn install`

Install all dependencies.

## Development

### `yarn start`

Start the client server (ensure the Express server is also running).

### `yarn build`

Build the client server without running.

### `yarn eject`

Eject the server.

### `yarn test`

Run the unit test suite.
## Requirements

- [node & npm](https://nodejs.org/en/)
- [git](https://git-scm.com/downloads/)
## Quick Start

Clone the repo.

```bash
git clone https://github.com/farhan19999/Programming-For-Kids.git
cd Programming-For-Kids
cd backend
```
Install the dependencies.

```bash
npm install
```
Create a .env file in the backend folder. Add environment-specific variables on new lines in the form of NAME=VALUE.
We used Firebase storage for storing images and files. So, you need to create a firebase project and add the firebase configuration in the .env file.
For example:

```bash
PORT= <YOUR_BACKEND_PORT_HERE>
DB_HOST=  <DATABSE_HOST>
DB_USERNAME= <DATABASE_USER_NAME>
DB_PASSWORD= <DATABSE_PASSWORD> 
DB_DATABASE=  <DATABASE_NAME>

FIREBASE_API_KEY= <FIREBASE_API_KEY>
FIREBASE_AUTH_DOMAIN=  <FIREBASE_AUTH_DOMAIN>
FIREBASE_PROJECT_ID= <FIREBASE_PROJECT_ID>
FIREBASE_STORAGE_BUCKET= <FIREBASE_STORAGE_BUCKET> 
FIREBASE_SENDER_ID= <FIREBASE_SENDER_ID>
FIREBASE_APP_ID= <FIREBASE_APP_ID>
FIREBASE_MEASUREMENT_ID= <FIREBASE_MEASUREMENT_ID>
```

To start the express server, run the following.

```bash
npm run start
```

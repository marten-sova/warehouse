# Warehouse Manager App

## Instructions for building the app locally

### STEP 1: Clone repo

`git clone https://github.com/marten-sova/warehouse.git`

<br />

### STEP 2: Install dependencies

Go to the root of your repository's folder, and install all dependencies:

`cd ~/warehouse`
`npm install`

<br />

### STEP 3: Set up MongoDB

#### 3.1: Install Command line tools if you haven't already

open terminal
`sudo rm -rf /Library/Developer/CommandLineTools`
`sudo xcode-select --install`

#### 3.2: Install homebrew

[https://brew.sh](https://brew.sh)

#### 3.3: Install MongoDB (community)

open terminal
`brew tap mongodb/brew`
`brew install mongodb-community`

#### 3.4: Start MongoDB service

`brew services start mongodb-community` to start service
`brew services stop mongodb-community` to stop service

#### 3.5: Open MongoDB shell

`mongosh`
Note the address and port displayed after "Connecting to: mongodb://..."
By default, `mongodb://localhost:27017/`

If it isn't the default location, configure your database within `server/constants/index.js`, by configuring the `MONGO_URI` variable to the location observed in the previous step.

<br />

### STEP 4: Run the client and server using either of the following options:

From the `root` of your project run:

`npm start`

#### OR

Open terminal #1 (backend)

`cd ./server`
`npm start`

Open terminal #2 (frontend)

`cd ./client`<br />
`npm start`

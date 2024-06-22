# Warehouse

### STEP 1: Clone repo

> git clone https://github.com/marten-sova/warehouse.git

<br />

### STEP 2: Install dependencies

Go to the root of your repository's folder, and install all dependecies:

> cd ~/warehouse<br />
> npm install

<br />

### STEP 3: Set up MongoDB

#### 3.1: Install Command line tools

    open terminal
    `sudo rm -rf /Library/Developer/CommandLineTools`
    `sudo xcode-select --install`

#### 3.2: Install homebrew

([https://brew.sh](https://brew.sh))

#### 3.3: Install MongoDB (community)

    open terminal
    `brew tap mongodb/brew`
    `brew install mongodb-community`

#### 3.4: Start MongoDB service

     `brew services start mongodb-community` starts service
      `brew services stop mongodb-community` stops service

#### 3.5: Open MongoDB shell

    `mongosh`
    Note the address and port displayed after "Connecting to: mongodb://..."
    By default, `mongodb://localhost:27017/`

If it isn't the default location, configure your database within `server/constants/index.js`, by configuring the `MONGO_URI` variable to the location observed in the previous step.

<br />

### To run the client and/or the server, you can do any of the following:

From the `root` of your project run:

> npm start

#### OR

Open terminal #1 (backend)

> cd ./server<br />
> npm start

Open terminal #2 (frontend)

> cd ./client<br />
> npm start

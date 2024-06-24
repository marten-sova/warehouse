# Warehouse Manager App

![demo](./demo.gif)

## Instructions for building the app locally

### STEP 1: Clone repo

`git clone https://github.com/marten-sova/warehouse.git`

### STEP 2: Install dependencies

Go to the root of your repository's folder, and install all dependencies:

`cd ~/warehouse`

`npm install`

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

### STEP 4: Run the client and server using either of the following options:

From the `root` of your project run:

`npm start`

#### OR

Open terminal #1 (backend)

`cd ./server`

`npm start`

Open terminal #2 (frontend)

`cd ./client`

`npm start`

#### Testing:

From the `root` of your project run:

`npm test`

## Future considerations

#### Testing and safety

- [ ] Switch to TypeScript
- [ ] Add more unit tests to warehouse API (may want to consider a different testing framework as well)
- [ ] Add front end tests to warehouse form
- [ ] Add e2e test for warehouse creation

#### Will need to do eventually

- [ ] Add API methods for getting one warehouse, updating a warehouse, and deleting a warehouse

#### NoSQL database limitations and inefficiencies

- [ ] Must shelf names be unique per warehouse, or across all warehouses? Currently they are only checked for duplicates within the single warehouse when creating it.
- Lookup by shelf may be expensive if the ability to query all warehouses at once is required. Shelf names are nested heirarchically within warehouses and zones in the database so would require scanning many entries. May be mitigatable by indexing the shelf names.
- [ ] I chose noSQL because this is a simple assignment and it is easier to use. However, SQL may be more optimal due to the set schema and requirements of unique values etc.
- [ ] Current database implementation requires more space than necessary for incomplete warehouse entries. A warehouse with one shelf in Zone 1 still creates all 12 zones with empty arrays of shelves. Easier to unpack the data this way but not optimal.

#### Rest vs GraphQL

GraphQL might be beneficial to reduce network usage, depending largely on the scale of the app, whether entries will be queried from all warehouses or just one, and whether more data will be integrated into the system – e.g., items on shelves. I chose to use a REST API because I am more familiar, and the assignment was to create a warehouse creation route – which will always require sending the full object regardless.

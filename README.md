# Getting Started
For development, you will need to create a PSQL database called GeniusBot. The environment variables are at '/server/env'.
Alpha Note: Currently this database only stores session information.
```
npm install
bower install
npm start

then go to localhost:1337
```

# GeniusBot
## A modularized React / Redux frontend chatbot.

### Containers
#### Containers provide "pages" for the React Router
- Chat
- Home

### Presentationals
#### "Dumb" components with a render function
```
for instance: < ChatBox />
```
- Avatar
- ChatBox
- ChatInput
- - chatInputProvider will be moved to "ChatProvider"
- ChatItem
- - note: this has been replaced by "Message"
- Message
- - renders a material-ui list item
- NotFound
- - A 404 page

### Providers
#### Providers are methods that "provide" state to stateless Presentationals.
- App
- - Provides the App :-)
- AuthProvider
- - This will provide auth flows (not currently implemented)
- ChatProvider
- - provides all the chat functionality to the application.
- - Actions
- - chatModules
- - reducer


# Chat Modules
## Bot
Provides Bot Functionality. How does GeniusBot respond to you? The functionality is found here. (You'll find a chatModules folder here. This has been flattened out and isn't used.)
## Travel (working! type "travel", "travelling", "airport", or some other keywords)
A module for GeniusBot that provides travel direction functionality.
Type "travel" to start the module. GeniusBot can understand natural language strings. So "LAX," "Los Angeles International Airport", "LA", or "Los Angeles" will all work.
## CodeGenius (not currently implemented)
Allows GeniusBot to send you to the CodeGenius.co site.
## The Resume ChatModule (not currently implemented)
Provides John's resume :-)


# GeniusBot Service
## Location
### API Endpoints that provide airport locations and distance calculations.

#### get: api/v1/location/airports (receives a text query)
#### post: api/v1/location/distance (receives two arrays of lat/lon coordinates, and returns the haversine distance in meters)
```
for example:
{
    "coord1": [ 32.8998091, -97.0403352 ],
    "coord2": [ 29.9902199, -95.3367827 ]
}
response:
{
  "distance": 361631.3137159806
}
```

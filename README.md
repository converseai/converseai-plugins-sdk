# Converse Plugins SDK

This Converse Plugins client library makes it easy to create your own modules for Converse.AI.

## Setup Instructions

### Converse Plugins SDK
 1. Import the appropriate class(es):

```javascript
let ConversePluginsSDK    = require('converseai-plugins-sdk');
```

 2. Create an http instance:

```javascript
const app = new ConversePluginsSDK.http({request: request, response: response});
```

## Example Using [Express](https://expressjs.com/)

### Javascript
Below is a simple delay module that will delay the conversation. 

`delayTime` is created via the module definition on the ConverseAI platform. If it's undefined then it will delay for 1 second.

```javascript
const express = require('express')();
const Status  = require('converseai-plugins-sdk').Status;

express.use(bodyParser.json());

var delayModule = function(app, body) {
  setTimeout(function() {
    app.send(Status.SUCCESS);
  }, body.payload.moduleParam.delayTime || 1000);
}

express.post('/', function (request, response) {
  var app = new ConversePluginsSDK.http({ request, response });
  
  app.setModules({
    delayModule: delayModule
  });

  app.handleRequest();
});
```

### JSON Definition
```JSON
{
  "name": "testPlugin",
  "description": "This plugin demonstrates a simple delay module and an http module in node.js",
  "displayName": "Test Google Functions Plugin",
  "category": "Other",
  "invoker": {
    "webhook": {
      "headers" : {
        "Content-Type": "application/json"
      },
      "webhookURL" : "https://us-central1-cloud-functions-converse.cloudfunctions.net/testPlugin"
    }
  },
  "module": [
    {
      "id": "chuckModule",
      "name": "Chuck Norris Jokes",
      "description": "Returns a random Chuck Norris joke from 'http://api.icndb.com/jokes/random'"
    },
    {
      "id" : "delayModule",
      "name": "Delay Module Test",
      "description" : "Delays the conversation by X amount.",
      "param": [
        {
          "param": "delayTime",
          "displayName": "Delay Time",
          "description": "The time in milliseconds",
          "type": "STRING"
        }
      ]
    }
  ]
}

```

## License
See LICENSE.md.

## Terms
Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Converse.AI Terms of Service]().

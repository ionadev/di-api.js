# API Wrapper

* This Is An API Wrapper For [Discord Images](https://discordimages.com/).

# Example

```javascript
const { Uploader } = require('di-api.js');

let di = new Uploader("Your Token Here!");

let upload = di.upload(file_stream_here);

console.log(upload); //logs the json
```

# Contributing

* Just Create A PR
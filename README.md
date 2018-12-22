# Discord Images - API Wrapper

This API wrapper adds better ability of using and uploading images using a bot or an API. To use this you must have `npm` and `node` installed.

## Example

```javascript
const { Uploader } = require('di-api.js');

let DI = new Uploader("Your Token Here!"); // Only Discord Images token.

let upload = DI.upload(file_stream_here);

console.log(upload); //logs the json
```

## Install

To install all the dependencies of the API wrapper run `npm i di-api.js`

## Contributing

We'd love you to contribute to the API wrapper. Send your pull requests and other issues you have with the application to this repo. 

## Questions / Concerns

If you have any questions or concerns - please make a Issue report on the the GitHub.

const fetch = require('node-fetch');
const FormData = require('form-data');
const isStream = require('./extensions/stream');

module.exports = class Uploader{
    /**
     *
     * @param {string} token - API Token. Get yours from https://discordimages.com/
     */
    constructor(token){
        if(!token) throw new Error("No Token Specified");
        if (typeof token !== 'string' || !token instanceof String) throw new TypeError("Whoops! That wasn't a string.")
        this.token = token;
        this.form = new FormData();
    };

    upload(file){
        if(!file) throw new Error("No file stream was provided in the upload.");
        if(!isStream.readable(file)) throw new TypeError("The given file is not a readable stream.");
        this.form.append('files[]',file);
        return fetch('https://discordimages.com/api/upload',{
            method: 'POST',
            body: this.form,
            headers: {
                "token": this.token
            }
        }).then(res => res.json());
    }

    async  getMyStats(){
        let json = await fetch('https://discordimages.com/api/storage/information',{
            headers: {
                "token": this.token
            }
        }).then(res => res.json());

        return json;
    }
}

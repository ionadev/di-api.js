const fetch = require('node-fetch');
const FormData = require('form-data');
const isStream = require('is-stream');

module.exports = class Uploader{
    constructor(token){
        if(!token) return new Error("No Token Specified");
        this.token = token;
        this.form = new FormData();
    };

    async upload(file){
        if(!isStream.readable(file)) return new TypeError("Given File Is Not A Valid Readable Stream.");
        this.form.append('files[]',file);
        let json = await fetch('https://discordimages.com/api/upload',{
            method: 'POST',
            body: this.form,
            headers: {
                "token": this.token
            }
        }).then(res => res.json());

        return json;
    }
}
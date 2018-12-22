const fetch = require('node-fetch');
const FormData = require('form-data');
const isStream = require('is-stream');

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

    async upload(file){
        if(!file) throw new Error("No file stream was provided in the upload.");
        if(!isStream.readable(file)) throw new TypeError("The given file is not a readable stream.");
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

    async  getUserStats(){
        let json = await fetch('https://discordimages.com/api/storage/information',{
            //this is a get request and would only require the token!
            headers: {
                "token": this.token
            }
        }).then(res => res.json());

        return json;
    }
}

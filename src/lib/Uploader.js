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
        if (typeof token !== 'string' || !token instanceof String) throw new TypeError("The Given param Isnt A String!")
        this.token = token;
        this.form = new FormData();
    };

    async upload(file){
        //if(!isStream.readable(file)) throw new TypeError("Given File Is Not A Valid Readable Stream.");
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
            method: 'POST',
            headers: {
                "token": this.token
            }
        }).then(res => res.json());

        return json;
    }
}
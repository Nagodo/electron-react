const fs = require('fs');
const path = require('path');
const SqlJs = require('sql.js');

class Database {
    constructor() {
        this.InitDatabase();
    }

    public db: any;

    InitDatabase() {
        var filebuffer = fs.readFileSync(path.join(__dirname, 'data.sqlite'));

        this.db = new SqlJs.Database(filebuffer);
    }

    
}

var database;

window.addEventListener('DOMContentLoaded', () => {
    database = new Database();
});



export {}
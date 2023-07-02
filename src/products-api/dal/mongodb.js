const { createConnection } = require("mongoose");
const { Db } = require("./db");

const mongoUrl = process.env.MONGO_DB_URL || "mongodb://localhost:27017/products";

class Mongo extends Db {
    connection;
    constructor() {
        super("MongoDb:Products", mongoUrl);
        this.connect = this.connect.bind(this);
        this.isConnected = this.isConnected.bind(this);
    }
    async connect() {
        if(!this.isConnected()) {
            this.connection = await createConnection(mongoUrl);
            this.connection.once("open", () => {
                this.emit("open", this.createDbEvent());
                this.connection.on("reconnectFailed", () => {
                  this.emit("reconnectFailed", this.createDbEvent());
                });
              });
        }
        return this.connection;
    }

    isConnected() {
        return !!(this.connection && this.connection.readyState === 1);
    }
}



exports.mongo = new Mongo();

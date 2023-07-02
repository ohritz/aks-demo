const { EventEmitter } =require ("node:events");
const mongoose =require ("mongoose");

mongoose.Promise = global.Promise;

const maskConnectionString = (connectionString) => {
  const matched = connectionString.match(/mongodb:\/\/(.*):\d*\//i);
  return !matched
    ? connectionString
    : connectionString
        .replace(matched[1], new Array(5).join("*"))
        .replace(matched[2], new Array(5).join("*"));
};

class Db  extends EventEmitter
{
  instanceName;
  connectionString;
  constructor(instanceName, connectionString) {
    super();
    this.instanceName = instanceName;
    this.connectionString = maskConnectionString(connectionString);
    this.createDbEvent = this.createDbEvent.bind(this);
  }

  createDbEvent() {
    return {
      instanceName: this.instanceName,
      connectionString: this.connectionString,
    };
  }
}

exports.Db = Db;

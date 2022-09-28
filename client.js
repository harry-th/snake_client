const net = require("net");
let {port, host} = require('./constants.js');
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: host,
    port: port,
  });
  conn.on('data',(data) => {
    console.log(data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect',()=>{
    console.log('connection established');
    conn.write("Name: snakesnake");
  });
  return conn;
};

module.exports = {connect};

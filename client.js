const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  conn.on('data',(data) => {
    console.log(data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect',()=>{
    console.log('connection established');
    conn.write("Name: 456");
  });
  return conn;
};

module.exports = {connect};

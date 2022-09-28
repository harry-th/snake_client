let {connect, setupInput } = require('./client');
let conn = connect();
let stdin = setupInput();

conn.on('data',(data) => {
  console.log(data);
});

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};
stdin.on("data", handleUserInput);
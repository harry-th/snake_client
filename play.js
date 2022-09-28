let conn = require('./client');
conn.on('data',(data) => {
  console.log(data);
});
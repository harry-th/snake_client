
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'q') {
      conn.write('Say: snakesnakesnakesnakesnakesnake');
    }
    if (key === 'w') {
      conn.write("Move: up");
    } else  if (key === 's') {
      conn.write("Move: down");
    } else  if (key === 'a') {
      conn.write("Move: left");
    } else  if (key === 'd') {
      conn.write("Move: right");
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};




module.exports = {setupInput};
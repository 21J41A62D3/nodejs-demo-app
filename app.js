const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Node.js App is running successfully 🚀");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

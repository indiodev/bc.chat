import { createServer } from "http";

const PORT = process.env.PORT || 3333;

const server = createServer((request, response) => {});

server.listen(PORT, function () {
  console.log(`http server listening on http://localhost:${PORT}`);
});

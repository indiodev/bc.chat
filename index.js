import { createServer } from "http";
import { Handler } from "./handler.js";

const PORT = process.env.PORT || 3333;

const server = createServer(Handler);

server.listen(PORT, function () {
  console.log(`http server listening on http://localhost:${PORT}`);
});

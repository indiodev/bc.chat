import { readFile } from "node:fs/promises";
import { STATIC_ROOT_FILE } from "./constant.js";
/**
 * @async
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 * @returns {Promise<void>}
 * @throws {Error}
 */
export async function Handler(request, response) {
  if (!(request.url === "/")) {
    response.writeHead(302, { Location: "/" });
    response.end();
    return;
  }

  try {
    const content = await readFile(STATIC_ROOT_FILE, "utf8");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(content);
  } catch (error) {
    throw new Error(error);
  }
}

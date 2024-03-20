import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

//quando lancio in comando curl --verbose da bash, dopo aver avviato il server, ottengo:

// $ curl --verbose localhost:3000
// *   Trying [::1]:3000...
// * Connected to localhost (::1) port 3000
// > GET / HTTP/1.1
// > Host: localhost:3000
// > User-Agent: curl/8.4.0
// > Accept: */*
// >
// < HTTP/1.1 200 OK
// < Content-Type: application/json
// < Date: Wed, 20 Mar 2024 10:47:07 GMT
// < Connection: keep-alive
// < Keep-Alive: timeout=5
// < Content-Length: 19
// <
// {"location":"Mars"}* Connection #0 to host localhost left intact
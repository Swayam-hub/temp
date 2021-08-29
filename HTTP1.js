const http = require("http");

const server=http.createServer((req, res) => {
    if (req.url === "/") {
      res.end("Welcome to home");
    }
    if (req.url === "/about") {
      res.end("Welcome to about");
    }
      // res.end(`
      //   <h1>!OOPS</h1>
      //   <p>We can't find page you looking for</p>
      //   <a href="/">Back Home</a>
      // `)
})
server.listen(5000);

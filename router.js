const router = (req, res) => {


  if (req.url === '/') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello');
  } else if (req.url === '/blog' && req.method === 'GET') {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      const arr = ["one", "two", "three"];
      const jsonArr = JSON.stringify(arr);
      res.end(jsonArr);
  } else if (req.url === '/blog' && req.method === 'POST' ) {
    if (req.headers.password === 'potato') {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      const arr = ["a", "b"];
      const jsonArr = JSON.stringify(arr);
      res.end(jsonArr);
    } else {
      res.writeHead(403, {'Content-Type' : 'text/html'});
      res.end('Forbidden');
    }
  } else {
    res.writeHead(404, {'Content-Type' : 'text/html'});
    res.end('unknown uri');
  }
}

module.exports = router;

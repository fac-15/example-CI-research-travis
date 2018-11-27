const router = (req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'content-type': "text/html" });
    res.end('Hello');
  }
  // blog POST - without password of potato
  else if (req.url == '/blog' && req.method === 'POST' && req.headers.password !== 'potato') {
    res.writeHead(403, {"Content-Type" : "text/html"})
    res.end('Forbidden')
  }
  else {
    res.writeHead(404, {"Content-Type" : "text/html"})
    res.end('unknown uri')
  }
}

module.exports = router;
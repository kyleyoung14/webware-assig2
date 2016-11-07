var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/fencing.html')
      break
    case '/fencing.html':
      sendFile(res, 'public/fencing.html')
      break
    case '/index.html':
      sendFile(res, 'public/index.html')
      break
    case '/css/style.css':
      sendFile(res, 'public/css/style.css', 'text/css')
      break
    case '/css/bootstrap.min.css':
      sendFile(res, 'public/css/bootstrap.min.css', 'text/css')
      break
    case '/css/bootstrap.min.css.map':
      sendFile(res, 'public/css/bootstrap.min.css.map', 'text/css')
      break
    case '/js/scripts.js':
      sendFile(res, 'public/js/scripts.js', 'text/javascript')
      break
    case '/img/lee_kiefer.jpg':
      sendFile(res, 'public/img/lee_kiefer.jpg', 'image/jpeg')
      break
    case '/img/Emese_Szasz.jpg':
      sendFile(res, 'public/img/Emese_Szasz.jpg', 'image/jpeg')
      break
    case '/img/junghwan_kim.jpg':
      sendFile(res, 'public/img/junghwan_kim.jpg', 'image/jpeg')
      break
    case '/img/race_imboden.jpg':
      sendFile(res, 'public/img/race_imboden.jpg', 'image/jpeg')
      break
    case '/img/sangyoung_park.jpg':
      sendFile(res, 'public/img/sangyoung_park.jpg', 'image/jpeg')
      break
    case '/img/Sofya_Velikaya.jpg':
      sendFile(res, 'public/img/Sofya_Velikaya.jpg', 'image/jpeg')
      break
    default:
      res.end('404 not found')
  }
  // if(uri.pathname == '/'){
  //   sendFile(res, 'public/fencing.html')
  // }
  // else{
  //   sendFile(res, '.' + uri.pathname)
  // }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}
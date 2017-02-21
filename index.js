const http2 = require('spdy')
const logger = require('morgan')
const express = require('express')
const app = express()
const fs = require('fs')

app.use(logger('dev'))
app.get('/', function (req, res) {
    res.send(`hello, http2! 
    go to /pushy`)
})

app.get('/pushy', (req, res) => {
    var jquery = res.push('/jquery.js', {
        status: 200, // optional
        method: 'GET', // optional
        request: {
            accept: '*/*'
        },
        response: {
            'content-type': 'application/javascript'
        }
    })
    jquery.on('error', function () {
    })
    jquery.end('alert("hello from push stream!");')

    var angular = res.push('/angular.js', {
        request: {
            accept: '*/*'
        },
        response: {
            'content-type': 'application/javascript'
        }
    })
    angular.on('error', function () {
    })
    angular.end('content of file')

    res.end('<script src="/jquery.js"></script><script src="/angular.js"></script>')
})


var options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
}

http2
    .createServer(options, app)
    .listen(8080, () => {
            console.log(`Server is listening on https://localhost:8080.
You can open the URL in the browser.`)
        }
    )
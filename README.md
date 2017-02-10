# node-http2-server-push
$ cd new_server
$ openssl genrsa -des3 -passout pass:x -out server.pass.key 2048

$ openssl rsa -passin pass:x -in server.pass.key -out server.key

$ rm server.pass.key
$ openssl req -new -key server.key -out server.csr

$ openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt


npm init -y
npm i express morgan spdy --save
npm i node-dev --save-dev

Feel free to add these two npm scripts into scripts of package.json to simplify launch commands (which use node-dev for auto-reloading):
    "start": "./node_modules/.bin/node-dev .",
    "start-advanced": "./node_modules/.bin/node-dev index-advanced.js"

npm stat
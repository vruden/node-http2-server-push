# node-http2-server-push

Настроим server push на своём сайте, чтобы добиться увеличения скорости рендеринга страниц. Server push в HTTP/2 - это технология, позволяющая серверу «протолкнуть» дополнительные данные клиенту, в момент запроса основного документа. То есть в обычной ситуации запрашивает браузер html-страничку, затем обрабатывает её и приходит к выводу, что ему для корректного отображения необходимо подгрузить дополнительные файлы: стили, скрипты, изображения. После чего скачивает их и отображает конечный результат. Server push позволяет отправить дополнительные файлы уже в момент получения основного документа, и они уже будут иметься в кэше, когда они потребуются браузеру. За счёт этого возрастает скорость загрузки сайта.

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

npm start

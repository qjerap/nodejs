const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome!</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome</h1>')
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="username" placeholder="Add user..."/>')
        res.write('<button type="Submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === "/create-user" && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        res.end();
    }

    if(url === '/users') {
        res.write('<html>');
        res.write('<head><title>Welcome!</title></head>');
        res.write('<body>');
        res.write('<h1>Users</h1>');
        res.write('<ul><li>User 1</li></ul>')
        res.write('<ul><li>User 2</li></ul>')
        res.write('<ul><li>User 3</li></ul>')
        res.write('</body>');
        res.write('</html>');
        return res.end();        
    }


}

module.exports = requestHandler;
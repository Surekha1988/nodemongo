const http = require('http')

const todos = [
    {
        id:1,name:"todo one"
    },
    {
        id:2,name:"todo two"
    },
    {
        id:3,name:"todo three"
    }
]

const server = http.createServer((req,res) => {
    // res.statusCode = 404;
    // res.setHeader('Content-Type', 'text/html')
    // console.log(req.method)
    // const {headers,url,method} = req;
    // console.log(headers,url,method)
    // res.write('<h1>hello</h1>')
    // res.write('<h2>hello</h2>')
   
    let body = []
    
    req.on('data', chunk => {
        body.push(chunk);
    })
    .on('end', ()=> {

        const { method, url } = req;
        body = Buffer.concat(body).toString();

        let status = 404;
        const response = {
            success:false,
            data: null,
            error: null
        }

       

        if(method === 'GET' && url === '/todos'){
            status = 200;
            response.success = true;
            response.data = todos
        }
        else if(method === 'POST' && url === '/todos'){
           
            const {id, name} = JSON.parse(body)

            if(!id || !name) {
                status = 400;
                response.error = "please add id and name";
            }else {
            
            status = 201;
            todos.push({id,name})
            response.success = true;
            response.data = todos
            }
           
        }

        res.writeHead(status, {
            'Content-Type': 'application/json',
            'X-Powered-By': 'Node.js'
        })

        res.end(JSON.stringify(response));
    })
    
})

const PORT = 5000;

// server.listen(PORT, () => console.log(`server running on this ${PORT}`))
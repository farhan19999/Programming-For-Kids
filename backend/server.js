const app = require('./app')

require('dotenv').config()

const port = process.env.PORT || '3004'

app.listen(port, ()=>{
    console.log(`Backend server on : http://localhost:${port}`);
    console.log(`API DOC and test : http://localhost:${port}/api-docs`);
})


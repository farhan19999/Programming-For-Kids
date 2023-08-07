const app = require('./app')
const port = process.env.PORT || '3000'

app.listen(port, ()=>{
    console.log(`Backend server on : http://localhost:${port}`);
    console.log(`API DOC and test : http://localhost:${port}/api-docs`);
})


import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import { SwaggerUiOptions, swaggerUi } from 'swagger-ui-express';
import { createRequire } from 'node:module';

const port = 8000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
app.set('view engine', 'pug');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.json')));


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

// app.get('/', (req, res)=>{
//     res.send(' <h1>Wellcome to our shop</h1>');
// })
app.get('/product', (req, res)=>{
    const title = req.query?.title || 'User';
    const price = req.query?.price || '677.879';
    res.render('user', {user_title: title, user_price: price})
})



app.listen(port, ()=> {
    console.log(`Server started on http://localhost:${port}`);
})

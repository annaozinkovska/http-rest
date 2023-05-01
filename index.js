import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import fs, { promises } from 'fs';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
app.set('view engine', 'pug');


const port = process.env.PORT || 3000;
//2
if (process.env.NODE_ENV == 'development') { 
    console.log('developmen');
} else {
    console.log('production');
}

//3
// fs.readFile(path.join(__dirname, './package.json'), (err, result) => { 
//     if (err) {
//         console.error(err);
//     }
//     app.get('/', (req, res) => {
//         res.send(`<h1>Welcome</h1><h2>JSON text:</h2><pre>${result.toString()}</pre>`);
//     })
// });




app.get('/', (req, res)=>{
    '/', async (req, res) => { 
        try {
            const result = await promises.readFile(path.join(__dirname, './package.json'));
            res.send(`<h1>Welcome</h1><h2>JSON text:</h2><pre>${result.toString()}</pre>`);
        } catch (err) {
            console.error(err);
            res.send('<h1>Error</h1>');
        }
   } })

// app.get('/', (req, res)=>{
//     res.send(' <h1>Wellcome to our shop</h1>');
// })
// app.get('/product', (req, res)=>{
//     const title = req.query?.title || 'User';
//     const price = req.query?.price || '677.879';
//     res.render('user', {user_title: title, user_price: price})
// })



app.listen(port, ()=> {
    console.log(`Server started on http://localhost:${port}`);
})

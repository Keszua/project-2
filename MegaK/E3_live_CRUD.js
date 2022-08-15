const express = require('express');
const {join} = require('path');
const {readFile, unlink, writeFile} = require('fs/promises');

const app = express();

const filePath = join(__dirname, 'public/file.txt');

app.use(express.json());

// CREATE
app.post('/file', async (req, res) => {
    try{
        console.log(req.body.trescPliku);
        await writeFile(filePath, req.body.trescPliku, {
            flag: 'wx'
        });
        res.json({
            ok: true,
        })
    } catch(err){
        res.json({
            error: true,
            message: "File already exist",
        })
    }    
});

// READ
app.get('/file', async (req, res) => {
    try {
        const content = await readFile(filePath, 'utf8');
        res.json({content});
    } catch(err) {
        res.json({
            error: true,
            message: "File does nto exist",
        })
    }
});

// UPDATE
app.put('/file', async (req, res) => {
    try{
        console.log(req.body.trescPliku);
        await writeFile(filePath, req.body.trescPliku, {
            flag: 'a',
        });
        res.json({
            ok: true,
        })
    } catch(err){
        res.json({
            error: true,
            message: "File does not exist or is corrupted",
        })
    }    
});

// DELETE
app.delete('/file', async (req, res) => {
    try{
        await unlink(filePath);
        res.json({
            ok: true,
        })
    } catch(err) {
        res.json({
            error: true,
            message: "File does nto exist",
        })
    }
})

app.listen(3000, () => console.log('Start'));
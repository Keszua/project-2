import * as express from "express";
import * as cors from 'cors';
import {giftRouter} from "./roters/gift";
import {childRouter} from "./roters/child";
//const { pool } = require("./utils/db");
//import { pool } from "./utils/db";
import "./utils/db";

const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());  // Content-type: appication/json

app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.get('/', (req, res) => {  // po dwukropku podajemy nazwę dowolnej przyjętej ścieżki
    res.json({
        correct: "jakiś tekst",  
    });
});

app.post('/elo', (req, res) => {  // po dwukropku podajemy nazwę dowolnej przyjętej ścieżki
    res.json({
        elo: "Pobrany post",  
    });
});


const port = 3001;
app.listen(port, '127.0.0.1', () => {  console.log(`Server is listening at http://localhost:${port}`); });

// console.log("1");
// (async() => {


//     await pool.end();
// })();

// console.log("--2--");
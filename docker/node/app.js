const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, REDIS_URL, REDIS_PORT, SESSION_SECRET } = require('./config/config'); // UWAGA - plik z hasłami trzeba sobie dograć
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');
const session = require("express-session");
//const { createClient } = require("redis")
const redis = require("redis");
const cors = require("cors");

let RedisStore = require("connect-redis")(session)
let redisClient = redis.createClient({
//let redisClient = createClient({
 	host: REDIS_URL,
 	port: REDIS_PORT,
 	//legacyMode: true,
});


// async function run() {
// 	await redisClient.connect();
  
// 	console.log(redisClient.isOpen); // this is true
  
// 	//await redisClient.disconnect();
// }
  
// run();

const app = express()
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
	mongoose
		.connect(mongoURL, {
			 useNewUrlParser: true,
			 useUnifiedTopology: true,
		})
		.then( () => console.log("sucesfully connected to DB"))
		.catch( (e) => { 
			console.log('No connected to DB', e) 
			setTimeout(connectWithRetry, 5000)  //jeśli się nie uda połączenie, to spróbuj ponownie po 5 sekundach.
		});
}

connectWithRetry();

app.enable("trust proxy");
app.use(cors({}));
app.use(session({
	store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
	cookie: {
		secure: false,
		resave: false,
		saveUninitialized: false,
		httpOnly: true,
		maxAge: 1 * 60 * 1000,
	},
}));

app.use(express.json());

app.get('/api/v1', (req, res) => {
	res.send("<h1>Hello</h1> wersja prod 234");
	});

//localhost:3000/api/v1/post/
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Start on port ${port}`);
})
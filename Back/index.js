const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const datacontroller = require('./controllers/datacontroller');
const multer = require('multer')
const Usercontroller = require('./controllers/Usercontroller');
const cartcontroller = require('./controllers/cartcontroller');
const detailcontroller = require('./controllers/detailcontroller');
const reviewcontroller = require('./controllers/reviewcontroller');
const marketcontroller = require('./controllers/marketcontroller');

const { mongoose } = require('./db.js');

const upload = multer({
    dest: './uploads'
})

var app = express();
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());



app.listen (3000, () => console.log('server started successfully at port : 3000'));
app.use('/datas', datacontroller);
app.use('/users', Usercontroller);
app.use('/cart', cartcontroller);
app.use('/details', detailcontroller);
app.use('/review', reviewcontroller);
app.use('/market', marketcontroller);
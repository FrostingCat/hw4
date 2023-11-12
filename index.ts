import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import tableRouter from './controllers/tableController/tableController'
import chairRouter from './controllers/chairController/chairController'
import closetRouter from './controllers/closetController/closetController'

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/table', tableRouter);
app.use('/api/chair', chairRouter);
app.use('/api/closet', closetRouter);

app.use('*', (req, res) => {
	res.status(404).json({ message: 'Нет такого запроса' })
})

app.listen(port, async () => {
	await mongoose.connect('mongodb+srv://frostingcat:03lLhNgolTxUoY6G@cluster0.i4anyeo.mongodb.net/furniture?retryWrites=true&w=majority')
	console.log('Server running on port ' + port);
});

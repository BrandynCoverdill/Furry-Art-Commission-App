import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import cors from 'cors';

// Configure dotenv file
dotenv.config();

// Create new instance of Express
const app = express();

// Enable CORS
app.use(cors());

// Get the root directory of our application
const __dirname = path.resolve();

let requestNum = 0;

// Homepage for server
app.get('/', (req, res) => {
	const date = new Date();
	res.status(200).json({
		requestId: ++requestNum,
		testData: 'This is sample data',
		requestedAt: date.toLocaleString(),
	});
});

// Listen on port 8000 for requests
app.listen(8000, '0.0.0.0', () => {
	console.log('Server is running');
});

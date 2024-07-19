import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { sequelize } from './config/database.js';
import { User } from './modules/User.js';

// Configure dotenv file
dotenv.config();

// Create new instance of Express
const app = express();

// Enable CORS
app.use(cors());

let requestNum = 0;

// Homepage for server
app.get('/', async (req, res) => {
	try {
		const users = await User.findAll();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch users' });
	}
});

const authDB = async () => {
	try {
		await sequelize.authenticate();
	} catch (err) {
		console.error('Could not connect to database: ', err);
	}
};

const syncModels = async () => {
	try {
		await sequelize.sync({ force: true });
	} catch (err) {
		console.error('Could not sync models to the database: ', err);
	}
};

const addRecordsToUser = async () => {
	const users = [
		{
			username: 'JohnDoe',
			email: 'john@example.com',
			password_hash: 'passwordHash1',
			user_type: true,
			bio: 'This is John’s bio.',
			avatar: null,
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			username: 'JaneDoe',
			email: 'jane@example.com',
			password_hash: 'passwordHash2',
			user_type: false,
			bio: 'This is Jane’s bio.',
			avatar: null,
			created_at: new Date(),
			updated_at: new Date(),
		},
		// Add more user objects as needed
		{
			username: 'AliceSmith',
			email: 'alice@example.com',
			password_hash: 'passwordHash3',
			user_type: true,
			bio: 'This is Alice’s bio.',
			avatar: null,
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			username: 'BobBrown',
			email: 'bob@example.com',
			password_hash: 'passwordHash4',
			user_type: false,
			bio: 'This is Bob’s bio.',
			avatar: null,
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			username: 'CharlieBlack',
			email: 'charlie@example.com',
			password_hash: 'passwordHash5',
			user_type: true,
			bio: 'This is Charlie’s bio.',
			avatar: null,
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			username: 'DaveWhite',
			email: 'dave@example.com',
			password_hash: 'passwordHash6',
			user_type: false,
			bio: 'This is Dave’s bio.',
			avatar: null,
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			username: 'EveGreen',
			email: 'eve@example.com',
			password_hash: 'passwordHash7',
			user_type: true,
			bio: 'This is Eve’s bio.',
			avatar: null,
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			username: 'FrankRed',
			email: 'frank@example.com',
			password_hash: 'passwordHash8',
			user_type: false,
			bio: 'This is Frank’s bio.',
			avatar: null,
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			username: 'GraceBlue',
			email: 'grace@example.com',
			password_hash: 'passwordHash9',
			user_type: true,
			bio: 'This is Grace’s bio.',
			avatar: null,
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			username: 'HankYellow',
			email: 'hank@example.com',
			password_hash: 'passwordHash10',
			user_type: false,
			bio: 'This is Hank’s bio.',
			avatar: null,
			created_at: new Date(),
			updated_at: new Date(),
		},
	];

	await User.bulkCreate(users);
};

// Run the server
const run = async () => {
	await authDB();
	await syncModels();
	await addRecordsToUser();

	const port = process.env.PORT || 8000;

	app.listen(port, '127.0.0.1', () => {
		console.log(`Server is running on port ${process.env.PORT || 8000}`);
	});
};

run();

import { sequelize } from '../config/database.js';
import { NOW } from 'sequelize';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('user', {
	user_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	username: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	email: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	password_hash: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	user_type: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	bio: {
		type: DataTypes.TEXT,
	},
	avatar: {
		type: DataTypes.BLOB,
	},
	created_at: {
		type: DataTypes.DATE,
		defaultValue: NOW,
	},
	updated_at: {
		type: DataTypes.DATE,
	},
});

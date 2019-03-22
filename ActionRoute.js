const express = require('express');
const db = require('./data/helpers/actionModel');

const routes = express.Router();

routes.use(express.json());

routes.get('', async (req, res) => {
	try {
		actions = await db.get();
		if (actions) {
			res.status(200).json(actions);
		} else {
			res.status(404).json({ message: 'There are no actions to load' });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error loading the actions' });
	}
});

routes.post('', async (req, res) => {
	try {
		action = await db.insert(req.body);
		if (action) {
			res.status(201).json(action);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error at adding new action' });
	}
});

routes.put('/:id', async (req, res) => {
	try {
		action = await db.update(req.params.id, req.body);
		if (action) {
			res.status(200).json(action);
		} else {
			res.status(404).json({ message: "The ID doesn't exist!!" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error updating the action' });
	}
});

routes.delete('/:id', async (req, res) => {
	try {
		deleted = await db.remove(req.params.id);
		if (deleted) {
			res.status(200).json({ message: 'The action was deleted' });
		} else {
			res.status(404).json({ message: "The ID doesn't exist!!" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error deleting the action' });
	}
});

module.exports = routes;

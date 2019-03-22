const express = require('express');
const db = require('./data/helpers/projectModel');

const routes = express.Router();

routes.use(express.json());

routes.get('', async (req, res) => {
	try {
		projects = await db.get();
		if (projects) {
			res.status(200).json(projects);
		} else {
			res.status(404).json({ message: 'There are no projects to load' });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error loading the projects' });
	}
});

routes.post('', async (req, res) => {
	try {
		project = await db.insert(req.body);
		if (project) {
			res.status(201).json(project);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error at adding new project' });
	}
});

routes.put('/:id', async (req, res) => {
	try {
		project = await db.update(req.params.id, req.body);
		if (project) {
			res.status(200).json(project);
		} else {
			res.status(404).json({ message: "The ID doesn't exist!!" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error updating the project' });
	}
});

routes.delete('/:id', async (req, res) => {
	try {
		deleted = await db.remove(req.params.id);
		if (deleted) {
			res.status(200).json({ message: 'The project was deleted' });
		} else {
			res.status(404).json({ message: "The ID doesn't exist!!" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error deleting the action' });
	}
});

routes.get('/:id/actions', async (req, res) => {
	try {
		actions = await db.getProjectActions(req.params.id);
		if (actions) {
			res.status(200).json(actions);
		} else {
			res.status(404).json({ message: "The ID doesn't exist!!" });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error getting the actions of the project' });
	}
});

module.exports = routes;

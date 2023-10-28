const planets = require('../models/planets.model');
const express = require('express');
const getAllPlanets = require('./planets.controller');
const planetsRouter = express.Router();

planetsRouter.get('/',(req,res)=> getAllPlanets(req,res,planets))

module.exports = planetsRouter;
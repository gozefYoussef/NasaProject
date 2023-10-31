const express = require('express');
const launchesRouter = express.Router();
const launches = require('../../models/launches.model');
const {getAllLaunches,addNewLaunch,deleteLaunch} = require('../launches/launches.controller')

launchesRouter.get('/',(req,res)=>getAllLaunches(req,res,launches))
launchesRouter.post('/',(req,res)=>addNewLaunch(req,res,launches))
launchesRouter.delete('/:id',(req,res)=>deleteLaunch(req,res,launches))

module.exports = launchesRouter;
const express = require('express');
const launchesRouter = express.Router();
const {httpGetAllLaunches,httpAddNewLaunch,httpDeleteLaunch} = require('../launches/launches.controller')

launchesRouter.get('/',(req,res)=>httpGetAllLaunches(req,res))
launchesRouter.post('/',(req,res)=>httpAddNewLaunch(req,res))
launchesRouter.delete('/:id',(req,res)=>httpDeleteLaunch(req,res))

module.exports = launchesRouter;
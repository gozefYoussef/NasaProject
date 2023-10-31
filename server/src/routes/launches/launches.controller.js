const {getAllLaunches,addNewLaunch} = require('../../models/launches.model')

function httpGetAllLaunches(req,res){
    return res.status(200).json(getAllLaunches());
};

function httpAddNewLaunch(req,res){
    const launch =req.body;
    if(!launch.rocket || !launch.mission || !launch.destination || !launch.launchDate){
        res.status(400).json('bad Request')
    }else{
        launch.launchDate = new Date(launch.launchDate);
        if(isNaN(launch.launchDate)){
            return res.status(400).json({error:'Invalid Launch Date'})
        }
        addNewLaunch(launch);
        res.status(201).json('added new launch')
    }
}

function httpDeleteLaunch(req,res){
    const {id} = req.params;
    const index = launches.findIndex(launch => launch.flightNumber === parseInt(id));
    launches.splice(index,1);
    console.log('launch Deleted');
    res.status(200).json('/Delete launch')
}

module.exports = {
    httpGetAllLaunches,
    httpDeleteLaunch,
    httpAddNewLaunch
}
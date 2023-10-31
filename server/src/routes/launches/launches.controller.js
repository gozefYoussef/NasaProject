function getAllLaunches(req,res,launches){
    return res.json(Array.from(launches.values()))
};

function addNewLaunch(req,res,launches){
    const launch =req.body;
    launches.push(JSON.stringify(launch))
    res.json('added new launch')
}

function deleteLaunch(req,res,launches){
    const {id} = req.params;
    const index = launches.findIndex(launch => launch.id === parseInt(id));
    launches.splice(index,1);
    console.log('launch Deleted');
    res.status(200).json('/Delete launch')
}

module.exports = {
    getAllLaunches,
    deleteLaunch,
    addNewLaunch
}
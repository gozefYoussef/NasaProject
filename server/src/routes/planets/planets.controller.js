
function getAllPlanets(req,res,db) {
    return res.status(200).json(db)
}

module.exports = getAllPlanets;
const {createReadStream} = require('fs');
const path = require('path')
const {parse} = require('csv-parse');

const habitablePlanets = [];

function isHabitable(planet){
    return planet['koi_disposition'] === "CONFIRMED" 
    && planet['koi_insol'] > 0.36 
    && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

function loadPlanets() {
    return new Promise((resolve,reject)=>{
        createReadStream(path.join(__dirname,'..','..','data','kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', (data)=>{
            if(isHabitable(data)){
                habitablePlanets.push(data)
            }
        })
        .on('error', (err)=>{
            console.log(err)
            reject(err);
        })
        .on('end', ()=>{
            console.log("Done")
            resolve();
        })
    })
}


module.exports = {
    loadPlanets,
    planets: habitablePlanets
};
const launches = new Map();

const launch = {
    flightNumner: 100,
    mission:'Kepler Exploration X',
    rocket: 'Expo IS1',
    launchDate: ['January 27, 2030'],
    destination: 'Kepler-422 b',
    customer: ['joe','ztm'],
    upcoming:true,
    success:true,
}
launches.set(launch.flightNumner, launch)

module.exports = {
    launches,
}
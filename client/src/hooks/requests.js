
const API_URL = 'http://localhost:8000';
async function httpGetPlanets() {
    const res = await fetch(`${API_URL}/planets`)
    return await res.json();
}

async function httpGetLaunches() {
  const res = await fetch(`${API_URL}/launches`)
  const fetchedlaunches =  await res.json();
  return fetchedlaunches.sort((a,b)=>{
    return a.flightNumber - b.flightNumber;
  })
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try 
  {
    return await fetch(`${API_URL}/launches`,{
    method: 'POST',
    body: JSON.stringify(launch),
    headers:{
      "Content-Type": "application/json"
    },
  })} catch(err){
    return {
      ok: false
    };
  }
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
try 
  {
    return await fetch(`${API_URL}/launches/:id`,{
    method: 'DELETE',
    headers:{
      "Content-Type": "application/json"
    },
  })} catch(err){
    return {
      ok: false
    };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
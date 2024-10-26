/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

function calcNewVelocity({ acc = 0, vel = 0, time = 0 }) {
  const velocityInMetersPerSecond = vel * (1000 / 3600);
  const newVelocityInMetersPerSecond = velocityInMetersPerSecond + acc * time;
  return newVelocityInMetersPerSecond * (3600 / 1000);
}

function calcNewDistance({d = 0, vel = 0, time = 0 }){
  const velocityInMetersPerSecond = vel * (1000 / 3600);
  const newDistanceInMeters = d * 1000 + velocityInMetersPerSecond * time;
  return newDistanceInMeters / 1000;
}

function calcRemainingFuel({ fuel = 0, fbr = 0, time = 0 }) {
  return fuel - fbr * time;
}


// Pick up an error with how the function below is called and make it robust to such errors
const newVelocity = calcNewVelocity({  acc, vel, time });
const newDistance = calcNewDistance({ d, vel,  time });
const remainingFuel = calcRemainingFuel({ fuel,  fbr, time });


console.log(`New Velocity: ${newVelocity} km/h`);
console.log(`New Distance: ${newDistance} km`);
console.log(`Remaining Fuel: ${remainingFuel} kg`);








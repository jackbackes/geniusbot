'use strict';

if (typeof(Number.prototype.toRadians) === "undefined") {
  Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }
}

const haversine = (coord1, coord2) => {
  let [lat1, lon1] = coord1;
  let [lat2, lon2] = coord2;
  const R = 6371e3; // metres
  const phi1 = lat1.toRadians();
  console.log('haversine equation', lat1, lon1, lat2, lon2);
  const phi2 = lat2.toRadians();
  const deltaPhi = (lat2 - lat1).toRadians();
  const deltaLambda = (lon2 - lon1).toRadians();
  console.log('haversine2')
  const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
          Math.cos(phi1) * Math.cos(phi2) *
          Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  console.log('haversine3');
  const result = R * c;
  console.log('haversine result', result);
  return result;
}

module.exports = haversine;

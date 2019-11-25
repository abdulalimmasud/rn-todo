export default {
  googleMapApiKey: "AIzaSyCkSozXz2idiO4sN_0DTMUOz6vASAUxCcA",
  getDelta: (lat, lon) => {
    return {
      latitude: lat,
      longitude: lon,
      latitudeDelta: Math.max(0, latDelta(lat)),
      longitudeDelta: Math.max(0, lonDelta(lon))
    };
  }
};

const accuracy = 0.38;
const circumference = (40075 / 360) * 1000;
const oneDegreeOfLonInMeters = 111.32 * 1000;
const angularDistance = accuracy / circumference;
const latDelta = lat => {
  return Math.abs(
    Math.atan2(
      Math.sin(angularDistance) * Math.cos(lat),
      Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)
    )
  );
};
const lonDelta = lon => {
  return accuracy / oneDegreeOfLonInMeters;
};

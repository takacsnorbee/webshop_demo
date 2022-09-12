function toRad(value:number):number {
  /** Converts numeric degrees to radians */
  return (value * Math.PI) / 180;
}

const calculateDistance = (
  userLatitude:number,
  userLongitude:number,
  productLatitude:string,
  productLongitude:string,
):number => {
  // Calculate distance in km
  const RADIUS = 6371;
  const dLat = toRad(+productLatitude - userLatitude);
  const dLon = toRad(+productLongitude - userLongitude);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(toRad(userLatitude)) * Math.cos(toRad(+productLatitude))
            * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return RADIUS * c;
};

export default calculateDistance;

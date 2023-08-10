export default function getWindDirection(degrees) {
  switch (true) {
    case degrees >= 337.5 || degrees < 22.5:
      return "North";
    case degrees >= 22.5 && degrees < 67.5:
      return "Northeast";
    case degrees >= 67.5 && degrees < 112.5:
      return "East";
    case degrees >= 112.5 && degrees < 157.5:
      return "Southeast";
    case degrees >= 157.5 && degrees < 202.5:
      return "South";
    case degrees >= 202.5 && degrees < 247.5:
      return "Southwest";
    case degrees >= 247.5 && degrees < 292.5:
      return "West";
    case degrees >= 292.5 && degrees < 337.5:
      return "Northwest";
    default:
      return "Unknown";
  }
}

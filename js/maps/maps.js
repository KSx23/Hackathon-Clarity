// Maps class
class Maps {
    constructor() {
      this.locations = new Map();
    }
  
    addLocation(name, latitude, longitude) {
      this.locations.set(name, { latitude, longitude });
    }
  
    getLocation(name) {
      return this.locations.get(name);
    }
  
    getAllLocations() {
      return Array.from(this.locations.keys());
    }
  }
  
  // Example usage
  const maps = new Maps();
  
  maps.addLocation("New York", 40.7128, -74.0060);
  maps.addLocation("London", 51.5074, -0.1278);
  maps.addLocation("Tokyo", 35.6895, 139.6917);
  
  const newYorkLocation = maps.getLocation("New York");
  console.log("New York Location:", newYorkLocation);
  
  const allLocations = maps.getAllLocations();
  console.log("All Locations:", allLocations);
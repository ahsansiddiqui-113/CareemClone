import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const HomePage = ({ navigation }) => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [fare, setFare] = useState(null);
  const [selectedRide, setSelectedRide] = useState(null);

  const rideOptions = [
    { type: 'Car AC', icon: 'directions-car', fuelMultiplier: 1.2 },
    { type: 'Car', icon: 'directions-car', fuelMultiplier: 1.0 },
    { type: 'Car Mini', icon: 'directions-car', fuelMultiplier: 0.8 },
    { type: 'Motorbike', icon: 'motorcycle', fuelMultiplier: 0.5 },
    { type: 'Cargo', icon: 'local-shipping', fuelMultiplier: 1.5 },
  ];

  const calculateFare = () => {
    if (!startLocation || !endLocation || !selectedRide) {
      alert('Please select start location, end location, and a ride option.');
      return;
    }
    const baseFare = Math.random() * (100 - 5) + 5; 
    const fareEstimate = baseFare * selectedRide.fuelMultiplier;
    setFare(fareEstimate.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Careem</Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: 33.4324 }} />
        </MapView>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.heading}>Explore Rides</Text>
        <View style={styles.rideOptions}>
          {rideOptions.map((ride) => (
            <TouchableOpacity
              key={ride.type}
              style={[
                styles.rideOption,
                selectedRide?.type === ride.type && styles.selectedRideOption,
              ]}
              onPress={() => setSelectedRide(ride)}
            >
              <MaterialIcons name={ride.icon} size={24} color="black" />
              <Text style={styles.rideText}>{ride.type}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter start location"
          value={startLocation}
          onChangeText={setStartLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter end location"
          value={endLocation}
          onChangeText={setEndLocation}
        />
        <TouchableOpacity style={styles.fareButton} onPress={calculateFare}>
          <Text style={styles.buttonText}>Calculate Fare</Text>
        </TouchableOpacity>
        {fare && <Text style={styles.fareText}>Estimated Fare: ${fare}</Text>}
      </View>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color="black" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Explore')}>
          <Ionicons name="navigate-outline" size={24} color="black" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Setting')}>
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text style={styles.navText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mainContent: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  rideOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  rideOption: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedRideOption: {
    backgroundColor: '#ddd',
  },
  rideText: {
    marginTop: 5,
    fontSize: 14,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  fareButton: {
    backgroundColor: '#ffcf02',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fareText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomePage;

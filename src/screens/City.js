import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View
} from 'react-native'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { Feather } from '@expo/vector-icons'

const City = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ImageBackground
        source={require('../../assets/city-bg.jpg')}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>
        <View style={styles.populationWrapper}>
          <Feather name={'user'} size={50} color={'orange'} />
          <Text style={styles.populationText}>101000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name={'sunrise'} size={50} color={'white'} />
          <Text style={styles.riseSetText}>5:46:44am</Text>
          <Feather name={'sunset'} size={50} color={'white'} />
          <Text style={styles.riseSetText}>17:38:33pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'orange',
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})

export default City

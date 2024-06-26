import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import SafeViewAndroid from '../components/SafeViewAndroid'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, img } = styles
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, container]}>
      <ImageBackground
        source={require('../../assets/up-background.jpg')}
        style={img}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: StatusBar.currentHeight || 0
  },

  img: {
    flex: 1
  }
})
export default UpcomingWeather

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import SafeViewAndroid from './SafeViewAndroid'

const DATA = [
  {
    dt_txt: '2022-08-30 16:00:00',
    main: {
      temp_min: 8.34,
      temp_max: 7.24
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  },
  {
    dt_txt: '2022-09-03 15:00:00',

    main: {
      temp_min: 8.2,
      temp_max: 7.31
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  },
  {
    dt_txt: '2022-08-30 18:00:00',
    main: {
      temp_min: 8.84,
      temp_max: 7.94
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
]

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'orange'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  }
})
export default UpcomingWeather

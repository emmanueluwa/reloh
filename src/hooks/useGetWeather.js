import React, { useState, useEffect } from 'react'
const weather_api_key = process.env.EXPO_WEATHER_API_KEY

import * as Location from 'expo-location'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
      )
      const data = await res.json()

      setWeather(data)
    } catch (err) {
      setError('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('permission to access location denied!')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)

      //fetch data from api
      await fetchWeatherData()
    })()
  }, [lat, lon])

  return [loading, error, weather]
}

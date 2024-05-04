import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`Count changed`)
    return () => {
      console.log('useEffect cleanup')
    }
  }, [count])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={'darksalmon'}
        title={'Increase the count'}
        onPress={() => {
          setCount(count + 1)
        }}
      ></Button>
      <Button
        color={'palegreen'}
        title={'Decrease the count'}
        onPress={() => setCount(count - 1)}
      ></Button>
      <Button
        color={'darksalmon'}
        title={'Increase the count'}
        onPress={() => {
          setNewCount(count + 1)
        }}
      ></Button>
      <Button
        color={'palegreen'}
        title={'Decrease the count'}
        onPress={() => setNewCount(count - 1)}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'goldenrod'
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25
  }
})
export default Counter

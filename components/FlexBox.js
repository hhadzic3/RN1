import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
        <Text>1</Text>
      </View>
      <View style={styles.box3}> 
        <Text>1</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 50
  },
  box1: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default FlexBox

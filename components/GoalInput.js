import React, {useState} from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

// With in onPress () this function will be called as soon as this component is rendered, which is too soon
// 2 way binding is in textInput
const GoalInput = (props) => {
  const [text, setText] = useState('');
    
  // fetching input as user types
  function goalInputHandler(enteredText) {
    setText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(text);
    setText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image 
          style={styles.image} 
          source={require('../assets/images/goal.png')} 
          />
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal'
          onChangeText={goalInputHandler} 
          value={text}
          /> 
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button color="#f31282" title='Cancle' onPress={props.onCancle}/>
            </View>
            <View style={styles.button}>
              <Button color="#b180f0" title='Add goal' onPress={addGoalHandler}/>
            </View>
          </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#cccccc',
    backgroundColor: '#311b6b'
  },
  textInput: {
    width: '90%',
    padding: 16,
    borderWidth: 2,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    color: '#120438',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 15,
    width: 90,
  },
  image: {
    margin: 20,
    width: 100,
    height: 100,
  }
});

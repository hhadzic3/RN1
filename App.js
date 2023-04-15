import { 
  Button,
  StyleSheet, 
  View, 
  ScrollView, // render all child elements
  FlatList, // render only viewd child elements
} from 'react-native';
//import FlexBox from './components/FlexBox';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  
  // on button click
  function addGoalHandler(text) {
    //setGoals([...goals, text])
    setGoals((currentGoals) => 
      [...currentGoals, { text: text, key: Math.random().toString() }])
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    });
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler}/>
        { modalIsVisible && <GoalInput 
                              onCancle={endAddGoalHandler} 
                              visible={modalIsVisible} 
                              onAddGoal={addGoalHandler} /> }
        <View style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={itemData => {
            return <GoalItem id={itemData.item.id} onDeleteItem={deleteGoalHandler} text={itemData.item.text}/>;
          }} /> 
        </View>
        {/*<FlexBox> </FlexBox>*/}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

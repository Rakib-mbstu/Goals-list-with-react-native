import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [visible, setVisible] = useState(false);
  function startAddGoalHandler() {
    setVisible(true);
  }
  function closeAddGoalHandler() {
    setVisible(false);
  }
  function addGoalHandler(goal) {
    setGoals((currentGoals) =>
      [...currentGoals, { text: goal, id: Math.random().toString() }]);
    closeAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  };
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
        {visible && <GoalInput onAddGoal={addGoalHandler} show={visible} close={closeAddGoalHandler} />}
        <View style={styles.goalsContainer}>
          <FlatList data={goals}
            renderItem={itemData => {
              return <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                delete={deleteGoalHandler} />
            }}
            alwaysBounceVertical={false}
            keyExtractor={(item) => { return item.id }}
          />
        </View>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#14a7b3'
  },
  goalsContainer: {
    flex: 5,
  }
});

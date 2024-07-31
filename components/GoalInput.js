import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Image } from "react-native";
function GoalInput(props) {
    const [goal, setGoal] = useState('');
    function goalInputHandler(enteredText) {
        setGoal(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(goal);
        setGoal('');
    }
    return (
        <Modal visible={props.show} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/pngwing.com.png')} />
                <TextInput style={styles.inputText}
                    placeholder='Goal'
                    onChangeText={goalInputHandler}
                    value={goal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.close} color="#b9260c" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#0c63b9" />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'colun',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: '#0cb9ac',
        color: 'red'
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#d0d3d4',
        backgroundColor: '#d0d3d4',
        borderRadius: 8,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        marginTop: 8,
        justifyContent: "center",
        flexDirection: "row"
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    }
})

export default GoalInput;
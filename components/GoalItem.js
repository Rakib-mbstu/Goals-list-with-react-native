
import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable onPress={props.delete.bind(this, props.id)} style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white'
    }
})

export default GoalItem;
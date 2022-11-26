import { Text, View } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TaskProps } from "../../screens/Home";

interface ITask extends TaskProps {
  handleTaskToggleStatus: (taskId: string) => void,
  handleTaskRemove: (taskId: string) => void,
}

export function Task(props: ITask) {
  return (
    <>
      <View style={styles.mainContainer} >
        <View style={styles.taskContainer}>

          <Ionicons name={props.done ? 'md-checkmark-circle' : 'ellipse-outline'} size={24} color={props.done ? '#595ABD' : '#499ACC'} onPress={() => props.handleTaskToggleStatus(props.id)} />
          <Text style={{ ...styles.task, textDecorationLine: props.done ? "line-through" : "none", color: props.done ? '#6b6b6b' : '#FFFFFF' }}>{props.name}</Text>
          <Ionicons name="md-trash" size={24} color="#E74C3C" onPress={() => props.handleTaskRemove(props.id)} />
        </View>
      </View>
    </>
  )
}
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  handleTaskAdd: (task: string) => void;
}

export function TaskForm({ handleTaskAdd }: Props) {
  const [task, setTask] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor="#6b6b6b"
        style={styles.input}
        onChangeText={setTask}
        value={task}
      />

      <TouchableOpacity style={styles.button} onPress={() => {
        handleTaskAdd(task);
        setTask('');
      }}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
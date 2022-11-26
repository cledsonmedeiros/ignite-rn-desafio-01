import { useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { Banner } from "../../components/Banner";
import { TaskForm } from "../../components/TaskForm";
import { styles } from "./styles";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Task } from "../../components/Task";
import { EmptyList } from "../../components/EmptyList";

export interface TaskProps {
  id: string;
  name: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleTaskToggleStatus(taskId: string) {
    const taskList = [...tasks];
    const taskIndex = taskList.findIndex((task) => task.id === taskId);
    taskList[taskIndex].done = !taskList[taskIndex].done;
    setTasks(taskList);
  }

  function handleTaskRemove(taskId: string) {
    Alert.alert("Pergunta", `Remover tarefa?`, [
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => {
          setTasks(prevState => [...prevState].filter((task) => task.id !== taskId));
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ]);
  }

  function handleTaskAdd(taskName: string) {
    if (taskName.length === 0) {
      return Alert.alert("Erro", "A tarefa não pode ser vazia")
    }

    setTasks(prevState => [...prevState, {
      id: uuidv4(),
      name: taskName,
      done: false,
    }]);
  }

  return (
    <View style={styles.container}>
      <Banner />
      <TaskForm handleTaskAdd={handleTaskAdd} />

      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <Text style={{ ...styles.infoText, color: '#4EA8DE' }}>Criadas</Text>
          <View style={styles.infoAmountContainer}>
            <Text style={styles.infoAmount}>{tasks.length}</Text>
          </View>
        </View>
        <View style={{ ...styles.infoTextContainer, justifyContent: 'flex-end' }}>
          <Text style={{ ...styles.infoText, color: '#8284FA' }}>Concluídas</Text>
          <View style={styles.infoAmountContainer}>
            <Text style={styles.infoAmount}>{tasks.filter((task) => task.done).length}</Text>
          </View>
        </View>
      </View>

      <View style={styles.tasksContainer}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Task
                id={item.id}
                name={item.name}
                done={item.done}
                handleTaskToggleStatus={(taskId) => handleTaskToggleStatus(taskId)}
                handleTaskRemove={(taskId) => handleTaskRemove(taskId)}
              />
            )}
            ListEmptyComponent={() => (
              <EmptyList />
            )}
          />
        </View>
      </View>
    </View>
  )
}
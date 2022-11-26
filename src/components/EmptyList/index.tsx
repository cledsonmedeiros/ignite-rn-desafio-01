import { Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Ionicons name="list-outline" size={40} color="#6b6b6b" />
      <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.textBold}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}
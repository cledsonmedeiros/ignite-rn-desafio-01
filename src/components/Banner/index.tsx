import { Text, View } from "react-native";
import { styles } from "./styles";

export function Banner() {
  return (
    <>
      <View style={styles.logoContainer} >
        <View style={styles.container}>
          <Text style={styles.containerText}>ToDo</Text>
        </View>
      </View>
    </>
  )
}
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  taskContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    height: 64,
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  task: {
    width: '80%',
    fontSize: 18,
    marginLeft: 4,
    marginRight: 4,
  },
})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tasksContainer: {
    marginTop: 0,
    padding: 24,
    flex: 1,
  },
  infoContainer: {
    marginTop: 20,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoAmountContainer: {
    backgroundColor: '#444444',
    marginLeft: 8,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 5,
  },
  infoTextContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  infoText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  infoAmount: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  emptyListText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
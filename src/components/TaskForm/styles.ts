import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    // backgroundColor: '#131016',
    padding: 24,
    flexDirection: 'row',
    marginTop: 120,
  },

  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 56,
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#131016',
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 7,
  },
})
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF3E4",
  },
  img3Bg: {
    width: 450,
    position: "absolute",
    // flex: 1,
    resizeMode: "cover",
    height: 490,
  },
  headerContainer: {
    alignItems: "center",
    //marginTop: 200,
    marginTop: "20%",
  },
  headerText: {
    color: "#fff",
    marginTop: 100,
    backgroundColor: "yellow",
  },
  loginContainer: {
    backgroundColor: "rgba(75,88,81,0.8)",
    position: "absolute",
    width: 290,
    height: 250,
    paddingTop: 20,
    borderRadius: 20,
    borderWidth: 0.1,
    borderColor: "rgba(75,88,81,0.8)",
    bottom: 80,
    marginLeft: 50,
    marginBottom: -60,
  },
  text1: {
    color: "#FFE0B2",
    fontSize: 13,
    marginBottom: 5,
    marginTop: 5,
  },
  inputContainer: {
    marginLeft: 30,
    marginTop: 19,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  loginHeader: {
    fontSize: 32,
    textAlign: "left",
  },
  loginInput: {
    width: 200,
    borderBottomWidth: 1,
    borderColor: "white",
    color: "white",
  },
  button: {
    backgroundColor: "#808900",
    width: 150,
    height: 30,
    borderRadius: 20,
    textAlign: "center",
    marginTop: 30,
    fontSize: 14,
    // paddingTop: 5,
    fontWeight: "bold",
    marginLeft: 50,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#808900",
    marginTop: 40,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#DFF3E4",
  },
  register: {
    marginTop: 12,
  },
  registerText: {
    color: "#DFF3E4",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    marginRight: 15,
    marginLeft: 3,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default styles;

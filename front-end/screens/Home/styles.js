import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "beige",
  },
  homeImg: {
    width: 350,
    flex: 1,
    resizeMode: "cover",
    height: 850,
    position: "absolute",
    // bottom: 40,
    // top: 20,
  },
  view2Container: {
    backgroundColor: "rgba(75,88,81,0.8)",
    position: "absolute",
    width: 290,
    height: 360,
    paddingTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(75,88,81,1)",
    bottom: 50,
  },
  text: {
    color: "#DFF3E4",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
  view2: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text1: {
    color: "#FFE0B2",
    fontSize: 13,
  },
  loginText: {
    color: "#DFF3E4",
    fontWeight: "bold",
  },
  view3: {
    marginLeft: 30,
    marginTop: 19,
  },
  text2: {
    color: "#DFF3E4",
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 10,
  },
  textBox: {
    width: 200,
    borderBottomWidth: 1,
    borderColor: "white",
    color: "white",
  },
  signupText: {
    backgroundColor: "#808900",
    width: 150,
    height: 30,
    borderRadius: 20,
    textAlign: "center",
    marginTop: 30,
    fontSize: 14,
    paddingTop: 5,
    fontWeight: "bold",
    marginLeft: 25,
    color: "#DFF3E4",
  },
});

export default styles;

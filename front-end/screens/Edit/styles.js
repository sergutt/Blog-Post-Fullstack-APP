import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",

    marginTop: 160,
  },
  adminBg: {
    width: 500,
    height: 850,
    position: "absolute",
    flex: 1,
    resizeMode: "stretch",
    // bottom: 100,
    // top: 20,
  },
  publishText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  publishTextContainer: {
    borderRadius: 60,
    marginRight: 20,
    width: 150,
    height: 40,
    backgroundColor: "#808900",
    paddingTop: 2,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconEdit: {
    marginTop: 5,
  },
  text: {
    color: "white",
    fontSize: 20,
    borderRadius: 60,
    marginRight: 20,
    width: 100,
    height: 30,
    backgroundColor: "#808900",
    paddingBottom: 4,
    marginTop: 30,
    marginBottom: 5,
    textAlign: "center",
  },
  text1: {
    color: "beige",
    fontSize: 15,
    width: 350,
    height: 90,
    backgroundColor: "rgba(75,88,81,0.7)",
    borderRadius: 20,
  },
  backButton: {
    backgroundColor: "beige",
    marginLeft: 22,
    marginTop: 60,
    marginBottom: -90,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
});
export default styles;

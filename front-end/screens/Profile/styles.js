import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    //justifyContent: "center",
    // marginTop: 10,
  },
  profileBg: {
    width: 500,
    height: 850,
    position: "absolute",
    flex: 1,
    resizeMode: "stretch",
  },
  flatlist: {
    marginVertical: 10,
    padding: 20,
  },
  flatlistContainer: {
    // flexDirection: "column",
    backgroundColor: "#969696",
    // height: 300,
    // width: 350,
    margin: 10,
    borderRadius: 8,
    // paddingVertical: 45,
    paddingHorizontal: 20,
    paddingBottom: 20,
    // maxWidth: '100%',
    // maxHeight: "100%",
  },
  editButton: {
    backgroundColor: "red",
  },
  blogContainer: {
    flexDirection: "column",
  },
  blogTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "beige",
  },
  blogText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  backButton: {
    backgroundColor: "beige",
    marginLeft: 22,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
  signOutButton: {
    backgroundColor: "beige",
    borderRadius: 60,
    alignSelf: "flex-end",
    marginTop: -85,
    marginRight: 20,
    width: 90,
    height: 30,

    paddingTop: 4,
  },
  signOutText: {
    color: "#86702D",
    textAlign: "center",
  },
  userProfile: {
    color: "#86702D",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  actionContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    flexWrap: "wrap",
    paddingBottom: 10,
  },
  texts: {
    color: "white",
    marginHorizontal: 10,
  },
  view2: {
    width: 300,
    // height: 50,
  },
  // Modal starts here
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    padding: 20,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  modalView: {
    //margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    //padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "99%",
    height: "20%",
  },
  closeModal: {
    alignSelf: "flex-end",
    marginBottom: 15,
    marginTop: 10,
    marginRight: 15,
    //marginLeft: 100,
  },
  buttonContainer: {
    width: "100%",
  },
  modalText: {
    fontSize: 24,
    color: "#374151",
  },
  modalButton: {
    alignItems: "center",
  },
  editButton: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  deleteButton: {
    paddingTop: 10,
  },
});
export default styles;

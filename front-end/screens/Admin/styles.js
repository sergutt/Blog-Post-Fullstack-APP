import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#008DD5",
    //backgroundColor: "#f5fcfe",
  },
  adminBg: {
    width: 500,
    height: 850,
    position: "absolute",
    flex: 1,
    resizeMode: "stretch",
    // bottom: 100,
    // top: -50,
  },
  latestContainer: {
    marginLeft: 20,
  },

  flatlistContainer: {
    flexDirection: "column",
    backgroundColor: "#969696",
    // height: 100,
    width: 350,
    margin: 10,
    // backgroundColor: 'white',
    borderRadius: 10,

    // paddingVertical: 45,
    paddingHorizontal: 15,
    // maxWidth: '100%',
    // maxHeight: "100%",
    paddingBottom: 10,
  },

  center: {
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",
    marginTop: 80,
  },
  latestHeader: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#D2BC79",
  },
  flatlist: {
    alignSelf: "center",
    marginVertical: 10,
  },

  editButton: {
    alignSelf: "flex-end",
    marginRight: 20,
  },

  blogTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "beige",
  },
  blogText: {
    fontSize: 18,
    color: "#FFFFFF",
    width: 340,
    paddingBottom: 10,
  },
  view3: {
    // width: 300,
    // height: 35,
  },
  view2: {
    // width: 300,
    // height: 60,
    paddingBottom: 10,
  },
  blogInfo: {
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },
  blogAuthor: {
    fontSize: 18,
    marginLeft: 20,
    marginRight: 5,
    color: "beige",
  },
  blogDot: {
    fontSize: 32,
    color: "#FFFFFF",
  },
  blogDate: {
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 5,
  },

  /** Modal Button */
  buttonContainer: {
    //flex: 1,
    height: "11%",
    paddingVertical: 0,
    // backgroundColor: "black",
  },
  modalButton: {
    alignSelf: "flex-end",
    marginTop: 15,
    height: 80,
    marginRight: 25,
  },
  /*---- Modal Starts Here ----*/
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;

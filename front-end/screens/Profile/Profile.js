import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Platform,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import Blog from "../../components/Blog";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

const Profile = (props) => {
  const [userBlogs, setUserBlogs] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [details, setDetails] = useState();
  const [itemIndex, setItemIndex] = useState();

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  useEffect(() => {
    if (!props.userData.id) {
      props.navigation.navigate("Login");
    }
  }, []);

  const loadToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      return token;
    } catch (error) {
      console.log("Load token error: ", error);
    }
  };

  const getPost = async () => {
    const token = await loadToken();
    const config = {
      headers: { "x-auth-token": token },
    };
    return (
      axios
        .get(`http://${UrlString}:5054/blog`, config)
        // {
        //   authorId: props.userData.id,
        // }
        .then(function (response) {
          setUserBlogs(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    );
  };

  // This gets the blogs made by this user
  useEffect(async () => {
    const token = await loadToken();
    const config = {
      headers: { "x-auth-token": token },
    };
    return axios
      .get(`http://${UrlString}:5054/blog`, config)
      .then(function (response) {
        setUserBlogs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userBlogs]);

  const deletePost = async (id) => {
    await axios
      .put(`http://${UrlString}:5054/blog/delete`, {
        _id: id,
      })
      .then(function (res) {
        //console.log("This is res data ===>", res.data);
      })
      .then(() => {
        console.log("Blog post deleted.");
        setModalVisible(!modalVisible);
        getPost();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const signOut = async () => {
    /*props.setUserData({});
    props.setToken("");
    props.navigation.navigate("Login");*/
    try {
      await AsyncStorage.clear();
      props.setUserData({});
      props.navigation.navigate("Login");
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.flatlistContainer}>
        <Pressable
          style={styles.blogOptions}
          onPress={() => {
            setModalVisible(true);
            setDetails(item);
            setItemIndex(index);
          }}
        >
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={28}
            color="green"
          />
        </Pressable>

        <Text style={styles.blogTitle}>{item.subject}</Text>
        <Text numberOfLines={2} style={styles.blogText}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.profileBg} source={require("../Images/img4.png")} />
      <Pressable
        style={styles.backButton}
        onPress={() => props.navigation.navigate("Admin")}
      >
        <Ionicons name="md-chevron-back" size={40} color="#86702D" />
      </Pressable>
      <TouchableOpacity style={styles.signOutButton} onPress={() => signOut()}>
        <Text style={styles.signOutText}>Sign out</Text>
      </TouchableOpacity>

      {/* <View style={styles.content}> */}
      <Text style={styles.userProfile}>Hello {props.userData.userName}</Text>

      {/* <FlatList
          data={userBlogs}
          style={styles.flatlist}
          renderItem={({ item, index }) => (
            <View style={styles.flatlistContainer}>
              <View style={styles.view2}>
              <Text style={styles.blogTitle}>{item.subject}</Text>
              </View>
              <ScrollView style={styles.view2}>
              <Text style={styles.blogText}>{item.text}</Text>
              </ScrollView>
<View style={styles.actionContainer}>
<TouchableOpacity  onPress={() => {
                    props.navigation.navigate("Edit", {
                      item: item,
                      index: index,
                      //item: item._id,
                    });
                  }}>
                <Text style={styles.texts}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deletePost(item._id)}>
                <Text style={styles.texts}>Delete</Text>
              </TouchableOpacity>
</View>
              
            </View>
          )}
          //keyExtractor={(item) => item._id}
          keyExtractor={(item, index) => index.toString()}
        /> */}

      <FlatList
        data={userBlogs}
        style={styles.flatlist}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <Modal
        statusBarTranslucent={true}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeModal}>
              <Pressable
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text>
                  <AntDesign name="closecircleo" size={24} color="brown" />
                </Text>
              </Pressable>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.editButton}>
                <TouchableOpacity style={styles.modalButton}>
                  <Text
                    style={styles.modalText}
                    onPress={() => {
                      props.navigation.navigate("Edit", {
                        details: details,
                        itemIndex: itemIndex,
                        //item: item._id,
                      });
                      setModalVisible(!modalVisible);
                    }}
                  >
                    Edit{" "}
                    <FontAwesome
                      name="pencil-square-o"
                      size={30}
                      color="#86702D"
                    />
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.deleteButton}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => deletePost(details._id)}
                >
                  <Text style={styles.modalText}>
                    Delete <FontAwesome name="trash" size={30} color="brown" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

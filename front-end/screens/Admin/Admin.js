import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Platform,
  FlatList,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";

const Admin = (props) => {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [posted, setPosted] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let month = monthNames[d.getMonth()];
  let day = d.getDate();
  let year = d.getFullYear();

  let datePosted = `${month} ${day}, ${year}`;

  const loadToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      return token;
    } catch (error) {
      console.log("Load token error: ", error);
    }
    //return token;
  };

  const getPost = async () => {
    const token = await loadToken();
    const config = {
      headers: { "x-auth-token": token },
    };
    return axios
      .get(`http://${UrlString}:5054/blog/all`, config)
      .then(function (response) {
        console.log("this is blog data ===>", response.data);
        props.setBlogData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addPost = async () => {
    const token = await loadToken();
    const config = {
      headers: { "x-auth-token": token },
    };
    axios
      .post(
        `http://${UrlString}:5054/blog/new`,
        {
          subject: subject,
          text: text,
          authorId: props.userData.id,
          userName: props.userData.userName,
          date: datePosted,
        },
        config
      )
      .then(function (res) {
        //props.setBlogData(res.data); //blogs
        //props.navigation.navigate("Profile");
        getPost();
        setModalVisible(!modalVisible);
        setSubject("");
        setText("");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!props.userData.id) {
      props.navigation.navigate("Login");
    }
  }, [props.userData]);

  // we were using a useEffect here
  useFocusEffect(
    useCallback(() => {
      getPost();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Image style={styles.adminBg} source={require("../Images/img5.png")} />
      <View style={styles.center}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            props.navigation.navigate("Profile");
          }}
        >
          <FontAwesome5 name={"user-cog"} color={"beige"} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.latestContainer}>
        <Text style={styles.latestHeader}>Latest Blogs</Text>
      </View>
      <FlatList
        data={props.blogData.reverse()}
        style={styles.flatlist}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.flatlistContainer}>
            <View style={styles.blogInfo}>
              <Text style={styles.blogAuthor}>{item.userName}</Text>
              <Text style={styles.blogDot}>·</Text>
              <Text style={styles.blogDate}>{item.date}</Text>
            </View>

            <View style={styles.view3}>
              <Text style={styles.blogTitle}>{item.subject}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.blogText}>{item.text}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item._id}
        //keyExtractor={(index) => index.toString()}
      />

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.modalButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.modalText}>
            <AntDesign name="pluscircle" size={50} color="#D2BC79" />
          </Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity>
              <Text>Subject</Text>
              <TextInput
                placeholder="type your title here"
                value={subject}
                onChangeText={setSubject}
              />
              <Text>Body</Text>
              <TextInput
                placeholder="type your message here"
                value={text}
                onChangeText={setText}
              />
            </TouchableOpacity>
            <Text>{setSubject}</Text>
            <TouchableOpacity onPress={() => addPost()}>
              <Text>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Admin;

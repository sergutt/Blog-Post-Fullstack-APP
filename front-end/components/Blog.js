import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Blog = ({ item, index, userId }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [blogText, setBlogText] = useState("");
  const [blogSubject, setBlogSubject] = useState("");

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  const loadToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      return token;
    } catch (error) {
      console.log("Load token error: ", error);
    }
  };

  useEffect(() => {
    console.log("this is our item ", item);
  }, []);

  const handleEdit = (subject, text, id) => {
    setToggleEdit(!toggleEdit);
    console.log(toggleEdit);
  };

  const updatePost = async () => {
    await axios
      .put(`http://${UrlString}:5054/blog/update`, {
        subject: blogSubject,
        text: blogText,
        _id: id,
      })
      .then(function (res) {
        console.log("This is res data ===>", res.data);
        //AsyncStorage.setItem("subject", res.data.subject);
        //AsyncStorage.setItem("text", res.data.text);
        // AsyncStorage.setItem("id", res.data.id);
      })
      .then(() => {
        console.log("Blog post saved");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  /**
   *  await axios
      .put(`http://${UrlString}:5054/blog/update`, {
        _id: id,
        subject: subject,
        text: text,
      })
      .then(function (res) {
        console.log("This is res data ===>", res.data);
      })
      .then(() => {
        console.log("Blog post updated");
        props.navigation.navigate("Admin");
      })
      .catch(function (err) {
        console.log(err);
      });
   */

  return (
    <View key={index}>
      {toggleEdit ? (
        <View key={index}>
          <TextInput
            placeholder="subject"
            value={blogSubject}
            onChangeText={setBlogSubject}
          />
          <TextInput
            placeholder="text"
            value={blogText}
            onChangeText={setBlogText}
          />
          <TouchableOpacity
            onPress={() =>
              updatePost(item._id, item.blogSubject, item.blogText)
            }
            //onPress={() => updatePost(props.blogData.indexOf(item))}
          >
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // setToggleEdit(false)
        <View key={index}>
          <TouchableOpacity onPress={() => handleEdit(index)}>
            <Text>{item.subject}</Text>
            <Text>{item.text}</Text>
            {/* <Text>{item._id}</Text> */}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Blog;

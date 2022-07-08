import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Edit = (props) => {
  const { details, itemIndex } = props.route.params;
  const [subject, setSubject] = useState();
  const [text, setText] = useState();
  // let id = item._id;
  let id = details._id;

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  useEffect(() => {
    setSubject(details.subject);
    setText(details.text);
  }, []);

  const updatePost = async (index) => {
    await axios
      .put(`http://${UrlString}:5054/blog/update`, {
        _id: id,
        subject: subject,
        text: text,
      })
      .then(() => {
        //setSubject("");
        //setText("");
        props.navigation.navigate("Admin");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.adminBg} source={require("../Images/img5.png")} />

      <Pressable
        style={styles.backButton}
        onPress={() => props.navigation.navigate("Profile")}
      >
        <Ionicons name="md-chevron-back" size={40} color="#D2BC79" />
      </Pressable>
      <View style={styles.content}>
        <TouchableOpacity>
          <Text style={styles.text}>Subject</Text>
          <TextInput
            placeholder="type your title here"
            placeholderTextColor={"#B4B9B7"}
            value={subject}
            onChangeText={setSubject}
            style={styles.text1}
          />
          <Text style={styles.text}>Body</Text>
          <TextInput
            placeholder="type your message here"
            placeholderTextColor={"#B4B9B7"}
            value={text}
            onChangeText={setText}
            style={styles.text1}
          />
        </TouchableOpacity>

        <TouchableOpacity
          //onPress={() => updatePost(item._id, item.subject, item.text)}
          onPress={() => updatePost(props.blogData.indexOf(details))}
          style={styles.publishTextContainer}
        >
          <Text style={styles.publishText}>Publish</Text>
          <FontAwesome
            name="pencil-square-o"
            size={24}
            color="#DFF3E4"
            style={styles.iconEdit}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Edit;

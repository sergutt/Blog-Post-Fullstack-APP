import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

// import Login from '../Login/Login'
// import Register from '../Register/Register'
import styles from "../Home/styles";
// import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

const Home = (props) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }
  const register = () => {
    axios
      .post(`http://${UrlString}:5054/user/register`, {
        email: email,
        userName: userName,
        password: password,
      })
      .then(function (response) {
        props.navigation.navigate("Login");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}
      >
        <Ionicons name="md-chevron-back" size={40} color="#f6f9ff" />
      </Pressable>

      <Image style={styles.homeImg} source={require("../Images/img.png")} />

      <KeyboardAvoidingView style={styles.view2Container} behavior="padding">
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Get Started</Text>
          <View style={styles.view2}>
            <Text style={styles.text1}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={[styles.text1, styles.loginText]}>Log in</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.view3}>
            <Text style={styles.text2}>Name</Text>
            <TextInput
              style={styles.textBox}
              placeholder="Enter your name"
              placeholderTextColor={"#B4B9B7"}
              onChangeText={setUserName}
              value={userName}
            />
            <Text style={styles.text2}>Email</Text>
            <TextInput
              style={styles.textBox}
              placeholder="Enter your Email"
              placeholderTextColor={"#B4B9B7"}
              onChangeText={setEmail}
              value={email}
            />
            <Text style={styles.text2}>Password</Text>
            <TextInput
              style={styles.textBox}
              placeholder="Enter your password"
              placeholderTextColor={"#B4B9B7"}
              onChangeText={setPassword}
              value={password}
            />
            <Pressable onPress={() => register()}>
              <Text style={styles.signupText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
};

export default Home;

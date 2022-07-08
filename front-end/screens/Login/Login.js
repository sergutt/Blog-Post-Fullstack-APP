import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

import { AntDesign } from "@expo/vector-icons";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [isLogin, setIsLogin] = useState(false);
  //console.log(props.userData);
  //console.log(props.token);

  useEffect(() => {
    if (props.userData.id) props.navigation.navigate("Admin");
  }, [props.userData]);

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  const register = () => {
    props.navigation.navigate("Register");
  };

  const login = async () => {
    axios
      .post(`http://${UrlString}:5054/user/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        // use async storage to set an item with the key token to the value of the token that was received

        props.setUserData(response.data.user);
        return AsyncStorage.setItem("token", response.data.token);
      })
      .then(() => {
        console.log("Token saved");
        props.navigation.navigate("Admin");
        setEmail("");
        setPassword("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image style={styles.img3Bg} source={require("../Images/img3.png")} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hawsa Blog!</Text>
      </View>
      <View style={styles.loginContainer}>
        {/* <Text style={styles.loginHeader}>Login</Text> */}
        <View style={styles.inputContainer}>
          <Text style={styles.text1}>Email</Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor={"#B4B9B7"}
          />
          <Text style={styles.text1}>Password</Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={setPassword}
            value={password}
            placeholder="********"
            placeholderTextColor={"#B4B9B7"}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>
              Login <AntDesign name="arrowright" size={18} color="#DFF3E4" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.text1}>Create an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <Text style={styles.registerText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

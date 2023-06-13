import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "../components/ImageViewer.js";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const [state, setState] = useState(initialState);
  const [selectedImage, setSelectedImage] = useState(null);
  const keyboardHide = () => {
    setIsShowKeybord(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result.assets[0]);
    } else {
      alert("You did not select any image.");
    }
  };
  const handleDeleteImage = () => {
    setSelectedImage(null);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        source={require("../assets/PhotoBG.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.container,
              paddingBottom: isShowKeybord ? 32 : 78,
            }}
          >
            <ImageViewer
              selectedImage={selectedImage}
              onPress={pickImageAsync}
              onDelete={handleDeleteImage}
            />
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                value={state.login}
                onFocus={() => setIsShowKeybord(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                value={state.email}
                onFocus={() => setIsShowKeybord(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  value={state.password}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeybord(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <Pressable style={styles.showPassword}>
                  <Text style={styles.texShowPassword}>Показати</Text>
                </Pressable>
              </View>
            </View>
            <Pressable style={styles.button} onPress={keyboardHide}>
              <Text style={styles.titleBtn}>Зареєструватися</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.textLink}>Вже є аккаутн? Увійти</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 78,
  },

  title: {
    textAlign: "center",
    marginBottom: 33,
    // fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
  },
  form: {
    gap: 16,
    marginBottom: 43,
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    // fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
  },

  showPassword: {
    position: "absolute",
    top: 16,
    right: 15,
  },
  texShowPassword: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    // fontFamily: "Roboto",
    color: "#1B4371",
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    marginBottom: 16,
  },
  titleBtn: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    // fontFamily: "Roboto",
    color: "#FFFFFF",
    textAlign: "center",
  },
  textLink: {
    color: "#1B4371",
    //  fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    textAlign: "center",
    //paddingBottom: 144,
  },
});

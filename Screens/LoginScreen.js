import React, { useState } from "react"; // import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

export default function LoginScreen() {
  const [showKeybord, setShowKeybord] = useState(false);
  return (
    <ImageBackground
      source={require("../assets/photoBG.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View
          style={{
            ...styles.blok,
            paddingBottom: showKeybord ? 144 : 32,
          }}
        >
          <View style={styles.form}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              onFocus={() => setShowKeybord(true)}
            />
            <View>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => setShowKeybord(true)}
              />
              <Pressable style={styles.showPassword}>
                <Text style={styles.texShowPassword}>Показати</Text>
              </Pressable>
            </View>

            <Pressable style={styles.button}>
              <Text style={styles.titleBtn}>Увійти</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.text}>Немає аккаунту? Зареєструватися</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  blok: {
    marginTop: "69%",
    backgroundColor: "#FFFFFF",
    position: "relative",
    paddingTop: 32,
    paddingBottom: 144,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: 390,
    // position: "absolute",
    //flex: 1,
    // justifyContent: "flex-end",
  },

  form: {
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,

    marginBottom: 16,
  },
  title: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 33,
  },
  showPassword: {
    marginRight: 16,
    position: "absolute",
    right: 0,
    top: 16,
  },
  texShowPassword: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "right",
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    height: 51,
    marginTop: 43,
    marginBottom: 16,
  },
  titleBtn: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    paddingVertical: 16,
  },
  text: {
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
  },
});

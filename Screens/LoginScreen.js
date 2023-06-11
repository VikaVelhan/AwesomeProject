import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

export default function LoginScreen() {
  const [isShowKeybord, setIsShowKeybord] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/PhotoBG.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            ...styles.container,
            paddingBottom: isShowKeybord ? 144 : 32,
          }}
        >
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              onFocus={() => setIsShowKeybord(true)}
            />
            <View>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => setIsShowKeybord(true)}
              />
              <Pressable style={styles.showPassword}>
                <Text style={styles.texShowPassword}>Показати</Text>
              </Pressable>
            </View>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.titleBtn}>Увійти</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.textLink}>Немає акаунту? Зареєструватися</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
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
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 144,
  },
  title: {
    textAlign: "center",
    marginBottom: 33,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
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
    fontFamily: "Roboto",
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
    fontWeight: 400,
    lineHeight: 19,
    fontFamily: "Roboto",
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
    fontWeight: 400,
    lineHeight: 19,
    fontFamily: "Roboto",
    color: "#FFFFFF",
    textAlign: "center",
  },
  textLink: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    textAlign: "center",
    paddingBottom: 144,
  },
});

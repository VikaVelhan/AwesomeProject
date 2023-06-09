import React from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  Image,
} from "react-native";
export default function RegistrationScreen() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/photoBG.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.blok}>
          <View style={styles.photo}></View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Логін"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              placeholder="Адреса електронної пошти"
            />
            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Пароль"
                secureTextEntry={true}
              />
              <Pressable style={styles.showPassword}>
                <Text style={styles.texShowPassword}>Показати</Text>
              </Pressable>
            </View>

            <Pressable style={styles.button}>
              <Text style={styles.titleBtn}>Зареєструватися</Text>
            </Pressable>
          </View>
          <Pressable>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          </Pressable>
        </View>
      </ImageBackground>
      <Image
        style={styles.imageHome}
        source={require("../assets/HomeIndicator.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  blok: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: "16%",
    paddingBottom: "14%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
    left: "34%",
  },
  form: {
    marginHorizontal: 12,
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
    paddingLeft: 16,
    paddingRight: 16,
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
    marginTop: 33,
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
    paddingVertical: 16,
  },
  imageHome: {
    marginBottom: 5,
  },
});

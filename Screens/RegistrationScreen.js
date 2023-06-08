import React from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
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
        <Text style={styles.text}>Реєстрація</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Логін"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          placeholder="Адреса електронної пошти"
          //  keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Пароль"
        />
        <Button color="#FF6C00" style={styles.button} title="Зареєстуватися" />
        <Text>Вже є акаунт? Увійти</Text>
      </ImageBackground>
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
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
  },
  button: {
    //borderRadius: 100,
    width: 100,
  },
});

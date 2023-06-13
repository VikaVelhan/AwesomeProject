import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function ImageViewer({ selectedImage, onPress, onDelete }) {
  const defaultImage = require("../assets/images/rectangle.png");
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : defaultImage;
  const handleDelete = () => {
    onDelete();
  };

  return (
    <View style={styles.photo}>
      {imageSource && <Image style={styles.photoStyle} source={imageSource} />}
      {selectedImage !== null ? (
        <TouchableOpacity style={styles.delPhoto} onPress={handleDelete}>
          <Image source={require("../assets/images/del.png")} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.addPhoto} onPress={onPress}>
          <Image source={require("../assets/images/add.png")} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    position: "absolute",
    left: "38%",
    top: -60,
  },
  photoStyle: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addPhoto: {
    position: "absolute",
    left: 107,
    top: 79,
  },
  delPhoto: {
    position: "absolute",
    left: 101,
    top: 73,
  },
});

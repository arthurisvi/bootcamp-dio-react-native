import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const toggle = false; //false

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress ={ () => {}}>
        <Image
          style={toggle ? styles.lightingOn : styles.lightingOff}
          source={require(toggle
            ? "./assets/icons/eco-light.png"
            : "./assets/icons/eco-light-off.png")}
        />
        <Image
          style={styles.dioLogo}
          source={require(toggle
            ? "./assets/icons/logo-dio.png"
            : "./assets/icons/logo-dio-white.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLight: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightingOn: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: "#ffff",
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 250,
    height: 250,
  },
});

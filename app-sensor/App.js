import { useState, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity} from "react-native";
import * as Shake from "expo-shake";

export default function App() {
  const [toggle, setToggle] = useState(false);

  const handleOnPress = () => setToggle(!toggle);

  useEffect(() => {
    //trocar estado da lanterna
  }, [toggle]);

  useEffect(() => {
    Shake.addListener(() => {
      setToggle(!toggle);
    });

    return Shake.removeSubscription(() => {});
  });

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={handleOnPress}>
        <Image
          style={toggle ? styles.lightingOn : styles.lightingOff}
          source={
            toggle
              ? require("./assets/icons/eco-light.png")
              : require("./assets/icons/eco-light-off.png")
          }
        />
        <Image
          style={styles.dioLogo}
          source={
            toggle
              ? require("./assets/icons/logo-dio.png")
              : require("./assets/icons/logo-dio-white.png")
          }
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

import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import * as Linking from "expo-linking";

const colorGithub = "#010409"
const colorFontGithub = "#C9D1D9"
const imgProfile = "https://avatars.githubusercontent.com/u/83462514?v=4";
const urlMyGithub = "https://github.com/arthurisvi"

export default function App() {

  const handlePressToGithub = async () => {
    const res = await Linking.canOpenURL(urlMyGithub);
    if (res) {
      await Linking.openURL(urlMyGithub)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor={colorGithub} />
      <View style={styles.content}>
        <Image
          style={styles.avatar}
          source={{
            uri: imgProfile,
          }}
        />
        <Text style={[styles.defaultText, styles.name]}>Arthur Isvi</Text>
        <Text style={[styles.defaultText, styles.nickName]}>arthurisvi</Text>
        <Text style={[styles.defaultText, styles.description]}>
          Estudante de Sistemas de Informação na Universidade de Pernambuco e
          Desenvolvedor Full-Stack em formação.
        </Text>
        <TouchableOpacity style={styles.button}
          onPress={handlePressToGithub}>
          <Text style={[styles.defaultText, styles.textButton]}>Open in Github</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGithub,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  nickName: {
    color: "#4f565E",
    fontSize: 18,
  },
  description: {
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#4f565E",
    padding: 20,
    borderRadius: 12,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 16
  },
});

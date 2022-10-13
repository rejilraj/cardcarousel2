import { useRoute } from "@react-navigation/native";
import { SafeAreaView, Text, StyleSheet } from "react-native";


function DetailScreen () {

    const route = useRoute()

    return(
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Content}>{route.params.head}</Text>
        </SafeAreaView>
    )


}
const styles = StyleSheet.create({
  Content: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    color: "white",
  },
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
});

export default DetailScreen;
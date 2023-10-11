import { View,Text,StyleSheet ,Image} from "react-native";

const Header = () => (
    <View style={styles.header}>
      <HeaderTitle />
    </View>
  );
  const HeaderTitle = () => (
    <View style={styles.title}>
      <Text style={styles.bigTitle}>Hi, Jane</Text>
      <Text style={styles.smallTitle}>Aug 12, 2021</Text>
    </View>
  );
  const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
      paddingHorizontal: 5,
      flexDirection: "row",
      alignItems: "center",
    },
    title: { paddingHorizontal: 10, flex: 1, justifyContent: "center" },
    bigTitle: { fontSize: 16 },
    smallTitle: { fontSize: 10, opacity: 0.6 },
    image: { height: "100%", width: "100%" },
  
  });

  export default  Header;
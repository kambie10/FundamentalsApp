import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function CustomeNotFound() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16
      }}
    >
      <Text>CustomeNotFound</Text>
      <Link href="/">Go to Home</Link>
    </View>
  );
}

import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetailProduct() {
  const { id } = useLocalSearchParams()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text>Details about product with {id}</Text>
    </View>
  );
}

import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CatchAllProductDetails() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text>Catch all product details</Text>
      <Text>Details about product at {rest.join("/")}</Text>
    </View>
  );
}

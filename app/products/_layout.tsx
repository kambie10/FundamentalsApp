import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function ProductsLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Slot />
      <View style={styles.discountedProducts}>
        <Text>Discounted products</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountedProducts: {
    padding: 20,
    backgroundColor: "orange",
    width: '100%',
  },
})
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Products() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text>Products</Text>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>

      <Link href="/products/best-sellers/playstation-5">
        PlayStation 5 (Best Sellers)
      </Link>

      <Link href="/products/deals/black-friday/playstation-5">
        PlayStation 5 (Deals)
      </Link>

      <Link href="/products/search/playstation-5">
        PlayStation 5 (Search)
      </Link>
    </View>
  );
}

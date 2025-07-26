import InitialLayout from "@/components/layout/initial-layout";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const publicKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!publicKey) {
    throw new Error("Missing Auth Public key, Contact the development team !");
  }
  return (
    <ClerkProvider publishableKey={publicKey} tokenCache={tokenCache}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}

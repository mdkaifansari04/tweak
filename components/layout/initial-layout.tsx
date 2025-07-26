import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const segment = useSegments();
  useEffect(() => {
    if (!isLoaded) return;
    const inAuthGroup = segment[0] === "(auth)";
    if (!inAuthGroup && !isSignedIn) router.replace("/(auth)/login");
    else if (inAuthGroup && isSignedIn) router.replace("/(tabs)");
  }, [isLoaded, isSignedIn, segment, router]);
  if (!isLoaded) return <Stack screenOptions={{ headerShown: false }} />;
}

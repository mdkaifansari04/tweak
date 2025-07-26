import { LoaderCircle } from "lucide-react-native";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";

export default function FullScreenLoader() {
  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinAnim]);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}
    >
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <LoaderCircle size={32} />
      </Animated.View>
    </View>
  );
}

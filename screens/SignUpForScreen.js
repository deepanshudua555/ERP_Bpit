import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme/ThemeColors";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import FadeInView from "../components/FadeInView";


export default function SignUpForScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex-row justify-start">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
        >
          <ArrowLeftIcon size="20" color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <View className="flex-row justify-center">
          <FadeInView>
            <Image
              source={require("../assets/images/student2.png")}
              style={{ width: 255, height: 255 }}
            />
          </FadeInView>
        </View>
        <View className="space-y-4 ">
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpStudent")}
            className="py-3 bg-yellow-400 mx-7 rounded-xl space-y-4"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Student
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <FadeInView>
            <Image
              source={require("../assets/images/welcome.png")}
              style={{ width: 300, height: 300 }}
            />
          </FadeInView>
        </View>

        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpTeacher")}
            className="py-3 bg-yellow-400 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Teacher
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 24,
    marginTop: -20,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    // backgroundColor:'red'
    // borderRadius:5,
  },
});

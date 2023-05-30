import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {themeColors} from '../theme/ThemeColors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';

export default function LeaveApplicationScreen() {
  const navigation = useNavigation();
  const [enteredFiratName, setEnteredFirstName] = useState('');

  function firseNameInputHandler(enteredText) {
    setEnteredFirstName(enteredText);
  }
  return (
    <ScrollView
      className="flex-1 bg-white"
      style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mb-3">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{marginHorizontal: 10, height: 49}}
          className="flex-1  bg-yellow-400  rounded-xl">
          <Text
            style={{paddingVertical: 9}}
            className="text-xl font-bold text-center text-gray-700">
            Leave Applicaton Form
          </Text>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/images/leave_Application.png')}
            style={{width: 200, height: 110}}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingBottom: 110,
        }}>
        <View className="flex-row ">
          <View style={{marginTop: -5}}>
            <Image
              source={require('../assets/images/Bpit_logo.png')}
              style={{width: 120, height: 60}}
            />
          </View>
          <View style={{width: 200, height: 50, marginLeft: 24}}>
            <Text style={{fontSize: 17}} className="text-gray-700">
              Bhagwan Parshuram Institute of Technology
            </Text>
          </View>
        </View>
        <View className=" form space-y-2">
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text className="text-gray-700 ml-4">First Name</Text>
            <TextInput
              
              placeholder="enter first name"
              autoCorrect={false}
              onChangeText={firseNameInputHandler}
              value={enteredFiratName}
            />
          </View>
          <Text className="text-gray-700 ml-4">Last Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="enter last name"
            autoCorrect={false}
            onChangeText={firseNameInputHandler}
            value={enteredFiratName}
          />
          <Text className="text-gray-700 ml-4">Teacher ID</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="enter teacher id"
            autoCorrect={false}
            onChangeText={firseNameInputHandler}
            value={enteredFiratName}
          />
          <Text className="text-gray-700 ml-4">Mobile Numer</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="enter mobile number"
            autoCorrect={false}
            onChangeText={firseNameInputHandler}
            value={enteredFiratName}
          />
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value=""
            placeholder="enter your e-mail"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
            secureTextEntry
            value=""
            placeholder="enter password"
          />
          <Text className="text-gray-700 ml-4">Department</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
            secureTextEntry
            value=""
            placeholder="enter your department"
          />
          {/* <View >
            {!!selected && (
              <Text>
                Selected: label = {selected.label} and value = {selected.value}
              </Text>
            )}
            <Dropdow label="Select Item" data={data} onSelect={setSelected} />
            <Text>This is the rest of the form.</Text>
          </View> */}
          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
            <Text className="font-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Text className="text-xl text-gray-700 font-bold text-center py-5">
            Or
        </Text> */}
        {/* <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/apple.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/facebook.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View> */}
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="font-semibold text-yellow-500"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

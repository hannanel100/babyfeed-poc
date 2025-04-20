import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

type SignUpScreenProps = { navigation: any };

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View className="flex-1 justify-center px-4 bg-white">
      <Text className="text-3xl font-bold mb-6">Sign Up</Text>
      <TextInput
        className="border border-gray-300 rounded p-2 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className="border border-gray-300 rounded p-2 mb-4"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        className="border border-gray-300 rounded p-2 mb-6"
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        className="bg-blue-600 rounded p-3 mb-4"
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text className="text-white text-center font-semibold">Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text className="text-gray-600 text-center">Back to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { supabase } from '../../utils/supabase'

type ForgotPasswordScreenProps = { navigation: any }

export default function ForgotPasswordScreen({ navigation }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleReset = async () => {
    setError('')
    setMessage('')
    const { error } = await supabase.auth.resetPasswordForEmail({ email })
    if (error) setError(error.message)
    else setMessage('Check your email for reset link.')
  }

  return (
    <View className="flex-1 justify-center px-4 bg-white">
      <Text className="text-3xl font-bold mb-6">Reset Password</Text>
      {error ? <Text className="text-red-500 mb-4">{error}</Text> : null}
      {message ? <Text className="text-green-500 mb-4">{message}</Text> : null}
      <TextInput
        className="border border-gray-300 rounded p-2 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity className="bg-blue-600 rounded p-3" onPress={handleReset}>
        <Text className="text-white text-center font-semibold">Send Reset Link</Text>
      </TouchableOpacity>
    </View>
  )
}

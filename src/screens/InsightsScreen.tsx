import React from 'react';
import { View, Text } from 'react-native';

import AuthGuard from '../components/AuthGuard';

export default function InsightsScreen() {
  return (
    <AuthGuard>
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Text className="text-2xl font-bold">Insights</Text>
      </View>
    </AuthGuard>
  );
}

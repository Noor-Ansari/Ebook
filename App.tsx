import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './screens/HomePage'
import TopicList from './screens/TopicList'
import { NavigationContainer } from '@react-navigation/native'
import ViewPage from './screens/ViewPage'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="TopicList" component={TopicList} />
        <Stack.Screen name="ViewPage" component={ViewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

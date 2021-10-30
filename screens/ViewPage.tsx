import React from 'react'
import { SafeAreaView, Text } from 'react-native'

export default function ViewPage({ route, navigation }: any) {
  const { pageNumber } = route.params

  return (
    <SafeAreaView>
      <Text>View Page {pageNumber}</Text>
    </SafeAreaView>
  )
}

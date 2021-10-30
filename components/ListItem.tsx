import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
  title: string
  pageNumber: number
  callback: (pageNumber: number) => void
}

const styles = StyleSheet.create({
  listItem: {
    padding: '0.5rem',
    backgroundColor: '#ddd',
    margin: '0.5rem',
    borderRadius: 15,
  },
})

export default function ListItem({ title, pageNumber, callback }: Props) {
  const openPage = () => {
    console.log({ pageNumber })
    callback(pageNumber)
  }

  return (
    <TouchableOpacity onPress={openPage}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

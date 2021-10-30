import * as React from 'react'
import { FlatList, View } from 'react-native'
import topics from '../topics.json'
import ListItem from '../components/ListItem'

export default function TopicList({ navigation }: any) {
  const renderItem = ({
    item,
  }: {
    item: { name: string; pageNumber: number }
  }) => (
    <ListItem
      title={item.name}
      pageNumber={item.pageNumber}
      callback={listItemCallback}
    />
  )

  const listItemCallback = (pageNumber: number) => {
    navigation.navigate('ViewPage', { pageNumber })
  }

  return (
    <View>
      <FlatList
        data={topics}
        renderItem={renderItem}
        keyExtractor={(item) => `${Math.random()}`}
      />
    </View>
  )
}

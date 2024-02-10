import {useMemo, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {listItems} from './listItems';

const styles = StyleSheet.create({
  searchBox: {
    height: 48,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    fontSize: 18,
  },
  listItem: {
    padding: 12,
    backgroundColor: '#1111',
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 18,
  },
});

function Item({title, onPress}: {title: string; onPress: () => void}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <Text style={styles.listItem}>{title}</Text>
    </TouchableOpacity>
  );
}

function List({navigation}: any) {
  const [search, setSearch] = useState('');

  const filteredList = useMemo(() => {
    return listItems.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const handleItemClick = (page: number) => {
    navigation.navigate('Read', {
      page,
    });
  };

  return (
    <>
      <TextInput
        style={styles.searchBox}
        onChangeText={text => setSearch(text)}
        value={search}
        placeholder="Search..."
      />
      <FlatList
        data={filteredList}
        renderItem={({item}) => (
          <Item
            title={item.title}
            onPress={handleItemClick.bind(null, item.page)}
          />
        )}
      />
    </>
  );
}

export default List;

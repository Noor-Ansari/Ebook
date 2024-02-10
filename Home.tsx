import {Button, Text, View} from 'react-native';

function Home({navigation}: any) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Read Book" onPress={() => navigation.navigate('List')} />
      <Button title="Share" />
      <Button title="About" />
    </View>
  );
}

export default Home;

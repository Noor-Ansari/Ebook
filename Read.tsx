import {Text, View} from 'react-native';

function Read({route}: any) {
  const {page} = route.params;
  return (
    <View>
      <Text>Read : {page}</Text>
    </View>
  );
}

export default Read;

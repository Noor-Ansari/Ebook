import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'

export default function HomePage({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Button
          onPress={() => navigation.push('TopicList')}
          title="Urdu"
          style={styles.button}
        />
        <View style={styles.buttonRow}>
          <Button
            onPress={() => console.log('pressed')}
            title="Our Apps"
            style={styles.smallButton}
          />
          <Button
            onPress={() => console.log('pressed')}
            title="Website"
            style={styles.smallButton}
          />
        </View>
        <View style={styles.buttonRow}>
          <Button
            onPress={() => console.log('pressed')}
            title="Rate"
            style={styles.smallButton}
          />
          <Button
            onPress={() => console.log('pressed')}
            title="Share"
            style={styles.smallButton}
          />
        </View>
        <Button
          onPress={() => console.log('pressed')}
          title="About Us"
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '2rem',
    flex: 0.4,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'red',
    height: '2.5em',
    width: '22rem',
    borderRadius: 20,
  },
  smallButton: {
    backgroundColor: 'red',
    height: '2.5em',
    width: '9rem',
    borderRadius: 20,
  },
  buttonRow: {
    width: '22rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

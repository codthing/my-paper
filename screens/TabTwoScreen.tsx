import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card, Title, Paragraph, List } from 'react-native-paper';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Title>Tab Two</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

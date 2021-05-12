import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Card, Title, Paragraph, List } from 'react-native-paper';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Title>Tab One</Title>
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

import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Paragraph, TouchableRipple } from 'react-native-paper'
import type { MovieDetails } from '../lib/api'

type Props = {
  item: MovieDetails
  onPress: (item: MovieDetails) => void
}

export function ListItem({ item, onPress }: Props) {
  return (
    <TouchableRipple onPress={() => onPress(item)} accessibilityRole="button">
      <View style={styles.item}>
        <View style={styles.firstRow}>
          <Paragraph style={styles.title}>{item.title}</Paragraph>
        </View>
        <View style={styles.secondRow}>
          <Paragraph>{item.year}</Paragraph>
        </View>
      </View>
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingRight: 10,
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },
  firstRow: {
    marginTop: 5,
    marginBottom: 5,
  },
  secondRow: {
    marginBottom: 10,
  },
  title: { fontWeight: 'bold' },
})

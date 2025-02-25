import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/themeColors';

const MovieItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txt}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  txt: {
    color: ThemeColors.WHITE,
    fontSize:22,
    fontWeight:"bold"
  },
});

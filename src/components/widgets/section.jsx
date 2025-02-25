import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/themeColors';
import {useSelector} from 'react-redux';
import MoviesSitem from '../movies/moviesSitem';

const Section = ({item}) => {
  const {topRatedMovies, populerMovies,nowPlaying} = useSelector(state => state.movies);

  const setData = () => {
    switch (item.id) {
      case 1:
        return topRatedMovies;
      case 2:
        return populerMovies;
      case 3:
        return nowPlaying;
      default:
        return topRatedMovies;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title} </Text>
      <FlatList
        horizontal
        data={setData()}
        renderItem={({item}) => <MoviesSitem item={item} />}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 21,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 20,
  },
});

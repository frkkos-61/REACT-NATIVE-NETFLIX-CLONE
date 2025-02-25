import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getNowPlaying,
  getPopulerMovies,
  getTopRatedMovies,
} from '../../store/actions/movieActions';
import MovieItem from '../../components/widgets/movieItem';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/sections';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopRatedMovies());
    dispatch(getPopulerMovies());
    dispatch(getNowPlaying())
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <Sections />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

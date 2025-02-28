import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../store/actions/movieActions';
import MovieItem from '../components/widgets/movieItem';

const Categories = () => {
  const {categories} = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </View>
  );
};

export default Categories;

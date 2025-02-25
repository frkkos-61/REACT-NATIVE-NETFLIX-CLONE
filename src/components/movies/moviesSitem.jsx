import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGE_BASE_URL} from '../../service/url';
import {height, width} from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { MOVIESDETAIL } from '../../utils/routes';

const MoviesSitem = ({item}) => {
  const navigation = useNavigation()
  return (
    <Pressable 
    onPress={()=>navigation.navigate(MOVIESDETAIL,{movieId:item.id})}
    style={styles.container}>
      <Image
        source={{uri: IMAGE_BASE_URL + item?.poster_path}}
        style={{
          width: width * 0.2,
          height: height * 0.2,
          borderRadius: 5,
          resizeMode:"cover"
        }}
      />
    </Pressable>
  );
};

export default MoviesSitem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
});

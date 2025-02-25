import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieData} from '../../store/actions/movieActions';
import {ThemeColors} from '../../theme/themeColors';
import {IMAGE_BASE_URL} from '../../service/url';
import {height, width} from '../../utils/constants';

const MoviesDetail = ({route}) => {
  const {movieId} = route?.params;
  const dispatch = useDispatch();
  const {pendingDetailData, moviesDetailData} = useSelector(
    state => state.movies,
  );
  useEffect(() => {
    dispatch(
      getMovieData({
        movieId: movieId,
      }),
    );
  }, []);
  return (
    <View style={defaultScreenStyle.detailScreen}>
      {pendingDetailData ? (
        <View style={styles.container}>
          <ActivityIndicator color={ThemeColors.WHITE} size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <Image
            source={{uri: IMAGE_BASE_URL + moviesDetailData?.poster_path}}
            style={{
              width: width,
              height: height * 0.6,
              resizeMode: 'cover',
            }}
          />
          <View style={styles.average}>
            <Text style={{fontWeight:"bold"}}>{moviesDetailData.vote_average.toFixed(1)} </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{moviesDetailData.original_title}</Text>

            <Text style={styles.tagline}>{moviesDetailData.tagline} </Text>

            <Text style={styles.desc}>{moviesDetailData.overview} </Text>
            <Text style={styles.language}>Language : </Text>
            {moviesDetailData.spoken_languages.map((item, index) => (
              <Text style={styles.map} key={index}>{item.name}</Text>
            ))}
             <Text style={styles.language}>Production Countries </Text>
            {moviesDetailData.production_countries.map((item, index) => (
              <Text style={styles.countries} key={index}>{item.name}</Text>
            ))}
             <Text style={styles.language}>Genres </Text>
            {moviesDetailData.genres.map((item, index) => (
              <Text style={styles.countries} key={index}>{item.name}</Text>
            ))}
             
            
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MoviesDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ThemeColors.WHITE,
  },
  info: {
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom:40
  },
  desc: {
    fontSize: 18,
    color: ThemeColors.WHITE,
    marginTop: 12,
  },
  tagline: {
    fontSize: 18,
    color: ThemeColors.COLOR4,
    marginTop: 12,
  },
  language: {
    color: ThemeColors.RED,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    marginVertical: 20,
  },
  map : {
    fontSize:18,
    fontWeight:"bold",
    color:ThemeColors.WHITE,
    paddingHorizontal:5
  },
  countries:{
    fontSize:18,
    color:ThemeColors.WHITE,
    fontWeight:"bold"
  },
  average:{
    position:"absolute"
,
width:50,
height:50,
borderRadius:100,
right:30,
top:60,
backgroundColor:ThemeColors.COLOR4,
justifyContent:"center",
alignItems:"center"

}
});

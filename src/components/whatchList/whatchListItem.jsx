import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Smileys} from 'iconsax-react-native';
import {ThemeColors} from '../../theme/themeColors';
import {getRandomColor} from '../../utils/functions';
import {width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWLIST, TAB} from '../../utils/routes';

const WhatchListItem = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable 
    onPress={()=>navigation.replace(TAB)}
    
    style={styles.container}>
      <View
        style={[styles.imageCont, {backgroundColor: getRandomColor(index)}]}>
        <Image
          source={require('../../assets/images/smile.png')}
          style={{
            width: width * 0.25,
            height: width * 0.25,
            resizeMode: 'contain',
          }}
        />
      </View>

      <Text style={styles.title}>{item.title} </Text>
    </Pressable>
  );
};

export default WhatchListItem;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  imageCont: {
    width: width * 0.33,
    height: width * 0.33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});

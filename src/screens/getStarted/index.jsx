import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/themeColors';
import Button from '../../components/ui/button';
import { WATCHLIST } from '../../utils/routes';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 5}}>
        <Image
          source={require('../../assets/images/welcomeImage.png')}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
          }}
        />
        <View style={styles.containerTxt}>
          <Text style={styles.txt}>Unlimtied entertainment, one low price</Text>
          <Text style={styles.txttwo}>
            All of Netflix, starting at just &149.
          </Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <Button onPress={()=>navigation.navigate(WATCHLIST)} title="GET STARTED" />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTxt: {
    width: '100%',
    height: '15%',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'absolute',
    padding: 5,
    justifyContent: 'space-between',
  },

  txt: {
    fontSize: 28,
    color: ThemeColors.WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  txttwo: {
    fontSize: 18,
    color: ThemeColors.WHITE,
    textAlign: 'center',
    fontWeight: '400',
  },
  containerBottom: {
    flex: 1,
    backgroundColor: ThemeColors.BLACK,
    justifyContent: 'center',
  },
});

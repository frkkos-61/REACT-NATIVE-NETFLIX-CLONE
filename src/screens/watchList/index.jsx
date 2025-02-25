import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import WhatchListItem from '../../components/whatchList/whatchListItem';
import {ThemeColors} from '../../theme/themeColors';
import { height } from '../../utils/constants';

const WatchList = () => {
  const {watchList} = useSelector(state => state.watchList);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              color: ThemeColors.WHITE,
              fontSize: 30,
              textAlign: 'center',
              marginVertical: height*0.05,
            }}>
            Who's Watching ? 
          </Text>
        }
        numColumns={2}
        data={watchList}
        renderItem={({item, index}) => (
          <WhatchListItem item={item} index={index} />
        )}
      />
    </View>
  );
};

export default WatchList;

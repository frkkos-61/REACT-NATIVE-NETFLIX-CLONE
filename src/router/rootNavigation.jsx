import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GetStarted from '../screens/getStarted';
import {
  ADDNEWLIST,
  GETSTARTED,
  MOVIESDETAIL,
  SIGNIN,
  TAB,
  WATCHLIST,
} from '../utils/routes';
import SignIn from '../screens/signIn';
import WatchList from '../screens/watchList';
import Header from '../components/routerComponents/header';
import {ThemeColors} from '../theme/themeColors';
import {Edit2} from 'iconsax-react-native';
import AddNewList from '../screens/watchList/addNewList';
import TabNavigator from './tabNavigation';
import MoviesDetail from '../screens/movies/moviesDetail';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTintColor: ThemeColors.WHITE,
        headerStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
      })}>
      <Stack.Screen
        options={{headerShown: false}}
        name={GETSTARTED}
        component={GetStarted}
      />
      <Stack.Screen name={SIGNIN} component={SignIn} />

      <Stack.Screen
        options={({navigation}) => ({
          headerRight: () => (
            <Edit2
              onPress={() => navigation.navigate(ADDNEWLIST)}
              size="28"
              color={ThemeColors.WHITE}
            />
          ),
        })}
        name={WATCHLIST}
        component={WatchList}
      />

      <Stack.Screen name={ADDNEWLIST} component={AddNewList} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={MOVIESDETAIL}
        component={MoviesDetail}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;

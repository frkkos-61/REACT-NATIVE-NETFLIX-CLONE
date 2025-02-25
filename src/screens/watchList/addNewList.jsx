import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux';
import { addNewList } from '../../store/slice/watchListSlice'
import { NewListSchema } from '../../utils/validationScemas'
import { ThemeColors } from '../../theme/themeColors'
import { height } from '../../utils/constants'



const AddNewList = () => {
    const dispatch = useDispatch();
    return (
      <View style={defaultScreenStyle.container}>
        <Formik
          initialValues={{
            id: Date.now(),
            title: '',
          }}
          validationSchema={NewListSchema}
          onSubmit={values => dispatch(addNewList(values))}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <ScrollView>
              <View style={{marginVertical: 'auto'}}>
                <Text
                  style={{
                    color: ThemeColors.WHITE,
                    fontSize: 30,
                    textAlign: 'center',
                    marginVertical: 10,
                  }}>
                  Ready to watch?
                </Text>
                <Text
                  style={{
                    color: ThemeColors.WHITE,
                    fontSize: 18,
                    textAlign: 'center',
                    marginVertical: 10,
                  }}>
                  Create Your List or Choose What to Watch!
                </Text>
              </View>
              <Input
                error={errors.title}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.name}
                title="Whatch List Name"
              />
  
              <View style={{marginTop: height * 0.09}}>
                <Button onPress={handleSubmit} title="Create" status="success" />
              </View>
            </ScrollView>
          )}
        </Formik>
      </View>
    );
  };

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50',
    },
  });
  
  //make this component available to the app
  export default AddNewList;
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { sections } from '../utils/constants'
import Section from '../components/widgets/section'


const Sections = ({item}) => {
  
  return (
    <View style={styles.container}>
     <FlatList 
     
     data={sections}
     renderItem={({item})=><Section item={item}/>}/>
    </View>
  )
}

export default Sections

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
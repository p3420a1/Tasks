import FacePile from './FacePile'
import React from 'react'
import {View, StyleSheet,Text, Alert} from 'react-native'

var faces = []

function Faces (props) {
    let data = props.list
    data = data.filter((item) => item.isSelected === true).map(({id, poster}) => ({id, poster}));
    faces = {
      list: data
    }
    return(
        <View style = {styles.container}>
            {console.log(faces.list)}
            <FacePile numFaces={faces.list.length >= 3 ? 3 : faces.list.length} faces={faces.list} circleSize={30}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginLeft: 20
    },
  });

export default Faces
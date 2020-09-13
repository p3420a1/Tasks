import { range, size } from "lodash";
import { Text, Thumbnail } from "native-base";
import React from "react";
import { View , StyleSheet} from "react-native";
import defaultProfilePic from "../../assets/images/donald.jpg"
import {colors} from '../../utils/colors'

const FacePile = (props) => {
  const { numFaces, faces } = props;
  let thumbNails = [];

  const exceedingFaces = size(faces) - numFaces;
  // console.log("Pile: " + faces + "Size: " + faces.length)


  range(numFaces).forEach((index) => {  
    const image = faces[index].poster;
    thumbNails.push(
      <Thumbnail key={index} source={image ? { uri: image } : defaultProfilePic} style={styles.profilePic} />
    );
  });
  return (
    <React.Fragment>
      {thumbNails}
      {exceedingFaces > 0 && (
        <View style={styles.circle}>
          <Text style={styles.circleText}>+{exceedingFaces}</Text>
        </View>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: colors.primaryPurple,
    borderRadius: 50 / 2,
    height: 50,
    left: 5,
    marginLeft: -15,
    width: 50,
  },
  circleText: {
    color: "white",
    fontSize: 25,
    left: 5,
    top: 5
  },
  profilePic: {
    height: 50,
    left: 5,
    marginLeft: -15,
    width: 50,
    borderWidth: 1,
    borderColor: colors.primaryPurple
  }
});


export default FacePile;
import React from 'react'
import { View, Text, StyleSheet,Image, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../utils/colors';
import { Scaling } from '../utils/scaling';

function EmployeeRowItem (props) {
    return (          
          <TouchableOpacity style = {styles.container} onPress = {() => props.onEmployeeClick(props.employee)}>
              <Image 
                style = {styles.image}
                source={{uri: props.employee.poster}} resizeMode = 'contain'/>
                {props.employee.isSelected ? (
                  <View style={styles.circle}>
                    <Icon
                      // style={styles.icon1}
                      name='check'
                      color={colors.primaryWhite}
                      size={10}
                    />
                  </View>
                ) : (<View></View>)} 
              <View>
                <Text style = {styles.headerText}>{props.employee.name}</Text>
                <Text style = {styles.descText}>{props.employee.desc}</Text>
              </View>
          </TouchableOpacity>
      )
    }
    
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    // justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 0.15
  },
  headerText: {
    color: colors.primaryBlack,
    fontWeight: 'bold',
    fontSize: 16,
  },
  descText: {
    color: colors.fontGreyColor,
    fontSize: 14,
  },
  image: {
    height: Scaling.horizontal(75),
    width: Scaling.horizontal(75),
    borderRadius: Scaling.horizontal(100)/4,
    margin: 5
  },
  circle: {
    width: Scaling.horizontal(20),
    height: Scaling.horizontal(20),
    borderRadius: Scaling.horizontal(20) / 2,
    backgroundColor: colors.primaryPurple,
    borderColor: colors.primaryWhite,
    borderWidth: 1,
    position: 'absolute',
    top: Scaling.vertical(60),
    left: Scaling.horizontal(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
    
export default EmployeeRowItem
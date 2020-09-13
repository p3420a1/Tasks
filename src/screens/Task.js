import React from 'react'
import {View , Text, StyleSheet} from 'react-native'
import HIcon from 'react-native-vector-icons/SimpleLineIcons'
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleIcons from 'react-native-vector-icons/Entypo';
import Faces from '../components/FacePile/Faces'
import TouchButton from '../components/TouchButton'
import {colors} from '../utils/colors'
import { SafeAreaView } from 'react-navigation'
import Moment from 'moment'
import { CommonActions } from '@react-navigation/native';
import Employees from '../utils/EmployeeData'
import InitialState from '../utils/InitialState'

export default class Task extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.navigation.setOptions({
          title: this.props.route.params.title,
          headerRight: () => (<HIcon name = 'options-vertical' size = {20} color = 'white' style = {{paddingRight: 20}}/>)
        })
      } 

      onClose(){
          this.props.navigation.navigate('Home', {state: InitialState})
      }
    
    render(){
        return(
            <SafeAreaView style = {styles.flex}>
                <View style = {styles.container}>
                <Text style = {styles.text}>{this.props.route.params.title}</Text>
                <Text style = {styles.text}> Assignees </Text>
                <View style = {styles.assignEmployeeContainer}> 
                        <Faces list = {this.props.route.params.list}/>
                </View>
                <View style = {styles.calendarContainer}>
                    <Icon style={styles.icon} name="calendar" color={colors.light_grey} size={20}/>
                    <Text style = {{fontSize: 15}}>{Moment(this.props.route.params.date).format('DD.MM.yyyy')}</Text>
                </View>
                <Text style = {styles.text}>Description</Text>
                <View style = {styles.calendarContainer}>
                    <Text>{this.props.route.params.desc}</Text>
                </View>
                <Text style = {styles.text}>Attachment</Text>
                {this.props.route.params.docName === '' ? 
                (<View>No attachment</View>) 
                : 
                (<View style = {[styles.assignEmployeeContainer , {
                                        borderWidth: 0.5,
                                        borderColor: colors.greyLinesColor,
                                        borderRadius: 5,
                                        paddingVertical: 5,margin: 10}]}>
                    <View style = {{flexDirection: 'row'}}>
                    <SimpleIcons
                    name="attachment"
                    style={{marginTop: 2, marginRight: 5}}
                    color={colors.primaryBlack}
                    size={20}
                    />  
                    <Text style={{fontSize: 18, color: 'grey'}}>{this.props.route.params.docName}</Text>
                    </View>                    
                </View>
                )}
                </View> 
                <View >
                    <TouchButton disabled = {false} onPress = {this.onClose.bind(this)}>Close Task</TouchButton>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: colors.primaryWhite,
        justifyContent: 'space-between',
    },
    container: {
        justifyContent: 'space-evenly',
    },
    text: {
        fontWeight: 'bold',
        margin: 10,
        fontSize: 18,
        color: colors.primaryBlack
    },
    assignText: {
        // fontWeight: 'bold',
        // margin: 10,
        // fontSize: 20,
        color: colors.primaryPurple
    },
    inputText:{
        width: '90%',
        backgroundColor: colors.primaryWhite,
        alignSelf: 'center'
    },
    calendarContainer: {
        flexDirection: 'row',
        // justifyContent: ,
        alignItems: 'center',
        backgroundColor: colors.primaryWhite,
        margin: 10,
        marginVertical: 20
    },
    assignEmployeeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primaryWhite,
    },
    assignContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.primaryWhite,
        margin: 10,
    },
    icon: {
        paddingRight: 5,
        color: colors.greyLinesColor,
    },
    count: {
        color: colors.greyLinesColor,
        paddingRight: 5,
        alignSelf: 'flex-end'
    }
})
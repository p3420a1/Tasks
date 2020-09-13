import React from 'react'
import {View, StyleSheet, StatusBar, Text, SafeAreaView, TouchableOpacity, Image, Keyboard} from 'react-native'
import {colors} from '../utils/colors'
import PickDate from '../components/Calendar/PickDate'
import Dialog, {DialogContent } from 'react-native-popup-dialog';
import { TextInput } from 'react-native-paper';
import TouchButton from '../components/TouchButton';
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleIcons from 'react-native-vector-icons/Entypo';
import Moment from 'moment'
import DocumentPick from '../components/DocumentPick';
import Employees from '../utils/EmployeeData'
import Faces from '../components/FacePile/Faces';
import { InitialState } from '../utils/InitialState';

var employeeList = []
export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = InitialState        
        this.state.allEmployees.forEach(item => Image.prefetch(item.poster));
    }

    componentDidMount(){
        console.log("Home Mounted")
        this.state = InitialState
    }

    showDialog = () => {
        Keyboard.dismiss()
        this.setState({ dialogVisible: true })
    }
     
    hideDialog = () => {
        this.setState({ dialogVisible: false })
    }

    handleDatePicked(props){
        this.setState({selectedDate: props, dialogVisible: false}, function(){console.log(JSON.stringify(this.state))})
    }

    handleEmployeesClicked(){
        employeeList = this.state.allEmployees.filter(employee => employee.isSelected === true)
        this.setState({employeeList: employeeList})
    }

    onCreateTask(){
        this.props.navigation.navigate('Task', {title: this.state.Title, list: this.state.employeeList, date: this.state.selectedDate, desc: this.state.desc, docName: this.state.docName})
    }

    render(){
        return(
            <SafeAreaView style = {styles.flex}>
                {/* <Text>{JSON.stringify(this.state.employeeList)}</Text> */}
              <StatusBar barStyle = 'light-content' translucent = {false} animated = {true} backgroundColor= {colors.primaryPurple}/>
              <View style = {styles.container}>
                <Text style = {styles.text}>Summary</Text>
                <View style = {styles.calendarContainer}>
                    <TextInput style = {[styles.inputText, {height: '8%', width: '100%'}]} 
                        placeholder = 'Title' 
                        value = {this.state.Title}
                        placeholderTextColor = {colors.fontGreyColor} 
                        underlineColor = {colors.primaryWhite}
                        onChangeText = {(value) => {this.setState({Title: value})}}
                        />
                </View>
                <TouchableOpacity style = {[styles.calendarContainer, {flexDirection: 'row'}]} onPress = {this.showDialog}>
                    <TextInput style = {[styles.inputText, {height: '8%'}]} disabled={true} 
                        placeholder = 'Due Date'
                        value = {this.state.selectedDate === '' ? '' : Moment(this.state.selectedDate).format('DD.MM.yyyy')}
                        placeholderTextColor = {colors.greyLinesColor} 
                        underlineColor = {colors.primaryWhite} />
                    <Icon style={styles.icon} name="calendar" color={colors.light_grey} size={20} onPress = {this.showDialog}/>
                </TouchableOpacity>
                {this.state.employeeList.length === 0 ? 
                    (<View style = {styles.assignEmployeeContainer}>
                        <Text style = {styles.text}>Employee</Text>
                        <TouchableOpacity style = {styles.assignContainer} 
                                onPress = {() => this.props.navigation.navigate('AssignEmployee', {callback: this.handleEmployeesClicked.bind(this), allEmployees: this.state.allEmployees})}>
                            <Text style = {[styles.assignText, {fontSize: 30}]}>+</Text>
                            <Text style = {[styles.assignText, {fontSize: 20}]}>Assign</Text>
                        </TouchableOpacity>
                    </View>)
                   :  
                    (<View style = {styles.assignEmployeeContainer}> 
                        <Faces list = {this.state.employeeList}/>
                        {/* <Text>{JSON.stringify(this.state.employeeList)}</Text> */}
                    </View>)}
                <Text style = {styles.text}>Description</Text>
                <View style = {[styles.calendarContainer, {flexDirection: 'column'}]}>
                    <TextInput
                        multiline = {true}
                        placeholder = "Enter Description" 
                        maxLength = {500} 
                        scrollEnabled = {false}
                        textAlignVertical = 'top'
                        height = {200}
                        width = {390}
                        underlineColor = {colors.primaryWhite}
                        backgroundColor = 'white'
                        placeholderTextColor = {colors.greyLinesColor}
                        style = {styles.inputText, {height: '25%', flexDirection: 'column', textAlign: 'left'}}
                        value = {this.state.desc}
                        onChangeText = {(value) => {
                            this.setState({desc: value}, function(){})
                        }}>
                    </TextInput>
                        <Text style = {styles.count}>{this.state.desc.length}/500</Text>
                </View>
                <DocumentPick callback = {(name) => this.setState({docName: name})}/>
                {this.state.docName === '' ? 
                (<View></View>) 
                : 
                (<View style = {[styles.assignEmployeeContainer , {margin: 10}]}>
                    <View style = {{flexDirection: 'row'}}>
                    <SimpleIcons
                    name="attachment"
                    style={{marginTop: 2, marginRight: 5}}
                    color={colors.primaryBlack}
                    size={20}
                    />
                    
                    <Text style={{fontSize: 18, color: 'grey'}}>{this.state.docName}</Text>
                    </View>
                    <Icon
                        name="delete"
                        color="red"
                        size={20}
                    />
                    
                </View>
                )}
                </View> 
                <View >
                    <TouchButton disabled = {this.state.Title === '' && this.state.selectedDate === '' && this.state.employeeList.length === 0} 
                            onPress = {this.onCreateTask.bind(this)}>Create Task</TouchButton>
                </View>
                <Dialog
                    height = '60%'
                    visible={this.state.dialogVisible}
                    onTouchOutside={() => {this.setState({ dialogVisible: false })}}>
                    <DialogContent >
                        <PickDate handler = {this.handleDatePicked.bind(this)}/>
                    </DialogContent>
                </Dialog>    
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
        // fontWeight: 'bold',
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
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primaryWhite,
        borderWidth: 0.5,
        borderColor: colors.greyLinesColor,
        borderRadius: 5,
        margin: 10,
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
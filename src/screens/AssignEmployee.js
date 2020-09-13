import React from 'react'
import {View, StyleSheet, StatusBar, Text, SafeAreaView, Alert, Button, TouchableOpacity, FlatList} from 'react-native'
import {colors} from '../utils/colors'
import EmployeeRowItem from '../components/EmployeeRowItem'
import {Searchbar} from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import TouchButton from '../components/TouchButton'

var poster = ''
var employees = []
export default class AssignEmployee extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            employeeList: '',
            allEmployees: this.props.route.params.allEmployees,
            searchString: ''
        }
    }

    onChangeSearch = query => this.setState({searchString: query});
    onEmployeeClick(item){
        item.isSelected = !item.isSelected
        employees.push(item)
        employees = employees.filter(employee => employee.isSelected === true)
        this.setState({employeeList: employees})
        this.props.route.params.callback(employees)
    }
    render(){
        return(
            <SafeAreaView style = {styles.flex}>
                {/* <Text>{JSON.stringify(this.state.employeeList)}</Text> */}
                <StatusBar barStyle = 'light-content' translucent = {false} animated = {true} backgroundColor= {colors.primaryPurple}/>
                <View style = {styles.container}>
                    <Searchbar
                        placeholder="Search Members"
                        iconColor = {colors.greyLinesColor}
                        placeholderTextColor = {Colors.greyLinesColor}
                        style = {styles.search}
                        onChangeText={this.onChangeSearch.bind(this)}
                        value={this.state.searchString}
                        />
                    <FlatList 
                        data = {this.props.route.params.allEmployees}
                        keyExtractor = {item => item.id.toString()}
                        renderItem = {({item}) => (
                            <EmployeeRowItem
                                employee = {item}
                                employeeList = {this.state.employeeList}
                                onEmployeeClick = {this.onEmployeeClick.bind(this)}/>
                        )}
                    />
                <TouchButton disabled = {this.state.employeeList.length === 0}
                    onPress = { () =>
                        this.props.navigation.navigate("Home", {employeeList: this.state.employeeList})
                    }>Assign</TouchButton>
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
    search: {
        flexDirection: 'row-reverse',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '90%',
        borderRadius: 5,
        marginVertical: 20,
        borderColor: colors.greyLinesColor,
        borderWidth:0.5,
        marginHorizontal: 10,
      },
})
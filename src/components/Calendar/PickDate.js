import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Moment from 'moment';
import { colors } from '../../utils/colors';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TouchButton from '../TouchButton'

class PickDate extends React.Component {
    // const [selectedDate, setSelectedDate] = useState('')
    constructor(){
        super()
        this.state = {
            selectedDate: ''
        }
    }

    handleApply(){
        this.props.handler(this.state.selectedDate.dateString)
    }
    render(){
    return(
        <View style = {styles.container}>
                <Text style = {styles.headerText}> Selected: {this.state.selectedDate.dateString} </Text>
                <Calendar
                    onDayPress={(date) => {this.setState({selectedDate: date}, () => {console.log(this.state.selectedDate.dateString)})}}
                    enableSwipeMonths = {true}
                    style={styles.Calendar}
                    markingType = "custom"
                    markedDates = {{[this.state.selectedDate.dateString]: {selected: true, marked: true}}}
                    theme={{
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: colors.primaryPurple,
                        selectedDayTextColor: colors.primaryWhite,
                        todayTextColor: colors.primaryPurple,
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: colors.primaryPurple,
                        arrowColor: colors.primaryPurple,
                        monthTextColor: colors.primaryBlack,
                        indicatorColor: colors.primaryPurple,
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}/>
                <TouchButton 
                    onPress = {this.handleApply.bind(this)}
                    disabled = {this.state.selectedDate === ''}>
                    Apply
                </TouchButton>
        </View>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center'
    },  
    Calendar: {
        // margin: 10,
        height: 350,
    },
    headerText: {
        color: colors.primaryBlack,
        backgroundColor: colors.primaryWhite,
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 20
    }
})

export default PickDate
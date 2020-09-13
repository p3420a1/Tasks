import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import SimpleIcons from 'react-native-vector-icons/Entypo';
import {colors} from '../utils/colors'

export default class DocumentPick extends React.Component {
  constructor(props) {
    super(props);
    //Initialization of the state to store the selected file related attribute
    this.state = {
      singleFile: '',
    };
  }
  async selectOneFile() {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      // console.log('res : ' + JSON.stringify(res));
      // console.log('URI : ' + res.uri);
      // console.log('Type : ' + res.type);
      // console.log('File Name : ' + res.name);
      // console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      this.setState({ singleFile: res });
      this.props.callback(this.state.singleFile.name ? this.state.singleFile.name : '')
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style = {styles.assignEmployeeContainer}>
                    <Text style = {styles.text}>Attachment</Text>
                    <View style = {styles.assignContainer}>
                        <SimpleIcons name="attachment" style={{marginTop: 2}} color={colors.primaryPurple} size={20} onPress = {this.selectOneFile.bind(this)}/>
                        <TouchableOpacity onPress = {this.selectOneFile.bind(this)}><Text style = {[styles.assignText, {fontSize: 20}]}>Add</Text></TouchableOpacity>
                    </View>
                </View>
      </View>
    );
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
    flexDirection: 'row',
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
});
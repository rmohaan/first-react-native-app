import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  ListView,
  TouchableHighlight } from 'react-native';

import CustomListView from './listView';

const pcp = [
{"firstName": "Deborah", "lastName": "Wong", "title": "MD"},
{"col1": "Facility", "col2": "Name", "col3": "Leaked Revenue"},
{
  "leakedRevenue": "73514.5914",
  "facility": {
    "facilityName": "Doctors Medical Center Of Modesto"
  }
},
{
  "leakedRevenue": "149271.6271",
  "facility": {
    "facilityName": "Modesto Radiology Imaging"
  }
},
{
  "leakedRevenue": "8609.4388",
  "facility": {
    "facilityName": "Modesto Radiology Imaging"
  }
},
{
  "leakedRevenue": "39295.5369",
  "facility": {
    "facilityName": "Modesto Radiology Imaging"
  }
},
{
  "leakedRevenue": "3440.9442",
  "facility": {
    "facilityName": "Doctors Medical Center Of Modesto"
  }
},
{
  "leakedRevenue": "53666.5838",
  "facility": {
    "facilityName": "Modesto Radiology Imaging"
  }
},
{
  "leakedRevenue": "53666.5838",
  "facility": {
    "facilityName": "Modesto Radiology Imaging"
  }
},
{
  "leakedRevenue": "67098.6355",
  "facility": {
    "facilityName": "Modesto Radiology Imaging"
 },

}];


class App extends React.Component {
    constructor () {
      super();
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      });
      this.state = {
        dataSource: ds.cloneWithRows([])
      }
    }

  _handleButtonPress = () => {
    Alert.alert(
      'Fetching physicians...'
    );
    let physician = pcp.shift();
    const arr = this.state.dataSource.cloneWithRows(pcp);
    this.setState(() => ({
      firstName: physician.firstName,
      lastName: physician.lastName,
      title: physician.title,
      dataSource: arr,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
           source={{ uri: 'https://wiki.advisory.com/download/attachments/589826/atl.site.logo?version=2&modificationDate=1481339993607&api=v2' }}
           style={styles.img}
          />
          <Text style={styles.text}>
            The Advisory Board Company
          </Text>
      </View>
       <View style={styles.buttonWrapper}>
        <TouchableHighlight
            style = {styles.button}
            onPress={this._handleButtonPress}>
          <Text style={styles.buttonText}>Get PCP Share</Text>
        </TouchableHighlight>
      </View>
        <Text style={styles.physicianInfo}>
          {this.state.firstName}{this.state.firstName ? ',' : ''} {this.state.lastName} {this.state.title}
        </Text>
        <CustomListView dataSource={this.state.dataSource} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop: 25,
  },
  logo: {
    flexDirection: "row",
    backgroundColor: '#ddd',
  },
  text: {
    flex: 1,
    fontFamily: 'American Typewriter',
    fontSize: 18,
    textAlign: "center",
    alignSelf: "center"
  },
  img: {
    height: 50,
    width: 50,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    backgroundColor: '#337ab7',
    borderColor: "#2e6da4",
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 20,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
   fontFamily: 'American Typewriter',
   fontSize: 14,
   color: 'white'
  },
  physicianInfo: {
    color: '#A515F5',
    fontSize: 16,

  }

});

Expo.registerRootComponent(App);

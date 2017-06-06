import React, { Component } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {
   View,
   ListView,
   Text,
   StyleSheet
} from 'react-native';

function getIcon (name) {
  if (name){
    return name;
  }
  return (
    <FontAwesome name="hospital-o" size={32} color="green" />
  )
}

export default CustomListView = (props) => {
  console.log(props.dataSource);
   return (
      <View>
         <ListView
            style = {styles.listStyle}
            dataSource = {props.dataSource}
            enableEmptySections = {true}
            renderRow = {(rowData, sectionId) => (
                  <View style={styles.listContainer}>
                       <Text style={styles.listItem}>
                        {getIcon(rowData.col1)}
                       </Text>
                       <Text style={styles.listItem}>
                        {rowData.col2 || rowData.facility.facilityName}
                       </Text>
                       <Text style={styles.listItem}>
                        {rowData.col3 || rowData.leakedRevenue}
                       </Text>

                  </View>
               )}
         />
      </View>
   )
}

const styles = StyleSheet.create ({
   listContainer: {
    alignItems: 'center',
    padding: 8,
    width: 320,
    borderBottomWidth: 1.5,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    justifyContent: "space-between",
    flexDirection: 'row',
   },
   listItem: {
    flex: 1,
   }
})

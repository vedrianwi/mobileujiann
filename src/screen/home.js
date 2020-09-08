import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import Axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

class DataTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Axios.get('https://api.covid19api.com/summary')
      .then((res) => {
        console.log(res.data.Countries);
        this.setState({data: res.data.Countries});
      })
      .catch((err) => console.log(err));
  }

  dataInTable = () => {
    return this.state.data.map((item, index) => {
      return (
        <View>
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.Country}</DataTable.Cell>
            <DataTable.Cell>{item.NewConfirmed}</DataTable.Cell>
            <DataTable.Cell>{item.TotalConfirmed}</DataTable.Cell>
            <DataTable.Cell>{item.TotalDeaths}</DataTable.Cell>
            <DataTable.Cell>{item.TotalRecovered}</DataTable.Cell>
          </DataTable.Row>
        </View>
      );
    });
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Live Update Data</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Country</DataTable.Title>
            <DataTable.Title>New Case</DataTable.Title>
            <DataTable.Title>Total Case</DataTable.Title>
            <DataTable.Title>Death</DataTable.Title>
            <DataTable.Title>Recovered</DataTable.Title>
          </DataTable.Header>
        </DataTable>
        <ScrollView>{this.dataInTable()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});

export default DataTables;
import React from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

import {getData} from '../action'

 class globalScreen extends React.Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }

     componentDidMount(){
         this.props.getData()
     }

     render() { 
         return ( 
             <View>
                 <Text>Global Screen</Text>
             </View>
          );
     }
 }
  
const mapStateToProps = (state) => {
    return {
        data : state.coronaReducer.global
    }
}

 export default connect(mapStateToProps, {getData})(globalScreen);
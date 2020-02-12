import React from 'react';
import { 
  StyleSheet,Text, View, ImageBackground, Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import bgImage from '../images/bgImage.jpg';
import Note from './note';


const {width:WIDTH} = Dimensions.get('window');
const apiUrl = 'https://vitcommerce-back-end.herokuapp.com';

export default class HomePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            noteArray:[],
            noteText:''

        }
    }



  

    addNote = () => {
        if(this.state.noteText.trim() === ""){
            return;
        }
        this.setState({noteArray:[...this.state.noteArray,this.state.noteText]});
        this.setState({noteText:''});
        
    }

    deleteNode = (data) =>{

        let newArr = this.state.noteArray.filter(res=>{
            return res!=data;
        })

        this.setState({noteArray:newArr})

    }



 


  render(){
    return (
    <View style={styles.container}>
     <View style={styles.header}>
         <Text style={styles.headerText}> - NOTES - </Text>
     </View>

     <ScrollView style={styles.scrollContainer}>

         {
             this.state.noteArray.length ?
             this.state.noteArray.map((data,i)=>(
                 <Note date={Date()} note={data} keyVal={i}
                 deleteMethod ={()=>this.deleteNode(data)}
                  />

             )):<Text></Text>


         }

     </ScrollView>


     <View style={styles.footer}>
         <TextInput style={styles.textInput} onChangeText={(text)=>this.setState({noteText:text})} value={this.state.noteText} placeholder=">" placeholderTextColor="#fff"  underlineColorAndroid="transparent">

         </TextInput>

     </View>

     <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
         <Text style={styles.addButtonText}>+</Text>
     </TouchableOpacity>
     </View>

    )
  }
}
const styles = StyleSheet.create({
 container:{
     flex:1
 },
 header:{
     backgroundColor:'#E91E63',
     alignItems:'center',
     justifyContent:'center',
     borderBottomWidth:10,
     borderBottomColor:'#ddd'
 },

 headerText:{
     color:'white',
     fontSize:18,
     padding:26
 },
 scrollContainer:{
     flex:1,
    
     marginTop:20
 },
 footer:{
     position:'absolute',
     top:50,
     left:0,
     right:0,
     zIndex:10
 },

 textInput:{
     alignSelf:'stretch',
     color:'#fff',
     padding:20,
     backgroundColor:'#252525',
     borderTopWidth:2,
     borderTopColor:'#ededed'
 },

 addButton:{
     position:'absolute',
     zIndex:11,
     right:20,
     bottom:20,
     backgroundColor:'#E91E63',
     width:90,
     height:90,
     borderRadius:50,
     alignItems:'center',
     justifyContent:'center',
     elevation:8
 },
 addButtonText:{
     color:'#fff',
     fontSize:24
 }
  

});

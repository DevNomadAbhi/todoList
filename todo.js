
simple crud app in react native 

show list of all tasks
add task to list
view single task screen
delete task from list


import  React,{useState,} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local file

export default function App() {
const [task,setTask]=useState()
const [taskLst,setTaskLst]=useState([])

const goTOAddList=(val)=>{
  if(!task){
    alert('Please add task')
  }
  else
{  setTaskLst([...taskLst,task])
setTask(null)
  
  
}}

const deleteTask=(indexDel)=>{
  setTaskLst(taskLst.filter((val,index)=>index!==indexDel))
}


  return (
    <View style={styles.container}>
    <TextInput
    placeholder='Add Task'
    placeholderTextColor={'#eee'}
    style={styles.textInp}
    value={task}
    onChangeText={val=>setTask(val)}
    multiline
    
    />

    <TouchableOpacity style={styles.add} onPress={()=>goTOAddList()} >
    <Text style={{color:'#EFEEF5'}}>ADD</Text>
    </TouchableOpacity>
{ taskLst.length===0?'':  <Text style={{marginTop:15,fontSize:20}}>List of Tasks :</Text>}

    <ScrollView>
    {taskLst.map((value,index)=>{
      return(
        <View key={index} style={{marginTop:20,}}>
        <View style={styles.tsklst}>
        
  <Text style={{fontSize:20,color:'#eee'}}>{index+1}. {value}</Text>
                <TouchableOpacity onPress={() => deleteTask(index)}>
                <Text style={{fontSize:20,color:'#eee'}}> X </Text>
                   
                </TouchableOpacity>
                </View>
        
        </View>
      )
    })}
    
    </ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#7DB8C4',
     },
     textInp:{marginTop:40,borderBottomWidth:2,borderBottomColor:'#FFFFFF',
     color:'#FFFFFF'},

     tsklst:{flexDirection:'row',alignItems:'center',backgroundColor:'#344FA1',height:45,justifyContent:'space-between',padding:5,borderRadius:5,
     shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: .7,  
    shadowRadius: 4,},

    add:{width:'100%',height:45,fontWeight:'bold',borderRadius:10,borderColor:'#EFEEF5',borderWidth:1.5,marginTop:15,justifyContent:'center',alignItems:'center',  shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.8,  
    shadowRadius: 4,  }
 
});

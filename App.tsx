
import React,{useEffect, useState} from 'react';
import {View,Text} from 'react-native';
const App=()=>{
  const[data,setData]=useState([]);
  const getApiData= async()=>{
    const url="http://10.0.2.2:3000/users";
    let response=await fetch(url);
    const result=await response.json();
    //console.warn(result);
    setData(result);


  }
  useEffect(()=>{
    getApiData();
  })
  return(
    <View> 
      <Text style={{fontSize:20}}>Call Json server</Text>
      {
        data.length ?
        data.map((item)=><View style={{borderWidth:1,borderColor:'red'}} key={item.id}>  
              <Text style={{fontSize:20}}>{item.name}</Text>
              <Text style={{fontSize:20}}>{item.age}</Text>
              <Text style={{fontSize:20}}>{item.email}</Text>
              </View>)
        :null
      }
       </View>
  )
}
export default App;

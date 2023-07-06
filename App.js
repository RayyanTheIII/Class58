import React,{Component} from 'react'
import {Text , Button , View} from 'react-native'

export default class App extends Component{

render(){
return( 

  <View style= {{marginTop: 25}}>
        <Button title= 'Charles Babbage' color = 'red'
        onPress ={()=> alert('Father of Computers')}></Button>

<View style= {{marginTop: 65}}>
        <Button title= 'Mahatma Gandhi' color = 'blue'
        onPress ={()=> alert('Father of the Nation')}></Button>
      
       <View style= {{marginTop: 65}}>
        <Button title= 'Nelson Mandela' color = 'purple'
        onPress ={()=> alert('Former President of South Africa')}></Button>
      
        <View style= {{marginTop: 65}}>
        <Button title= 'Mother Teresa' color = 'green'
        onPress ={()=> alert('Saint Teresa of Calcutta')}></Button>
        </View>
        </View>
        </View>
        </View>
     
      
)


}
 
}

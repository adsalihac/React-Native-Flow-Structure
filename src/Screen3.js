// @flow

// Basic Class Structure with State 

// import { Text, View } from 'react-native'
// import React, { Component } from 'react'
// import type {Node} from 'react';
// import {type} from "os";


// type PropsType = {
//     name: string,
//     num? : number,
//     arr : Array<number>,
// }


// type StateType = {
//     message: string,
// }

// class TestComp extends Component<PropsType,StateType>  {
    
//     state = {
//         message : 'hi , friends',
//     }

//     static defaultPropsType = {
//         name: 'Saaa',
//     }
    
//     render() : Node {
//         return (
//           <View>
//            <Text>{this.state.message}</Text>
//             <Text>{this.props.name}</Text>
//             {/* <Text>{this.props.num}</Text> */}
//             {this.props.arr.map(item=>{
//                 return <Text>{item}</Text>
//             })}
            
//           </View>
//         )
//       }
// }

// export class Screen3 extends Component<{}> {
//   render() : Node {
//     return (
//       <View>
//         <TestComp name={"Hello , This is State Type in Class"}  arr={[1,2,3,4,5]} />
//       </View>
//     )
//   }
// }

// export default Screen3


import { Text, View } from 'react-native'
import React, { useState } from 'react'
import type {Node} from 'react';


type PropsType = {
    name: string,
    num? : number,
    arr : Array<number>,
}


type StateType = {
    message: string,
}

const TestComp = (props: PropsType , state : StateType ) : Node => {

    const [message, setmessage] = useState("hi , friends");
   
    return (
        <View>
          <Text>{message}</Text>
            <Text>{props.name}</Text>
            {/* <Text>{props.num}</Text> */}
            {props.arr.map(item=>{
                return <Text>{item}</Text>
            })}
        </View>
    )
}

const Screen3 = ({} : {}) : Node => {
  return (
    <View>
      <TestComp name={"Hello , This is Props Type in Class"}  arr={[1,2,3,4,5]} />
    </View>
  )
}

export default Screen3
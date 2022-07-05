// @flow

// Basic Class Structure with Props Component

// import { Text, View } from 'react-native'
// import React, { Component } from 'react'
// import type {Node} from 'react';


// type PropsType = {
//     name: string,
//     num? : number,
//     arr : Array<number>,
// }


// class TestComp extends Component<PropsType>  {
    
//     static defaultPropsType = {
//         name: 'Saaa',
//     }
    
//     render() : Node {
//         return (
//           <View>
//             <Text>{this.props.name}</Text>
//             {/* <Text>{this.props.num}</Text> */}
//             {this.props.arr.map(item=>{
//                 return <Text>{item}</Text>
//             })}
            
//           </View>
//         )
//       }
// }

// export class Screen2 extends Component<{}> {
//   render() : Node {
//     return (
//       <View>
//         <TestComp name={"Hello , This is Props Type in Class"}  arr={[1,2,3,4,5]} />
//       </View>
//     )
//   }
// }

// export default Screen2



// Basic Function Structure with Props Component


import { Text, View } from 'react-native'
import React, { Component } from 'react'
import type {Node} from 'react';


type PropsType = {
    name: string,
    num? : number,
    arr : Array<number>,
}

const TestComp = (props: PropsType) : Node => {
    return (
        <View>
            <Text>{props.name}</Text>
            {/* <Text>{props.num}</Text> */}
            {props.arr.map(item=>{
                return <Text>{item}</Text>
            })}
        </View>
    )
}

const Screen2 = ({} : {}) : Node => {
  return (
    <View>
      <TestComp name={"Hello , This is Props Type in Class"}  arr={[1,2,3,4,5]} />
    </View>
  )
}

export default Screen2
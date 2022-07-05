
// Basic Class Structure

// @flow

import type {Node} from 'react';
import React, { Component } from 'react';
import { Text } from 'react-native';

class Screen1 extends Component<{}> {
  render() : Node {
    return (
      <Text>Hello, Basic Class Structure !</Text>
    );
  }
}

export default Screen1;

// Basic Function Structure

// import type {Node} from 'react';
// import React, { Component } from 'react';
// import { Text , View } from 'react-native';

// const Screen1 = ({}:{}) : Node => {
//   return (
//     <View>
//       <Text>Basic Function Structure !</Text>
//     </View>
//   )
// }

// export default Screen1

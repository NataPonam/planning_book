import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
const PlusIcon = () => (
  <Svg width={24} height={24} fill="none">
    <G stroke="#002055" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <Path d="M12 8.327v7.327M15.667 11.99H8.333" />
      <Path
        d="M16.686 2H7.314C4.048 2 2 4.312 2 7.585v8.83C2 19.688 4.038 22 7.314 22h9.372C19.962 22 22 19.688 22 16.415v-8.83C22 4.312 19.962 2 16.686 2Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default PlusIcon;

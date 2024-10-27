import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
const EditIcon = () => (
  <Svg width={24} height={24} fill="none">
    <G stroke="#002055" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <Path d="M11.492 2.789H7.753c-3.075 0-5.003 2.177-5.003 5.259v8.314c0 3.082 1.92 5.259 5.003 5.259h8.824c3.085 0 5.004-2.177 5.004-5.26v-4.027" />
      <Path
        d="M8.828 10.92 16.3 3.449c.93-.93 2.44-.93 3.37 0l1.218 1.217a2.383 2.383 0 0 1 0 3.37l-7.51 7.51a2.17 2.17 0 0 1-1.534.636H8.099l.094-3.78a2.17 2.17 0 0 1 .635-1.48Z"
        clipRule="evenodd"
      />
      <Path d="m15.165 4.602 4.566 4.566" />
    </G>
  </Svg>
);
export default EditIcon;

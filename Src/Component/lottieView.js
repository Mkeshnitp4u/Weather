import React from 'react';
import LottieView from 'lottie-react-native';

const Lottie = (props) => {
  const { style, sourcePath } = props
  return (
    <LottieView
      style={style}
      source={sourcePath}
      autoPlay
      loop
    />
  );
};

export default Lottie;
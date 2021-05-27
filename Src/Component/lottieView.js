import React from 'react';
import LottieView from 'lottie-react-native';

const Lottie = (props) => {
    const {style, sourcePath, show} = props
    return (
        show && <LottieView 
        style={style}
        source={sourcePath}
        autoPlay
        loop
      />
    );
};

export default Lottie;
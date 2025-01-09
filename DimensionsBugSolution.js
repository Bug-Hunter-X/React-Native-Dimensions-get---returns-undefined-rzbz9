```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const DimensionsBugSolution = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const dimensions = Dimensions.get('window');
    if (dimensions) {
      setWindowWidth(dimensions.width);
      setWindowHeight(dimensions.height);
    } else {
      Dimensions.addEventListener('change', handleDimensionsChange);
      return () => {
        Dimensions.removeEventListener('change', handleDimensionsChange);
      };
    }
  }, []);

  const handleDimensionsChange = ({ window }) => {
    setWindowWidth(window.width);
    setWindowHeight(window.height);
  };

  return (
    <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
      <Text>Window Width: {windowWidth}</Text>
      <Text>Window Height: {windowHeight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DimensionsBugSolution;
```
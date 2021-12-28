import { ReactNode } from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

interface HeadingProps {
  children: ReactNode;
}

function Heading({ children }: HeadingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.headeingText}>{children}</Text>
    </View>
  );
};

export default Heading;

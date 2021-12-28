import { ReactNode } from 'react';

import { Text, View, SafeAreaView } from 'react-native';

import { styles } from './styles';

interface ComingSoonProps {
  children: ReactNode;
}

function ComingSoon({ children }: ComingSoonProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headeing}>ComingSoon...</Text>
    </SafeAreaView>
  );
};

export default ComingSoon;

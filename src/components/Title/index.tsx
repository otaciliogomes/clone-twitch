import { ReactNode } from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => <Text style={styles.title}>{children}</Text>

export default Title;

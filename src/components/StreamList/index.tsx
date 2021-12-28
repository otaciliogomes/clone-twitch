import { ReactNode } from 'react';

import { Text, View, Image, ScrollView } from 'react-native';

import stremThumbnail from '../../images/stream_thumbnail.jpg';

import { styles } from './styles';

interface StreamListProps {
  children?: ReactNode;
}

function StreamList({ children }: StreamListProps) {

  const ScrollViewList = () =>
    <View style={styles.streamContainer}>
      <Image source={stremThumbnail} style={styles.image} />
      <View style={styles.streamColumn}>
        <View style={styles.streamRow}>
          <View style={styles.streamRow}>
            <Text numberOfLines={1} style={styles.streamUserName}>rodz_xd</Text>
            <Text numberOfLines={1} style={styles.streamUserName}>rodz_xd</Text>
          </View>
        </View>
        <View style={styles.TagRow}>

        </View>
      </View>
    </View>

  return (
    <ScrollView>
      <ScrollViewList />
    </ScrollView>
  );
};

export default StreamList;

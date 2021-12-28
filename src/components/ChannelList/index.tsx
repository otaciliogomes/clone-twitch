import { ReactNode } from 'react';

import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface ChannelListProps {
  children?: ReactNode;
}

function ChannelList({ children }: ChannelListProps) {

  const ChannelItem = () =>
    <TouchableOpacity style={styles.channelContainer}>

      <View style={styles.leftSide}>
        <View style={styles.avatar} />
        <View style={styles.column}>
          <Text style={styles.userName}>rocketseat_oficial</Text>
          <Text style={styles.info}>36 new vídeos</Text>
        </View>
      </View>

      <View style={styles.rightSide}>
        <View style={styles.whiteCircle} />
      </View>

    </TouchableOpacity>

  return (
    <ScrollView>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </ScrollView>
  );
};

export default ChannelList;

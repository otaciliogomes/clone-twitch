import { ReactNode } from 'react';

import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import stremThumbnail from '../../images/stream_thumbnail.jpg';

import { styles } from './styles';

interface StreamListProps {
  children?: ReactNode;
}

function StreamList({ children }: StreamListProps) {

  const ScrollViewList = () =>
    <TouchableOpacity style={styles.streamContainer}>
      <Image source={stremThumbnail} style={styles.image} />

      <View style={styles.streamColumn}>

        <View style={styles.streamRow}>
          <View style={styles.streamHeader}>
            <View style={styles.streamAvatar}></View>
            <Text numberOfLines={1} style={styles.streamUserName}>rodz_xd</Text>
          </View>
          <Text numberOfLines={1} style={styles.streamDescription}>
            Front-End width: React-Native, React JS, NextJs
          </Text>

          <Text numberOfLines={1} style={styles.streamCategories}>
            Science & Teachlogy
          </Text>
        </View>

        <View style={styles.TagRow}>
          <View style={styles.tagView}>
            <Text style={styles.tagText}>Argentina</Text>
          </View>
          <View style={styles.tagView}>
            <Text style={styles.tagText}>Web Develop</Text>
          </View>
        </View>
      </View>

    </TouchableOpacity>

  return (
    <ScrollView style={styles.list}>
      <ScrollViewList />
      <ScrollViewList />
      <ScrollViewList />
      <ScrollViewList />
      <ScrollViewList />
      <ScrollViewList />
    </ScrollView>
  );
};

export default StreamList;

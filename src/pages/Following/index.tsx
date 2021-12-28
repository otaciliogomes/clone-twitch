import { useMemo } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';

import { styles } from './styles';

import { Header } from "../../components/Header";
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

function Following() {
  const { data, indices } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true
      },
      {
        key: 'C1',
        render: () => <CategoryList />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true
      },
      {
        key: 'C2',
        render: () => <StreamList />,
      },
      {
        key: 'CONTINUE_CHANNELS',
        render: () => <Title>Continue Channels</Title>,
        isTitle: true
      },
      {
        key: 'C3',
        render: () => <View></View>,
      },
      {
        key: 'OFFILINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true
      },
      {
        key: 'C4',
        render: () => <View></View>,
      },
    ]

    const indices: number[] = [];

    items.forEach((item, index) =>
      item.isTitle && indices.push(index)
    );

    return {
      data: items,
      indices
    }
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.wrapper}>
        <FlatList<Item>
          data={data}
          renderItem={({item}) => item.render()}
          keyExtractor={item => item.key}
          stickyHeaderIndices={indices}
          onRefresh={() => {}}
          refreshing={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Following;

import React, { ReactNode } from 'react';

import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import data from './data';

import { styles } from './styles';

interface CategoryListProps {
  item: typeof data[0];
  key: string | number
}

function CategoryList() {

  const CategoryItem: React.FC<CategoryListProps> = ({ item }) => (
    <TouchableOpacity style={styles.categoryContainer}>
      <Image source={item.source}  style={styles.categoryImage}/>
      <Text numberOfLines={1} style={styles.categoryName}>{item.name}</Text>
      <View style={styles.categoryStatus}>
        <View style={styles.redCircle}></View>
        <Text style={styles.info}>51.9K</Text>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <ScrollView horizontal style={styles.list}>
      {
        data.map((item, index) => (
          <CategoryItem key={index}  item={item}/>
        ))
      }
    </ScrollView>
  );
};

export default CategoryList;

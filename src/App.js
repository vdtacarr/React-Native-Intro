import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';

import products_json from './products.json';
import news_banner_data from './news_banner_data.json';
import Products from './components/Products/Products';
function App() {
  const renderProducts = ({ item }) => <Products product_items={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList 
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              bannerNews.id == 0 ? <Image key={0} style={styles.banner_image} source={{uri:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FootballManager2022_SportsInteractive_S1_2560x1440-b8b3816a89feb951b3c37da921ee57cd'}} /> :
                <Image
                  key={bannerNews.id}
                  style={styles.banner_image}
                  source={{ uri: bannerNews.imageUrl }}
                />
            ))
            }

          </ScrollView>
        )}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProducts}
        data={products_json}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
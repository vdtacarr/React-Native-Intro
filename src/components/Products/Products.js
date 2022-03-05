import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './products.style';

const Products = ({ product_items }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: product_items.imgURL }} />
            <Text style={styles.title}>{product_items.title}</Text>
            <Text style={styles.description}>{product_items.price}</Text>
            {/* <Text style={styles.author}>{news.author}</Text> */}

        </View>
    );
};

export default Products;
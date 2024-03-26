import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export const TransactionsDetailScreen = ({route}) => {
    const { transaction } = route.params;
    console.log("detail", transaction)
    return (
        <View>
            <View style={styles.col}>
                <Text>${transaction.price}</Text>
                <Text>{transaction.name}</Text>
                <Text>{transaction.address}</Text>
            </View>
            <View style={styles.row}>
                <Text>Transaction Date:</Text>
                <Text>{transaction.date}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    col: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#61dafb'
    },
    row: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    }
});
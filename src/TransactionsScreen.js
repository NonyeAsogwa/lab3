import * as React from 'react';
import { View, Text, FlatList} from 'react-native'
import {TransactionItems} from './TransactionItems'

export const TransactionsScreen = ({navigator, route }) => {
    const { staticData } = route.params;
    return (
        <View>
            <FlatList
                data={staticData}
                renderItem={({item}) => <TransactionItems Transaction={item}/>}
                keyExtractor={item => item.name + item.date}
            />
        </View>
    );
}
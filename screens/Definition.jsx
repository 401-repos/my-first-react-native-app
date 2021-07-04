import React from 'react';
import {View} from 'react-native';
import Header from '../components/header';
import Term from '../components/term';
import Details from '../components/Definition';

function Definition({route , navigation}) {
    return (
        <View>
            {/* <Header /> */}
            <Term term={route.params?.term ?? 'Not A Term'}/>
            <Details definition={route.params?.definition ?? 'Not a Definition'}/>
        </View>
    )
}

export default Definition

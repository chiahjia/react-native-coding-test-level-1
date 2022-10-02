import React from "react";
import {View, Button} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button
                title="Contact Us"
                onPress={() => navigation.navigate('Contact')}
            />
        </View>
    )
};

export default Home;
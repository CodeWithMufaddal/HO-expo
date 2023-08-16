import React from 'react'
import { ScrollView, SafeAreaView, ImageBackground  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../constants';
import { tabStyles } from '../style';

const Structure = ({ children, style }) => {
    return (
        <ImageBackground source={images.bg} style={[tabStyles.backgroundImage]}>
            {/* <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['rgba(48, 25, 25, 1)', 'transparent']} style={tabStyles.linearGradient}> */}
                <SafeAreaView style={tabStyles.safeAreaView}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 140, marginBottom: 85 }}>
                        {children}
                    </ScrollView>
                </SafeAreaView>
            {/* </LinearGradient> */}
        </ImageBackground>
    )
}

export default Structure
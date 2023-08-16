import { Pressable, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../components/Themed'
import { LinearGradient } from 'expo-linear-gradient'
import { tabStyles } from '../style'
import { usePathname } from 'expo-router'

const TabButton = ({ routeName, navigation }) => {
    let path = usePathname()
    path = path == '/' ? '/index' : path
    return (
        <Pressable
            style={{
                marginBottom: "auto",
                marginTop: "auto",
            }}
            onPress={() => navigation.navigate(routeName)}>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={path == `/${routeName}` ? ['red', 'orange'] : ['transparent', 'transparent']} style={tabStyles.Tabs}>
                <ThemedText >{routeName === "index" ? "HOME" : routeName === "DayOff" ? "DAY OFF" : routeName?.toUpperCase()}</ThemedText>
            </LinearGradient>
        </Pressable>
    )
}


export default TabButton
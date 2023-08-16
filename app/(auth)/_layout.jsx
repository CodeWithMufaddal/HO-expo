import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'

const AuthLayout = () => {
    return (
        <Stack
            initialRouteName="signIn"
            screenOptions={{
                //   tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                translucency: false,
                headerTransparent: true,
                statusBarTranslucent: true,
                navigationBarHidden: true,
                //   tabBarStyle: tabStyles.TabContainer,
            }}
        >
            <Stack.Screen
                name="signIn"
                options={({ route, navigation }) => ({
                    headerShown: false,
                    title: "HOME",
                    tabBarIconStyle: { display: "none" },
                    tabBarInactiveTintColor: "white",
                    href: null
                    // tabBarButton: () => <TabButton routeName={route.name} navigation={navigation} />,
                })}
            />
        </Stack>
    )
}

export default AuthLayout
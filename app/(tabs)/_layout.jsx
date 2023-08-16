import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import Colors from "../../src/constants/Colors"
import TabButton from "../../src/utils/TabButton"
import { tabStyles } from "../../src/style"



export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        translucency: false,
        headerTransparent: true,
        statusBarTranslucent: true,
        navigationBarHidden: true,
        tabBarStyle: tabStyles.TabContainer,
      }}
    >
      <Tabs.Screen
        name="index"
        options={({ route, navigation }) => ({
          headerShown: false,
          title: "HOME",
          tabBarIconStyle: { display: "none" },
          tabBarInactiveTintColor: "white",
          tabBarButton: () => <TabButton routeName={route.name} navigation={navigation} />,
        })}
      />

      <Tabs.Screen
        name="DayOff"
        options={({ route, navigation }) => ({
          headerShown: false,
          title: "DAY OFF",
          tabBarIconStyle: { display: "none" },
          // tabBarLabelStyle: tabStyles.Tabs,
          tabBarButton: () => <TabButton routeName={route.name} navigation={navigation} />,
        })}
      />
      <Tabs.Screen
        name="WFH"
        options={({ route, navigation }) => ({
          headerShown: false,
          title: "WFH",
          tabBarIconStyle: { display: "none" },
          // tabBarLabelStyle: tabStyles.Tabs,
          tabBarButton: () => <TabButton routeName={route.name} navigation={navigation} />,
        })}
      />

      <Tabs.Screen
        name="Leave"
        options={({ route, navigation }) => ({
          headerShown: false,
          title: "LEAVE",
          tabBarIconStyle: { display: "none" },
          tabBarButton: () => <TabButton routeName={route.name} navigation={navigation} />,
        })}
      />

      <Tabs.Screen
        name="Notification"
        options={({ route }) => ({
          headerShown: false,
          href: null,
          title: "Notification",
          tabBarIconStyle: { display: "none" },
          tabBarButton: () => null,
        })}
      />
      <Tabs.Screen
        name="Achievement"
        options={({ route }) => ({
          headerShown: false,
          href: null,
          title: "",
          tabBarIconStyle: { display: "none" },
          tabBarButton: () => null,
        })}
      />
      <Tabs.Screen
        name="ScanReport"
        options={({ route }) => ({
          headerTitle: "",
          href: null,
          title: "",
          tabBarIconStyle: { display: "none" },
          tabBarButton: () => null,
        })}
      />
    </Tabs>
  )
}

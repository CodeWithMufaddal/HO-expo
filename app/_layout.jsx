import FontAwesome from "@expo/vector-icons/FontAwesome"
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { SplashScreen, Stack, usePathname, useRouter } from "expo-router"
import { useEffect } from "react"
import { Image, Pressable, View, useColorScheme } from "react-native"
import { Provider, useAuth } from "../src/contexts/auth"
import { tabStyles } from "../src/style"
import { icons } from "../src/constants"
import { StatusBar } from "expo-status-bar"
import { ScreenHeaderBtn, ThemedText } from "../src/components"

SplashScreen.preventAutoHideAsync()
export { ErrorBoundary } from "expo-router"

export const unstable_settings = {
  auth: {
    initialRouteName: 'signIn',
  },
  tabs: {
    initialRouteName: 'index',
  },
}


const RootLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require('../src/assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
    DMBold: require('../src/assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../src/assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../src/assets/fonts/DMSans-Regular.ttf'),
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Provider>
      <RootLayoutNav />
    </Provider>
  )
}

const RootLayoutNav = () => {
  const colorScheme = useColorScheme()
  const path = usePathname()
  const router = useRouter()
  const { authInitialized, user } = useAuth()
  // if (!authInitialized && !user) return null
  // if (!user) return   null
  // console.log(authInitialized , user, 'authInitialized')
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        contextKey={false ? "(auth)/signIn" : "(tabs)/index"}
        screenOptions={{
          headerTransparent: true,
          statusBarTranslucent: true,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerStyle: tabStyles.tabsContainer,
            headerLeft: () => (
              <View
                style={{
                  position: 'relative',
                  width: '100%',
                }}>
                <Pressable onPress={() => router.replace("/")}>
                  <Image
                    source={icons.logo}
                    style={tabStyles.logo}
                    resizeMode="contain"
                  />
                </Pressable>
                {path === "/" && <ThemedText style={tabStyles.userName}>Welcome Mufaddal</ThemedText>}
              </View>

            ),

            headerRight: (props) => {
              return (
                <View style={{
                  display: "flex", flexDirection: 'row',
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                }}>
                  <ScreenHeaderBtn iconUrl={icons.lightbulb} dimension="70%" handleNavigation={() => router.push("/Achievement")} />
                  <ScreenHeaderBtn iconUrl={icons.notification} dimension="70%" handleNavigation={() => router.push("/Notification")} />
                  <ScreenHeaderBtn iconUrl={icons.manu} dimension="70%" handleNavigation={() => router.push("/modal")} />
                </View>
              )
            },
            headerTitle: ""
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
            headerLeft: () => (
              <Pressable onPress={() => router.replace("/")}>
                <Image
                  source={icons.logo}
                  style={tabStyles.logo}
                  resizeMode="contain"
                />
              </Pressable>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', }}>
                <ScreenHeaderBtn iconUrl={icons.close_menu} dimension="70%" handleNavigation={() => router.back()} />
              </View>
            ),
            headerTitle: ""
          }} />
      </Stack>


      <StatusBar style={"auto"} />
    </ThemeProvider>
  )
}



export default RootLayout
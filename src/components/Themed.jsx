/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView
} from "react-native"

import Colors from "../constants/Colors"

export function useThemeColor(props, colorName) {
  const theme = useColorScheme() ?? "light"
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return Colors[theme][colorName]
  }
}

export function ThemedText(props) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text")
  return <DefaultText style={[{ color: "#FFF" }, style]} {...otherProps} />
}

export function ThemedView(props) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background")
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

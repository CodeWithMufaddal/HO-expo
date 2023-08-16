import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, images } from "../constants";

const GlobStyles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    hrLine: {
        borderBottomColor: COLORS.hrLineColor,
        borderBottomWidth: 1,
        marginHorizontal: SIZES.medium,
        marginVertical: SIZES.medium,
    },
    w100: {
        width: "100%"
    },
    spaceHorizontal: {
        marginHorizontal: SIZES.large
    },
    backgroundImage: {
        flex: 1,
        // color: COLORS.lightWhite,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    safeAreaView: {
        // backgroundColor: "rgba(0,0,0,0.8)",
        flex: 1,
    },
    headerStyle: {
        flex: 1,
        backgroundColor: "none",
    },
    dFlex: {
        display: "flex",
    },
    flex: {
        flex: 1,
        display: "flex",
    },
    flexRow: {
        flexDirection: "row",
    },
    flexCenter: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    flexCenterBetween: {
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        width: 100,
        height: 100,
        // backgroundColor: COLORS.white,
        // borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: SIZES.xSmall
    },
    // Transparent Background
    transparent: {
        button: {
            // background-color: rgba(255, 255, 255, .15);  
            // backdrop-filter: blur(5px);
            small: {
                backgroundColor: "rgba(255, 255, 255, .1)",
                backdropFilter: "blur(5px)",
                borderRadius: SIZES.xxxLarge,
                alignItems: "center",
            }
        },
        container: {
            backgroundColor: "rgba(255, 255, 255, .2)",
            backdropFilter: "blur(5px)",
            borderRadius: 4,
        }
    },
    // Globle Button
    Button: {
        small: {
            // color: COLORS.lightWhite,
            fontFamily: FONT.regular,
            display: "flex",
            borderWidth: 1,
            borderColor: COLORS.lightWhite,
            borderRadius: 100,
            paddingVertical: SIZES.small / 2,
            paddingHorizontal: SIZES.small,
            fontSize: 12,
        },
        medium: {
            fontFamily: FONT.medium,
            borderWidth: 1,
            borderColor: COLORS.lightWhite,
            borderRadius: SIZES.xxxLarge,
        },
        large: {
            // color: COLORS.lightWhite,
            fontFamily: FONT.medium,
            borderWidth: 1,
            borderColor: COLORS.lightWhite,
            borderRadius: SIZES.xxxLarge,
            paddingVertical: SIZES.large / 3,
            paddingHorizontal: SIZES.large / 2,
            fontSize: 14,
        },
    },

});

export default GlobStyles;

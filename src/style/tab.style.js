import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, images } from "../constants";

const tabStyles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    tabsContainer: {
        position: "relative",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TabContainer: {
        backgroundColor: "transparent",
        position: 'absolute',
        borderTopWidth: 0,
        elevation: 0,
        height: 87,
    },

    Tabs: {
        // marginBottom: "auto", marginTop: "auto", marginLeft: "auto", marginRight: "auto",
        marginHorizontal: SIZES.xSmall,
        fontSize: 14,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 14,
        paddingVertical: 7,
    },

    backgroundImage: {
        flex: 1,
        color: COLORS.lightWhite,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    safeAreaView: {
        // backgroundColor: "rgba(0,0,0,0.7)",
        flex: 1,
    },
    headerStyle: {
        flex: 1,
        backgroundColor: "none",
    },
    logo: {
        width: 100,
        height: 90,

        // backgroundColor: COLORS.white,
        borderColor: "white",
        // borderRadius: SIZES.small / 1.25,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginRight: SIZES.xSmall,
        marginBottom: 20,
        position: "relative",
        bottom: 0
    },
    container: {
        width: 100,
        height: 100,
        // backgroundColor: COLORS.white,
        // borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: SIZES.xSmall
    },
    userName: {
        flex: 1,
        width: "100%",
        fontFamily: FONT.bold,
        fontSize: SIZES.xMedium,
        position: "absolute",
        bottom: 9,
        flexDirection: "row",

    },
});

export default tabStyles;

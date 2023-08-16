import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    // Notifications
    notificationContainer: {
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "column",
        display: "flex",
        overflow: "hidden",
        whiteSpace: "nowrap",
        paddingVertical: 7,
        paddingHorizontal: SIZES.xSmall,
        marginHorizontal: SIZES.large,
        marginVertical: 5
    },

    notificationText: {
        alignItems: "flex-start",
        // color: COLORS.lightWhite,
        fontFamily: FONT.medium,
        fontSize: 15,
        paddingBottom: SIZES.small
    },

    notificationDateTime: {
        color: "rgba(255,255,255,0.2)",
        fontFamily: FONT.bold,
        fontSize: 12
    },

    notificationBottomContainer: {
        color: "darkgrey",
        fontFamily: FONT.regular,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "100%",
        fontSize: 13,
        marginBottom: 4
    },

    NotCardButton: {
        borderRadius: SIZES.xxxLarge,
        paddingVertical: SIZES.medium / 2,
        paddingHorizontal: SIZES.small,

    },
    Modal: {
        // backgroundColor: COLORS.tertiary,
        // height: 100,
        borderRadius: SIZES.xxxSmall,
        padding: SIZES.medium,
        marginHorizontal: SIZES.small,
        fontFamily: FONT.regular,
    },

    scanButton: {
        // marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        // marginRight: "auto",
        paddingHorizontal: 50,
        paddingVertical: 50
    },
    confirmButton: {
        fontFamily: FONT.bold,
    },
});

export default styles;

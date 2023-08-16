import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES, images } from "../constants";

const applyStyles = StyleSheet.create({
    applyHeader: {
        flexDirection: "row",
        borderColor: "red",
        justifyContent: "space-between",
        paddingVertical: 10,
        height: 63,
        marginVertical: 11
    },
    tabText: {
        fontFamily: FONT.medium,
    },

    tab: {
        padding: 5,
        width: 140,
        borderRadius: 100,
        backgroundColor: "#3097FC",
    },
    LeaveTab: (count) => ({
        width: 75,
        marginRight: 5,
        borderRadius: 100,
        backgroundColor: count <= 0 ? "#E26464" : "#408E40",
    }),
    LeaveModalTab: (count) => ({
        paddingVertical: 3,
        width: 120,
        marginRight: 10,
        borderRadius: 100,
        backgroundColor: count <= 0 ? "#E26464" : "#408E40",
    }),
    Modaltab: {
        padding: 2,
        width: 140,
        borderRadius: 100,
        backgroundColor: "#3097FC",
    },
    status: (color) => ({
        paddingVertical: 10,
        paddingHorizontal: 12,
        display: "flex",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: color == "Pending" ? "#FFA500" : color == "Approved" ? "#408E40" : "#FF0000",
        margin: 8
    }),
    scanTab: {
        alignItems: "center",
        padding: 10,
        width: 120,
        justifyContent: "center",
        flex: 1,
    },



    // Scroll data
    applyContainer: {
        margin: 5,
        padding: 10

    },
    applyDateBox: {
        paddingVertical: SIZES.xxSmall,
        paddingHorizontal: SIZES.medium,
        // margin: SIZES.xxSmall,
    },
    messageBox: {
        margin: SIZES.small,
    },
    message: {
        fontFamily: FONT.medium,
        textAlign: "center",
        fontSize: 14,
    },
    dates: {
        fontFamily: FONT.medium,
        fontSize: 12,
    },

    // history
    hrLineHorizontal: {
        // backgroundColor: COLORS.hrLineColor,
        borderRightColor: COLORS.hrLineColor,
        borderRightWidth: 1,
        height: 45,
        width: 1,
        marginHorizontal: 10,

        alignItems: "center",
        justifyContent: "center",
    },

    container: {
        padding: 10,
        marginVertical: 0,
        width: "100%",
    },
    column: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "center",
    },
    verticalLine: {
        borderRightColor: COLORS.hrLineColor,
        borderRightWidth: 1,
        height: 45,
        width: 1,
        marginHorizontal: 10,
    },


    innerDetailsContainer: {
        flexDirection: "row",
        flex: 1,
    },
    grayText: {
        fontFamily: FONT.medium,
        color: COLORS.gray,
        marginRight: 5,
    },
    detailText: {
        fontFamily: FONT.bold,
        fontSize: 16,
        padding: 2,
    },
    bottomApplyDate: {
        position: "absolute",
        right: 0,
        fontFamily: FONT.bold,
        fontSize: 10,
    },


    // Modal
    Modal: {
        padding: 10,
        marginHorizontal: SIZES.small,
        borderRadius: SIZES.IVSmall,

        elevation: 20,
        shadowColor: '#52006A',
    },
    ModalText: {
        marginVertical: 15,
        textAlign: "center",
        fontFamily: FONT.medium,
        fontSize: 14,
    },

    //   WFH APPLY MODAL
    modalHeader: {
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        width: 100,
        height: 100,
    },
    btnContainer: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: COLORS.lightWhite,
        borderRadius: SIZES.xLarge / 1.25,
        justifyContent: "center",
        alignItems: "center",
    },
    modalMessage: {
        fontFamily: FONT.medium,
        fontSize: 14,
        marginTop: 30,
        marginBottom: 5,
        lineHeight: 17,
    },
    applyModalHeader: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        marginVertical: 11,
    },
    calenderButton: {
        paddingVertical: 3,
        paddingHorizontal: 15,
        height: 40,
         marginVertical: 7
    },
    applyReason: {
        flex: 1,
        height: 100,
        textAlignVertical: 'top',
        color: COLORS.lightWhite,
        borderWidth: 2,
        borderColor: COLORS.hrLineColor,
        borderRadius: SIZES.small,
        marginVertical: 20,
        padding: 10
    },
});

export default applyStyles;

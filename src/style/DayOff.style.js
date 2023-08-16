import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, images } from "../constants";

const DayOffStyles = StyleSheet.create({
    DayOffText: {
        marginVertical: SIZES.small,
        fontFamily: FONT.bold,
        fontSize: 14
    },

    DayOffBoxContainer: {
        marginBottom: SIZES.xxSmall,
        padding: SIZES.xxSmall
    },

    DayOffDateButton: {
        padding: SIZES.xSmall,
    }
});

export default DayOffStyles;

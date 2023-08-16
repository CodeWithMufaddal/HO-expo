import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },


  // welcomeMessage: {
  //   fontFamily: FONT.bold,
  //   fontSize: SIZES.xLarge,
  //   color: COLORS.lightWhite,
  //   marginTop: 2,
  // },
  tabsContainer: {
    marginTop: SIZES.xxxSmall
  },
  hrLine: {
    // borderBottomColor: "#A88B61",
    borderBottomColor: COLORS.hrLineColor,
    borderBottomWidth: 1,
    marginHorizontal: SIZES.medium,
    marginVertical: SIZES.medium,
  },
  tabBox: {
    marginLeft: SIZES.large,
  },
  tab: (activeJobType, color) => ({
    paddingVertical: 4,
    display: "flex",
    alignItems: "center",
    width: 90,
    borderRadius: 100,
    backgroundColor: color,
  }),
  tabText: {
    fontFamily: FONT.medium,
    fontSize: 13,
  },

  scanTabText: {
    fontFamily: FONT.medium,
    fontSize: 15,
  },
  tabDeskText: {
    fontFamily: FONT.medium,
    fontSize: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: SIZES.large,
    fontSize: 13
  },



  scanButton: {
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 4,
  },

  scanTab: {
    paddingVertical: 2.5,
  },

  scanReportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: SIZES.large,
    marginTop: SIZES.xxxSmall,
  },
  scanInTime: {
    alignItems: "center",
    // marginVertical: SIZES.xxxSmall,
    width: "30%",
  },

  scanReportText: {
    // color: COLORS.lightWhite,
    fontFamily: FONT.medium,
    fontSize: 12
  },

  scanReportButton: {
    width: "100%",
    marginVertical: 7,
    paddingVertical: SIZES.small,

    alignItems: "center",
  },



  // Notifications
  notificationContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
    overflow: "hidden",
    whiteSpace: "nowrap",
    paddingVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.xSmall,
    marginHorizontal: SIZES.large,
    marginVertical: 5
  },

  notificationText: {
    alignItems: "flex-start",
    // color: COLORS.lightWhite,
    fontFamily: FONT.regular,
    justifyContent: "center",
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


  // Scan Report 
  scanReportHeader: {
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-start",
    borderWidth: 1,
    justifyContent: "center",
    columnGap: SIZES.small,
    marginHorizontal: SIZES.large,
  },
  scanReportScanButton: {
    marginTop: SIZES.large,
    marginBottom: SIZES.xxxSmall,
    paddingVertical: SIZES.small,
    fontSize: 2,
    alignItems: "center",
  },

  scanButtonText: {
    fontFamily: FONT.bold,
  },
  scanReportTimeButton: {
    width: "100%",
    paddingVertical: SIZES.xxSmall,
    marginTop: SIZES.medium
  },
  scanReportContainerBox: {
    width: "30%",
  },

  // achievement
  achievementContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
    paddingVertical: SIZES.xxxSmall,
    paddingHorizontal: SIZES.xSmall,
    marginVertical: SIZES.xxxSmall

  },
  achievementText: {
    fontFamily: FONT.bold,
    alignItems: "flex-start",
    fontSize: 14.2,
  },

});

export default styles;

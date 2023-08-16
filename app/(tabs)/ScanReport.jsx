import { View, Pressable, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { ThemedText } from '../../src/components/Themed'
import styles from '../../src/components/home/welcome/welcome.style'
import { LinearGradient } from 'expo-linear-gradient'
import GlobStyles from '../../src/style/index.style'
import { images } from '../../src/constants'
import moment from 'moment';

const ScanReport = () => {
    let scanData = {
        avgTime: "9hr 12m",
        belowHour: 2,
        AboveHour: 5,
        scan: [
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
            {
                date: new Date("2023-07-12"),
                scanInTime: new Date("11:03 AM"),
                scanOutTime: new Date("08:00 PM"),
                totalWorkTime: "9hr 14m",
            },
        ]
    }

    return (
        <ImageBackground source={images.bg} style={[GlobStyles.backgroundImage]}>
                <SafeAreaView style={GlobStyles.safeAreaView}>
                    <View style={[GlobStyles.spaceHorizontal, { marginTop: 138 }]}>
                        <View style={[styles.scanReportHeader, GlobStyles.spaceHorizontal]}>
                            <View style={styles.tab(true, "#408E40")}>
                                <ThemedText style={styles.tabText}>{scanData.avgTime}</ThemedText>
                                <ThemedText style={styles.tabDeskText}>Avg.Time</ThemedText>
                            </View>

                            <View style={styles.tab(true, "#3097FC")}>
                                <ThemedText style={styles.tabText}>{scanData.belowHour}</ThemedText>
                                <ThemedText style={styles.tabDeskText}>Below 9 Hrs</ThemedText>
                            </View>

                            <View style={styles.tab(true, "#EC6231")}>
                                <ThemedText style={styles.tabText}>{scanData.AboveHour}</ThemedText>
                                <ThemedText style={styles.tabDeskText}>Above 9 Hrs</ThemedText>
                            </View>
                        </View>
                        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['red', 'orange']} style={[styles.scanReportScanButton, GlobStyles.spaceHorizontal, GlobStyles.Button.medium]}>
                            <Pressable style={styles.scanTab} >
                                <ThemedText style={styles.scanButtonText}>Scan Now</ThemedText>
                            </Pressable>
                        </LinearGradient>
                    </View>

                    <View style={{ flex: 1 }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 90 }}>
                            {
                                scanData?.scan && scanData.scan.map(({ date, totalWorkTime }, i) => {
                                    return (
                                        <View key={i} style={[GlobStyles.transparent.container, styles.notificationContainer]}>
                                            <View style={[GlobStyles.flex, GlobStyles.flexRow, GlobStyles.flexCenterBetween, GlobStyles.w100]}>
                                                <ThemedText style={styles.scanButtonText}>{`${moment(date).format('dddd, D MMMM, YYYY')}`}</ThemedText>
                                                <View style={[styles.tab(true, "#408E40"), { paddingVertical: 10 }]}>
                                                    <ThemedText style={styles.tabText}>{totalWorkTime}</ThemedText>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: "row", justifyContent: "center", columnGap: 34, alignItems: "center", width: "100%" }}>
                                                <View style={styles.scanReportContainerBox}>
                                                    <View style={[GlobStyles.transparent.button.small, styles.scanReportTimeButton]}>
                                                        <ThemedText style={styles.tabDeskText}>10:56 AM</ThemedText>
                                                    </View>
                                                </View>
                                                <View style={styles.scanReportContainerBox}>
                                                    <View style={[GlobStyles.transparent.button.small, styles.scanReportTimeButton]}>
                                                        <ThemedText style={styles.tabDeskText}>10:56 AM</ThemedText>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </SafeAreaView>
        </ImageBackground>

    )
}

export default ScanReport
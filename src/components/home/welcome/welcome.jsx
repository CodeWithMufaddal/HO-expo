import React, { useState } from 'react'
import { TextInput, TouchableOpacity, Image, FlatList, Text, View, Pressable, Linking } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { COLORS, icons, SIZES } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '../../Themed';
import GlobStyles from '../../../style/index.style';
import NoteCard from '../../common/NoteCard/NoteCard';


const Welcome = ({ handleClick }) => {
  const [activeJobType, setActiveJobType] = useState("Exp")
  const router = useRouter()
  const userInfo = [
    {
      title: "avg time",
      val: "9hr 11m",
      desc: "Avg. Time",
      color: "#E26464",
    },
    {
      title: "years",
      val: "0.8Yrs",
      desc: "Exp",
      color: "#BC8933",
    },
    {
      title: "emergency leave",
      val: "2",
      desc: "EL",
      color: "#408E40",
    },
    {
      title: "planned leave",
      val: "10",
      desc: "PL",
      color: "#408E40",
    }];

  let notification = [
    {
      note: "Greetings to all. We will be working from home on June 14 due to palkhi. Do not forget to send email while logging in and out.",
      time: "2023-06-13"
    }]
  return (
    <View>


      <View style={styles.tabsContainer}>
        <FlatList
          data={userInfo}
          renderItem={({ item }) => (
            <View style={styles.tab(activeJobType, item.color)}>
              <ThemedText style={styles.tabText}>{item.val}</ThemedText>
              <ThemedText style={styles.tabDeskText}>{item.desc}</ThemedText>
            </View>
          )}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          style={styles.tabBox}
        />
      </View>

      {/* HR */}
      <View style={GlobStyles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <ThemedText style={styles.scanTabText}>Today Scan Report</ThemedText>
          <Pressable onPress={()=> router.push("ScanReport")}>
            <ThemedText style={GlobStyles.Button.small}>View More</ThemedText>
          </Pressable>
        </View>

        <View style={styles.scanReportContainer}>
          <View style={styles.scanInTime}>
            <ThemedText style={styles.scanReportText}>In Time</ThemedText>
            <View style={[GlobStyles.transparent.button.small, styles.scanReportButton]}>
              <ThemedText style={styles.tabDeskText}>10:56 AM</ThemedText>
            </View>
          </View>
          <View style={styles.scanInTime}>
            <ThemedText style={styles.scanReportText}>Out Time</ThemedText>
            <View style={[GlobStyles.transparent.button.small, styles.scanReportButton]}>
              <ThemedText style={styles.tabDeskText}>10:56 AM</ThemedText>
            </View>
          </View>
          <View style={styles.scanInTime}>
            <ThemedText style={styles.scanReportText}>Duration</ThemedText>
            <View style={[GlobStyles.transparent.button.small, styles.scanReportButton]}>
              <ThemedText style={styles.tabDeskText}>10:56 AM</ThemedText>
            </View>
          </View>
        </View>

        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={[COLORS.gradientLeft, COLORS.gradientRight]} style={[styles.scanButton, GlobStyles.Button.small]}>
          <TouchableOpacity style={styles.scanTab} >
            <ThemedText style={styles.tabText}>Scan Now</ThemedText>
          </TouchableOpacity>
        </LinearGradient>

      </View>

      <View style={GlobStyles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <ThemedText style={styles.scanTabText}>Latest Notification</ThemedText>
          <Pressable onPress={() => router.push("/Notification")}>
            <ThemedText style={GlobStyles.Button.small}>View More</ThemedText>
          </Pressable>
        </View>

        <NoteCard numberOfLines={1} note={notification[0].note} time={new Date(notification[0].time).toDateString() + " | " + new Date(notification[0].time).toLocaleTimeString()} />
      </View>

      <View style={GlobStyles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <ThemedText style={styles.scanTabText}>Checkout Our Latest Insta Posts</ThemedText>
          <Pressable onPress={() => Linking.openURL(`https://www.instagram.com/hatsoffdigital`)}>
            <ThemedText style={GlobStyles.Button.small}>View More</ThemedText>
          </Pressable>
        </View>
      </View>



    </View>
  )
}

export default Welcome
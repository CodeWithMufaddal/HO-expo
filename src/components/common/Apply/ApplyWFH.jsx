import { View, Pressable, ImageBackground, SafeAreaView, ScrollView, Image, useColorScheme, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { GlobStyles, applyStyles, tabStyles } from '../../../style'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, icons, images } from '../../../constants'
import { ThemedText } from '../../Themed'
import styles from '../header/screenheader.style'
import DatePicker from '../../../utils/DatePicker'
import moment from 'moment'

const ApplyWFH = () => {
  const [show, setShow] = useState(false)
  const initialDateState = {
    From: null,
    To: null
  }
  const [date, setDate] = useState(initialDateState)

  const theme = useColorScheme()
  const handleShow = () => setShow(true)
  const handleHide = () => setShow(false)


  return (
    <View style={[applyStyles.applyHeader]}>
      <View style={[applyStyles.tab, GlobStyles.flexCenter]}>
        <ThemedText style={applyStyles.tabText}>7</ThemedText>
        <ThemedText style={applyStyles.tabText}>Applied WFH</ThemedText>
      </View>

      <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['red', 'orange']} style={GlobStyles.Button.medium}>
        <Pressable onPress={handleShow} style={applyStyles.scanTab} >
          <ThemedText style={applyStyles.tabText}>Apply WFH</ThemedText>
        </Pressable>
      </LinearGradient>

      <Modal
        isVisible={show}
        hasBackdrop={false}
        style={{
          backgroundColor: 'red',
          margin: 0
        }}
        onModalHide={() => {
          setDate(initialDateState)
        }}
        onBackButtonPress={handleHide}
        hideModalContentWhileAnimating={true}
        coverScreen
        statusBarTranslucent
      >

        <ImageBackground source={images.bg} style={[tabStyles.backgroundImage]}>
          {/* <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['rgba(48, 25, 25, 1)', 'transparent']} style={tabStyles.linearGradient}> */}
            <SafeAreaView style={tabStyles.safeAreaView}>
              <View style={[applyStyles.modalHeader, GlobStyles.spaceHorizontal, { marginTop: 20 }]}>
                <Image
                  source={icons.logo}
                  style={applyStyles.logo}
                  resizeMode="contain"
                />
                <Pressable style={applyStyles.btnContainer} onPress={handleHide}>
                  <Image
                    source={icons.goBack}
                    resizeMode="center"
                    style={styles.btnImg("70%")}
                  />
                </Pressable>
              </View>
              <KeyboardAvoidingView
                behavior={'padding'}
                style={{ flex: 1 }}
              >
                <ScrollView showsVerticalScrollIndicator={false} style={[GlobStyles.transparent.container, { borderTopRightRadius: 20, borderTopLeftRadius: 20 }]}>
                  <View style={[GlobStyles.spaceHorizontal,]}>
                    <View style={[applyStyles.applyModalHeader, { justifyContent: "center" }]}>
                      <View style={[applyStyles.Modaltab, GlobStyles.flexCenter]}>
                        <ThemedText style={applyStyles.tabText}>1</ThemedText>
                        <ThemedText style={applyStyles.tabText}>Applied WFH</ThemedText>
                      </View>
                      <View>
                        <ThemedText style={[applyStyles.modalMessage, GlobStyles.flexCenter]}>
                          Now on every employee is only eligible for 1
                          WFH per month that to if its a genuine case and
                          the reason seems appropriate and approved by
                          management. Although one can apply for more
                          then 1 WFH but the remuneration will be adjusted
                          as per the co. terms.
                        </ThemedText>
                      </View>
                    </View>
                    <View>
                      <View style={[GlobStyles.flexRow, GlobStyles.flex, GlobStyles.flexCenterBetween, GlobStyles.w100]}>

                        <DatePicker
                          label={"From"}
                          icon={icons.calendar}
                          date={date.From}
                          setDate={setDate}
                        />
                        <ThemedText style={[GlobStyles.flexCenter]}>
                          -
                        </ThemedText>
                        <DatePicker label={"To"} icon={icons.calendar}
                          date={date.To}
                          setDate={setDate}
                        />
                      </View>
                      <View style={[GlobStyles.flexCenter, { flex: 1 }]}>
                        <View style={[GlobStyles.flex, GlobStyles.flexRow,  applyStyles.calenderButton, GlobStyles.flexCenterBetween, GlobStyles.transparent.button.small]}>
                          <ThemedText>{(date.To && date.From) && moment(date.To).diff(moment(date.From), 'days') + 1} Days</ThemedText>
                        </View>
                      </View>
                    </View>
                    <View>
                      <TextInput
                        multiline={true}
                        placeholder={'Type your Reason Here'}
                        numberOfLines={10}
                        placeholderTextColor={theme == "dark" ? COLORS.light : COLORS.dark}
                        style={applyStyles.applyReason} />

                      <View style={[GlobStyles.flexCenter, GlobStyles.flex]}>
                        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['red', 'orange']} style={[GlobStyles.Button.medium, GlobStyles.flexCenter, { width: "50%" }]}>
                          <Pressable onPress={handleShow} style={applyStyles.scanTab} >
                            <ThemedText style={applyStyles.tabText}>Apply Now</ThemedText>
                          </Pressable>
                        </LinearGradient>
                      </View>

                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </SafeAreaView>
          {/* </LinearGradient> */}
        </ImageBackground>
      </Modal>
    </View>
  )
}


export default ApplyWFH
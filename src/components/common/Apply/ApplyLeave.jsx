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
import { RadioButton } from 'react-native-paper'
import TimeRangePicker from '../../../utils/TimeRangePicker'

const ApplyLeave = () => {
  const [show, setShow] = useState(false)
  const initialDateState = {
    From: null,
    To: null,
    InTime: null,
    OutTime: null,
    Date: null,
  }
  const [date, setDate] = useState(initialDateState)
  const [checked, setChecked] = useState('Full')

  const theme = useColorScheme()
  const handleShow = () => setShow(true)
  const handleHide = () => setShow(false)
  const handleChange = (value) => {
    setChecked(value)
  }

  return (
    <View style={[applyStyles.applyHeader]}>
      <View style={GlobStyles.flexRow}>
        <View style={[applyStyles.LeaveTab(1), GlobStyles.flexCenter]}>
          <ThemedText style={applyStyles.tabText}>1</ThemedText>
          <ThemedText style={applyStyles.tabText}>EL</ThemedText>
        </View>
        <View style={[applyStyles.LeaveTab(10), GlobStyles.flexCenter]}>
          <ThemedText style={applyStyles.tabText}>10</ThemedText>
          <ThemedText style={applyStyles.tabText}>PL</ThemedText>
        </View>
      </View>

      <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['red', 'orange']} style={GlobStyles.Button.medium}>
        <Pressable onPress={handleShow} style={applyStyles.scanTab} >
          <ThemedText style={applyStyles.tabText}>Apply Leaves</ThemedText>
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
                      <View style={[GlobStyles.flexRow]}>
                        <View style={[applyStyles.LeaveModalTab(1), GlobStyles.flexCenter]}>
                          <ThemedText style={applyStyles.tabText}>1</ThemedText>
                          <ThemedText style={applyStyles.tabText}>EL</ThemedText>
                        </View>
                        <View style={[applyStyles.LeaveModalTab(10), GlobStyles.flexCenter]}>
                          <ThemedText style={applyStyles.tabText}>10</ThemedText>
                          <ThemedText style={applyStyles.tabText}>PL</ThemedText>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View style={[GlobStyles.flexRow, GlobStyles.flex, { justifyContent: "space-around" }, GlobStyles.w100,]}>
                        <Pressable onPress={() => handleChange("Full")} style={[GlobStyles.flexRow, GlobStyles.flexCenter,]}>
                          <RadioButton
                            value="Full"
                            label="Carto Base MAp"
                            status={checked === 'Full' ? 'checked' : 'unchecked'}
                            onPress={() => handleChange("Full")}
                            color="white"
                            uncheckedColor="white"
                          />
                          <ThemedText>Planned Leaves</ThemedText>
                        </Pressable>

                        <Pressable onPress={() => handleChange("Half")} style={[GlobStyles.flexRow, GlobStyles.flexCenter]}>
                          <RadioButton
                            value="Half"
                            label="Carto Base MAp"
                            status={checked === 'Half' ? 'checked' : 'unchecked'}
                            onPress={() => handleChange("Half")}
                            color="white"
                            uncheckedColor="white"
                          />
                          <ThemedText style={GlobStyles.TextMedium}>Half-Day Leaves</ThemedText>
                        </Pressable>
                      </View>



                      {checked == "Full" ?
                        <>
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
                            <View style={[GlobStyles.flex, GlobStyles.flexRow, applyStyles.calenderButton, GlobStyles.flexCenterBetween, GlobStyles.transparent.button.small]}>
                              <ThemedText>{(date.To && date.From) && moment(date.To).diff(moment(date.From), 'days') + 1} Days</ThemedText>
                            </View>
                          </View>
                          <View style={{height: 40}}>
                            <ThemedText style={[GlobStyles.flexCenter, applyStyles.detailText]}>This date range is coming under</ThemedText>
                            {(date.To && date.From) && <ThemedText style={[GlobStyles.flexCenter, applyStyles.detailText, { textDecorationLine: 'underline' }]}> {(moment(date.To).diff(moment(), 'days') < 6) ? 'EMERGENCY LEAVES ' : 'PLANNED LEAVES '}</ThemedText>}
                          </View>
                        </>
                        :
                        <>
                          <View style={[GlobStyles.flexRow, GlobStyles.flex, GlobStyles.flexCenterBetween, GlobStyles.w100]}>
                            <TimeRangePicker
                              label={"InTime"}
                              date={date.InTime}
                              setDate={setDate}
                            />
                            <ThemedText style={[GlobStyles.flexCenter]}>
                              -
                            </ThemedText>
                            <TimeRangePicker
                              label={"OutTime"}
                              date={date.OutTime}
                              setDate={setDate}
                            />
                          </View>
                          <View style={GlobStyles.flexCenter}>
                            <DatePicker
                              label={"Date"}
                              icon={icons.calendar}
                              date={date.Date}
                              setDate={setDate}
                            />
                          </View>
                          <View>
                            <ThemedText style={[GlobStyles.flexCenter, applyStyles.detailText]}>This date range is coming under</ThemedText>
                            {(date.InTime && date.OutTime) && <ThemedText style={[GlobStyles.flexCenter, applyStyles.detailText, { textDecorationLine: 'underline' }]}> {(moment(date.Date).diff(moment(), 'days') < 6) ? 'EMERGENCY LEAVES ' : 'PLANNED LEAVES '}</ThemedText>}

                          </View>
                        </>
                      }

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
                          <Pressable onPress={handleShow} style={[applyStyles.scanTab, { width: 150, padding: 15 }]} >
                            <ThemedText style={applyStyles.tabText}>Apply For Leaves</ThemedText>
                          </Pressable>
                        </LinearGradient>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
      </Modal>
    </View>
  )
}


export default ApplyLeave
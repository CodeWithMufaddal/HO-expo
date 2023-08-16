import { View, Text } from 'react-native'
import React from 'react'
import { Structure, ThemedText } from '../../src/components'
import moment from 'moment/moment'
import GlobStyles from '../../src/style/index.style'
import styles from '../../src/components/home/welcome/welcome.style'
import { LinearGradient } from 'expo-linear-gradient'
import { DayOffStyles } from '../../src/style'

const DayOff = () => {
  const holidays = {
    0: [{
      resone: "Muharram",
      date: "27 Jan 23"
    }],
    1: [{
      resone: "Independence Day",
      date: "27 Feb 23"
    }],
    2: [{
      resone: "Muharram",
      date: "27 Mar 23"
    }],
    3: [{
      resone: "Muharram",
      date: "27 Apr 23"
    }],
    4: [{
      resone: "Muharram",
      date: "27 May 23"
    }],
    5: [{
      resone: "Muharram",
      date: "27 Jun 23"
    }],
    6: [
      {
        resone: "Moharram",
        date: "27 Jul 23"
      }],
    7: [{
      resone: "Independence Day",
      date: "15 Aug 23"
    }, {
      resone: "Raksha Bandhan",
      date: "30 Aug 23"
    }],
    8: [{
      resone: "Janmasthami",
      date: "07 Sep 23"
    }, {
      resone: "Ganesh Chaturthi",
      date: "19 Sep 23"
    }, {
      resone: "Ganesh Visarjan",
      date: "28 Sep 23"
    }],
    9: [{
      resone: "Gandhi Jayanthi",
      date: "02 Oct 23"
    }, {
      resone: "Dussehra",
      date: "24 Oct 23"
    }],
    10: [{
      resone: "Diwali",
      date: "10 Nov 23"
    }, {
      resone: "Diwali",
      date: "13 Nov 23"
    }, {
      resone: "Diwali",
      date: "14 Nov 23"
    }, {
      resone: "Diwali",
      date: "15 Nov 23"
    }],
    11: [{
      resone: "Christmas",
      date: "25 Dec 23"
    }],
  }

  const currentDate = moment();
  let letestEvent = 0
  return (
    <Structure>
      <View style={GlobStyles.spaceHorizontal}>
        {Object.entries(holidays).map(([month, monthHolidays]) =>
          currentDate.month() <= month ? (
            <View key={month}>
              <ThemedText style={DayOffStyles.DayOffText}>Day Of In {moment().month(month).format('MMMM')}</ThemedText>
              {monthHolidays.map(({ resone, date }, index) => {
                const holidayDate = moment(date, 'DD MMM YY');
                if (holidayDate.isSameOrAfter(currentDate, 'day')) {
                  letestEvent++
                  return (
                    <View
                      key={index}
                      style={[
                        DayOffStyles.DayOffBoxContainer,
                        GlobStyles.transparent.container,
                        GlobStyles.flexRow,
                        GlobStyles.flexCenterBetween
                      ]}
                    >
                      <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={letestEvent === 1 ? ['red', 'orange'] : ['transparent', 'transparent']} style={[GlobStyles.transparent.button.small, DayOffStyles.DayOffDateButton, letestEvent === 1 && { borderWidth: 1, borderColor: "#fff" }]}>
                        <ThemedText style={styles.tabDeskText}>
                          {moment(date, 'DD MMM YYYY').format('DD MMM YY')}
                        </ThemedText>
                      </LinearGradient>
                      <ThemedText style={[DayOffStyles.DayOffText, { display: 'flex', flex: 1, alignItems: "center", justifyContent: "center", marginLeft: 30 }]}>
                        {resone}
                      </ThemedText>
                      <Text style={{ color: 'grey', margin: 10, width: 30 }}>
                        {moment(date, 'DD MMM YYYY').format('ddd')}
                      </Text>
                    </View>
                  );
                } else {
                  return null;
                }
              })}
            </View>
          ) : null
        )}
      </View>
    </Structure >
  )
}

export default DayOff
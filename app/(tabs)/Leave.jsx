import React from 'react'
import { View, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import { images } from '../../src/constants'
import { GlobStyles } from '../../src/style'
import { ApplyLeave, PastApplyCard, ThemedText } from '../../src/components'
import moment from 'moment'

const Leave = () => {


  const LeaveData = [
    {
      startDate: "2 may 2023",
      endDate: "3 may 2023",
      applyDate: "04 apr 23, 10:25 AM",
      status: "Pending",
      Days: 2,
      type: "EL-PL",
      reason: "i am at my home for my sister engagement"
    },
    {
      startDate: "03 jan 2023",
      endDate: "03 jan 2023",
      applyDate: "02 jan 23, 10:25 AM",
      status: "Rejected",
      Days: 1,
      type: "PL",
      reason: "meri train Tuesday ko raat ko hee jo subha pohucha dengi muje pune"
    },
    {
      startDate: "2 Oct 2023",
      endDate: "5 Oct 2023",
      applyDate: "04 apr 23, 10:25 AM",
      status: "Pending",
      Days: 2,
      type: "PL",
      reason: "i am at my home for my sister engagement"
    },
    {
      startDate: "29 Sep 2023",
      endDate: "29 Sep 2023",
      applyDate: "03 Aug 23, 10:25 AM",
      status: "Approved",
      Days: 2,
      type: "PL",
      reason: "i am at my home for my sister engagement"
    },
    {
      startDate: "2 Aug 2023",
      endDate: "15 Aug 2023",
      applyDate: "04 apr 23, 10:25 AM",
      status: "Rejected",
      Days: 2,
      type: "EL-PL",
      reason: "i am at my home for my sister engagement"
    },
    {
      startDate: "25 jul 2023",
      endDate: "26 jul 2023",
      applyDate: "25 jul 23, 10:25 AM",
      status: "Approved",
      Days: 2,
      type: "PL",
      reason: "due to moharram"
    },
    {
      startDate: "26 Dec 2022",
      endDate: "28 Dec 2022",
      applyDate: "20 Dec 23, 12:25 PM",
      status: "Pending",
      Days: 3,
      type: "EL",
      reason: "i have to goo for home trip after two days that is why i need this WFH."
    },
  ]




  const categorizedData = LeaveData.reduce((result, item) => {
    const endDate = moment(item.endDate, 'D MMMM YYYY'); // Assuming endDate is stored in the item object
    const category = endDate.isBefore(moment()) ? 'Past' : 'onGoing';
    result[category].push(item);
    return result;
  }, { onGoing: [], Past: [] });

  return (
    <ImageBackground source={images.bg} style={[GlobStyles.backgroundImage]}>
        <SafeAreaView style={GlobStyles.safeAreaView}>
          <View style={[GlobStyles.spaceHorizontal, { marginTop: 138 }]}>
            <ApplyLeave />
          </View>
          <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 85 }}>
              {LeaveData && categorizedData?.onGoing?.map((data, i) => <PastApplyCard key={i} data={data} />)}
              {Boolean(categorizedData.Past.length) && (
                <View>

                  {Boolean(categorizedData.Past.length && categorizedData.onGoing.length) && <View style={GlobStyles.hrLine} />}

                  <ThemedText style={[GlobStyles.spaceHorizontal, { marginVertical: 10 }]}>
                    Past Leave
                  </ThemedText>
                </View>
              )}
              {LeaveData && categorizedData?.Past?.map((data, i) => <PastApplyCard key={i} data={data} />)}
            </ScrollView>
          </View>
        </SafeAreaView>
    </ImageBackground>
  )
}

export default Leave
import React from 'react'
import {  View } from 'react-native'
import { NoteCard, Structure} from '../../src/components'

const index = () => {
  let notification = [
    {
      note: "Greetings to all. We will be working from home on June 14 due to palkhi. Do not forget to send email while logging in and out.",
      time: "13 Jun 2023"
    },
    {
      note: "Hello You are informed that whoever comes to the office before 10:30 AM can scan, but the average time will start from 10:30 AM onwards. If you have any doubts please coordinate with HR",
      time: "15 May 2023"
    },
    {
      note: "Please note that from tomorrow, i.e., May 4, our scan-in time will start at 10.30 a.m., so do not scan before 10.30 a.m it will not work.",
      time: "03 May 2023"
    },
    {
      note: "Please make sure that whenever you reset your hatsoffdigital.com password you mention your mobile number or alternate email ID for the OTP",
      time: "02 May 2023"
    },
    {
      note: "Hello All, From Tuesday i.e 02nd May, our office timings are 10.30 to 07.30. Thanks",
      time: "28 Apr 2023"
    },
    {
      note: "Hello All, From Tuesday i.e 02nd May, our office timings are 10.30 to 07.30. Thanks",
      time: "28 Apr 2023"
    },
    {
      note: "Hello All, From Tuesday .30 to 07.30. Thanks Hello All, From Tuesday i.e 02nd May, our office timings are 10.30 to 07.30. Thanks Hello All, From Tuesday i.e 02nd May, our office timings are 10.30 to 07.30. Thanks Hello All, From Tuesday i.e 02nd May, our office timings are 10.30 to 07.30. ThanksHello All, From Tuesday i.e 02nd May, our office timings are 10.30 to 07.30. Thanks ",
      time: "28 Apr 2023"
    },
    {
      note: "Hello All, From Tuesday i.e 02nd May, our office timings are 10.30 to 07.30. Thanks",
      time: "28 Apr 2023"
    },
  ]
  return (
    <Structure>
      <View>
        {notification && notification.map(({ note, time }, i) => <NoteCard key={i} numberOfLines={4} note={note} time={time} />)}
      </View>
    </Structure>
  )
}

export default index
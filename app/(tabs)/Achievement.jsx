import { View } from 'react-native'
import React from 'react'
import { Structure, ThemedText } from '../../src/components'
import GlobStyles from '../../src/style/index.style'
import styles from '../../src/components/home/welcome/welcome.style'

const Achievement = () => {
    const achievement = [
        { note: "This is our 5th office. the first 2 were shops 1 besides other." },
        { note: "First official salary drawn by each partner was INR - 650/-" },
        { note: "Our first client - We worked without cost Yet could not retain a month." },
        { note: "Our first employee was hired at INR-4000/-" },
        { note: "Initial 2 hirings were done for SEO. Both part-timers." },
        { note: "Fahad was the first SMM hired in house. Came as a walk-in or you can call it a surprise." },
        { note: "People would hesitate to come for an interview at our office. It was a wooden godown" },
        { note: "During the inception of Hats-Off, the avg age of founders was 23 - 24." },
        { note: "The 3 Founders are childhood friends, reunited post 10 years for an event & thats when Hats-Off evolved." },
        { note: '"HATS-OFF" the name came into the mind of 3 people simultaneously. We were 4 initially!!' },
        { note: 'HATS: H- Husain, A- Ditched before the deed came in place, T- Taher, S- Shabbir' },
        { note: 'Abdeali started a career as SEO, then learned Design, then Web & now a project manager.' },
        { note: 'Until initial 5 hirings we were not sure if we could sustain the cost. But luckily it worked :)' },
        { note: 'We knew Chanta about Digital. Just the term excited us.' },
        { note: 'Our second investment (loss) was a result of a mistake.' },
        { note: 'Our first investment was "Partnership Deed"' },
        { note: 'Our first office - was cleaned & painted by Taher & Shabbir day before official inception.' },
        { note: 'Our first paid client came after 3 months of inception. Paid - 5k/- per month' },
        { note: 'Our first logo was designed on MS-Paint Dint last for a year' },
        { note: 'If you get to hold on to our first presentation - You would resign :P' },
        { note: `Shabbir's marriage is a saga blossomed at Hats-Off.` },
        { note: 'The first web developer hired had fooled us. She knew nothing. But neither did we so the repercussion' },
        { note: 'Before Digital - We planned to start with Cutlery, Paint, Hardware & more. Lucky we none were freezed' },
        { note: 'During Inception - People used to laugh when told we work on Social Media' },
        { note: 'None of our paid clients were referred to or connected by any family or friends during the initial phase.' },
        { note: 'Clients taught us all that we do today.' },
        { note: `Our initial big clients were lost as we fought with them. That's kiddish, we know but we were kinda kids.` },
        { note: `Once one of the cofounder's images was tried to be tarnished over FB. We f****d the person royally on his post & got a lot of support.` },
    ]
    return (
        <Structure>
            <View>
                {achievement && achievement.map(({ note, time }, i) => {
                    return (
                        <View key={i} style={[GlobStyles.transparent.container, styles.notificationContainer]}>
                            <ThemedText style={styles.achievementText}>{note}</ThemedText>
                        </View>
                    )
                })}
            </View>
        </Structure>
    )
}

export default Achievement

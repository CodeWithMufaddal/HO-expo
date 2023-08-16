import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'
import { Pressable } from 'react-native'

const ScreenHeaderBtn = ({ iconUrl, dimension, handleNavigation}) => {
  return (
      <Pressable style={styles.btnContainer} onPress={handleNavigation}>
        <Image
          source={iconUrl}
          resizeMode="center"
          style={styles.btnImg(dimension)}
        />
      </Pressable>
  )
}

export default ScreenHeaderBtn
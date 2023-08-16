import React, { useCallback, useState } from 'react';
import { View, Pressable, Image } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { GlobStyles, applyStyles } from '../style';
import { ThemedText } from '../components/Themed';
import styles from '../components/common/header/screenheader.style';
import moment from 'moment';

const DatePicker = ({ label, stateName, icon, date, setDate }) => {
    const [pickerVisible, setPickerVisible] = useState(false);
    const handleDateChange = useCallback((selectedDate) => {
        if (selectedDate instanceof Date) {
            setDate(prev => ({ ...prev, [stateName || label]: selectedDate }));

        }
        setPickerVisible(false);
    }, [pickerVisible]);

    const renderPicker = () => {
        if (pickerVisible) {
            return (
                <RNDateTimePicker
                    style={{ width: 200 }}
                    value={date || new Date()}
                    mode="date"
                    placeholder="Select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2020-12-12"
                    confirmBtnText="OK"
                    cancelBtnText="Cancel"
                    onChange={(event, selectedDate) => handleDateChange(selectedDate)}
                />
            );
        }
    };

    return (
        <View style={{ width: '45%' }}>
            <Pressable onPress={() => setPickerVisible(!pickerVisible)}>
                <View style={[GlobStyles.flex, GlobStyles.flexRow,  applyStyles.calenderButton, GlobStyles.flexCenterBetween, GlobStyles.transparent.button.small]}>                    
                    <ThemedText style={applyStyles.labelText}>
                        {date ? moment(date).format("D-M-YYYY") : label}
                    </ThemedText>
                    <View style={[applyStyles.btnContainer, GlobStyles.dFlex, { borderWidth: 0, justifyContent: 'flex-end' }]}>
                        <Image
                            source={icon}
                            resizeMode="center"
                            style={[styles.btnImg('70%')]}
                        />
                    </View>
                </View>
            </Pressable>

            {renderPicker()}
        </View>
    );
};

export default DatePicker;

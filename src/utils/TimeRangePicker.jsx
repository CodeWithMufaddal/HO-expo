import React, { useCallback, useState } from 'react';
import { View, Pressable} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { GlobStyles, applyStyles } from '../style';
import { ThemedText } from '../components/Themed';
import moment from 'moment';

const TimeRangePicker = ({ label, stateName, date,  setDate }) => {
    const [pickerVisible, setPickerVisible] = useState(false);

    const handleStartTimeChange = useCallback((selectedTime) => {
        if (selectedTime instanceof Date) {
            setDate(prev => ({ ...prev,  [stateName || label]: selectedTime }));

        }
        setPickerVisible(false);
    }, []);
    const renderPicker = () => {
        if (pickerVisible) {
            return (
                <RNDateTimePicker
                    style={{ width: 200 }}
                    value={date || new Date()}
                    mode="time"
                    display='spinner'
                    // is24Hour={true} // Adjust to your preference
                    confirmBtnText="OK"
                    cancelBtnText="Cancel"
                    onChange={(event, selectedTime) => handleStartTimeChange(selectedTime)}
                />
            );
        }
    };

    return (
        <View style={{ width: '45%' }}>
            <Pressable onPress={() => setPickerVisible(!pickerVisible)}>
                <View style={[GlobStyles.flex, GlobStyles.flexRow,  applyStyles.calenderButton, GlobStyles.flexCenterBetween, GlobStyles.transparent.button.small]}>
                    <ThemedText style={applyStyles.labelText}>
                        {label}
                    </ThemedText>
                    <ThemedText style={applyStyles.labelText}>
                        {date ? moment(date).format("h:mm A") : "--:-- --"}
                    </ThemedText>
                </View>
            </Pressable>

            {renderPicker()}
        </View>
    );
};

export default TimeRangePicker;

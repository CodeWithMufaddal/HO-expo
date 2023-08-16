import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { GlobStyles, applyStyles } from '../../../style'
import { ThemedText, ThemedView } from '../../Themed'
import { LinearGradient } from 'expo-linear-gradient'
import Modal from 'react-native-modal'
import moment from 'moment'
import { SHADOWS } from '../../../constants'


const PastApplyCard = ({ data }) => {
    const { startDate, endDate, applyDate, status, reason, type } = data
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    return (
        <View style={[GlobStyles.transparent.container, GlobStyles.spaceHorizontal, applyStyles.applyContainer]}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <View style={[GlobStyles.transparent.button.small, applyStyles.applyDateBox]}>
                    <ThemedText style={applyStyles.dates}>{startDate} to {endDate}</ThemedText>
                </View>
            </View>

            {status == "Pending" && <View style={[applyStyles.messageBox]}>
                <ThemedText style={[applyStyles.message, GlobStyles.flex]}>UserName, you have taken Work From Home, but HR has not yet approved it, so please coordinate with HR</ThemedText>
            </View>}

            <View style={[GlobStyles.flex, GlobStyles.flexCenter, GlobStyles.flexRow, applyStyles.container]}>
                {/* Left column */}
                {type && (
                    <>
                        <View style={[applyStyles.column, { justifyContent: 'flex-end' }]}>
                            <ThemedText style={applyStyles.grayText}>Type:</ThemedText>
                            <ThemedText style={applyStyles.message}>{type}</ThemedText>
                        </View>
                        <View style={applyStyles.verticalLine} />
                    </>
                )}

                {/* Middle column */}
                <View style={[GlobStyles.flexRow, applyStyles.column, { width: "auto" }]}>
                    <ThemedText style={[applyStyles.grayText]}>Day:</ThemedText>
                    <ThemedText style={[applyStyles.message]} > {startDate && endDate && moment(endDate, "D MMM YY").diff(moment(startDate, "D MMM YY"), 'days') + 1} </ThemedText>

                </View>
                <View style={applyStyles.verticalLine} />

                {/* Right column */}
                <View style={[applyStyles.column, { justifyContent: 'flex-start' }]}>
                    <ThemedText style={applyStyles.grayText}>Reason:</ThemedText>
                    <View style={applyStyles.notificationBottomContainer}>
                        <Pressable onPress={handleShow}>
                            <ThemedText style={[applyStyles.message]}>View</ThemedText>
                        </Pressable>

                        {/* Modal */}
                        <Modal
                            isVisible={show}
                            hasBackdrop={false}
                            onBackButtonPress={handleClose}
                        >
                            {/* Modal content */}
                            <ThemedView style={[applyStyles.Modal, SHADOWS.medium, { display: 'flex', alignItems: 'center' }]}>
                                <View>
                                    <ThemedText style={applyStyles.ModalText}>{reason}</ThemedText>
                                </View>
                                <Pressable onPress={handleClose}>
                                    {/* Close button */}
                                    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['red', 'orange']} style={[applyStyles.scanButton, GlobStyles.Button.small, { paddingHorizontal: 30, paddingVertical: 10 }]}>
                                        <ThemedText style={applyStyles.confirmButton}>Okey</ThemedText>
                                    </LinearGradient>
                                </Pressable>
                            </ThemedView>
                        </Modal>
                    </View>
                </View>
            </View>



            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <View style={[applyStyles.status(status)]}>
                    <ThemedText style={applyStyles.tabText}>{status}</ThemedText>
                </View>
                <ThemedText style={[applyStyles.grayText, applyStyles.bottomApplyDate]}>{applyDate}</ThemedText>
            </View>
        </View>
    )
}

export default PastApplyCard
import{ Platform, StyleSheet } from 'react-native'
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        paddingTop: statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headeing: {
        color: colors.purple,
        fontFamily: 'roboto_500',
        fontSize:  34
    }
})

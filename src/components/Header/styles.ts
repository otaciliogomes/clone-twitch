import{ StyleSheet } from 'react-native'

import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 14,
        paddingRight: 14,
        paddingLeft: 14,

    },
    avatar: {
        backgroundColor: colors.tag,

        width: 32,
        height: 32,
        borderRadius: 16,
        borderColor: colors.primary,
    },
    onlineStatus: {
        width: 10,
        height: 10,
        borderRadius: 10,

        backgroundColor: colors.green,
        position: 'absolute',
        bottom: 0,
        top: 0,
    },
    rightSide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        marginLeft: 20
    },

})
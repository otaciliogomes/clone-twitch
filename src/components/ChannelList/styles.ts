import { StyleSheet} from 'react-native'
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    list: {
        paddingTop: 8,
    },
    channelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingRight: 14,
        marginBottom: 24
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        backgroundColor: colors.tag,
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    column: {
        paddingLeft: 10
    },
    userName: {
        color: colors.black,
        fontFamily: 'roboto_500',
        fontSize: 16
    },
    info: {
        marginTop: 1,
        color: colors.gray,
        fontSize: 13
    },
    rightSide: {

    },
    whiteCircle: {
        backgroundColor: colors.black,
        width: 8,
        height: 8,
        borderRadius: 4.5,
        opacity: 0.85
    }
});
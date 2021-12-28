import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    list: {
        paddingTop: 8,
        paddingBottom: 24
    },
    container: {

    },
    streamContainer: {
        flexDirection: 'row',
        flex: 1,

        marginBottom: 24,
        marginRight: 24,
        // backgroundColor: 'red'
    },
    image: {
        width: 119,
        height: 66,
    },
    streamColumn: {
        marginLeft: 11,
        flex: 1
    },
    TagRow: {
        marginTop: 8,
        flexDirection: 'row',
    },
    streamRow: {
        height: 66,
        justifyContent: 'space-between'
    },
    streamHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    streamAvatar: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: colors.tag,
    },
    streamUserName: {
        color: colors.black,
        marginLeft: 5,
        fontFamily: 'roboto_500',
    },
    tagView: {
        backgroundColor: colors.tag,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginRight: 5,
    },
    tagText: {
        color: colors.black,
        fontFamily: 'roboto_500',
        fontSize: 13
    },
    streamDescription: {
        color: colors.black
    },
    streamCategories: {
        color: colors.gray,
        fontFamily: 'roboto_500'
    }

});
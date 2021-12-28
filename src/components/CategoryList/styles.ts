import { StyleSheet} from 'react-native'
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    categoryContainer: {
        marginRight: 10
    },
    categoryImage: {
        width: 98,
        height: 130
    },
    categoryName: {
        marginTop: 5,
        maxWidth: 98,
        color: colors.black,
        fontFamily: 'roboto_700',
        fontSize: 13.5
    },
    categoryStatus: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        marginLeft: 4,
        marginBottom: 1,
        fontFamily: 'roboto_500',
        color: colors.gray
    },
    redCircle: {
        backgroundColor: colors.red,
        borderRadius: 10,
        width: 8,
        height: 8,
    },
    list: {
        paddingTop: 8,
        paddingBottom: 24
    }
    
});

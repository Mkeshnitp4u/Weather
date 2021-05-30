import { StyleSheet } from 'react-native'
export const DashboardStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: '#E8F8F5'
    },
    cardContainer: {
        flex: 0.4,
        borderWidth: 2,
        borderColor: 'black'
    },
    cardView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    celciusText: {
        fontSize: 80,
        fontWeight: 'bold'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    listStyle: { flex: 0.6 },
    buttonStyle: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#D5DBDB'
    },
    listViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loaderViewStyle: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    lottieViewStyle: {
        width: 80,
        height: 80,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    retryButton: {
        marginTop: 30,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
    }
});

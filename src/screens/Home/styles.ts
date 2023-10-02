import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        flexDirection: 'row',
        padding: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
    },
    body: {
        marginTop: -30,
        marginLeft: 20,
        marginRight: 20
    },
    newTask: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
        marginRight: 7
    },
    buttonAddNewTask: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dashboard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    dashboardTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    dashboardTitleCreated: {
        fontSize: 16,
        color: '#4EA8DE',
        fontWeight: 'bold',
    },
    dashboardTitleCompleted: {
        fontSize: 16,
        color: '#8284FA',
        fontWeight: 'bold',
    },
    qtd: {
        backgroundColor: '#333333',
        borderRadius: 50,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qtdText: {
        color: '#D9D9D9',
        fontSize: 16
    },
    areaItemsCadastrados: {
        marginTop: 25,
    },
    linhaHorizontal: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#333333'
    },
    bodyZeroItemsCadastrados: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBoldZeroItemsCadastrados: {
        color: '#F2F2F2',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20
    },
    textZeroItemsCadastrados: {
        color: '#808080',
        fontSize: 16
    }
})
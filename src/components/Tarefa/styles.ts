import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'auto',
        backgroundColor: '#262626',
        padding: 25,
        borderRadius: 7,
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    textConclido: {
        fontSize: 16,
        color: '#808080',
        textDecorationLine: 'line-through'
    }
})
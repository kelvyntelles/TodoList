import { View, Text } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/AntDesign';

export function Logo() {
    return (
        <View style={styles.container}>
            <Icon name="rocket1" size={32} color="#4EA8DE" />
            <View style={styles.title}>
                <Text style={styles.logoTo}>To</Text>
                <Text style={styles.logoDo}>do</Text>
            </View>
        </View>
    )
}

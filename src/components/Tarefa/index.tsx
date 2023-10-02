import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Circle from 'react-native-vector-icons/Entypo'
import CircleDone from 'react-native-vector-icons/AntDesign'
import Trash from 'react-native-vector-icons/EvilIcons'

type Props = {
    titulo: string
    concluido: boolean
    concluirTarefa: () => void
    removerTarefa: () => void
}

export function Tarefa({ titulo, concluido, concluirTarefa, removerTarefa }: Props) {
    return (
        <View style={styles.container}>
            {
                concluido !== true ?
                <>
                    <TouchableOpacity onPress={concluirTarefa}>
                        <Circle name="circle" size={20} color="#4EA8DE" />
                    </TouchableOpacity>
                    <Text style={styles.text}>{titulo}</Text>
                    <TouchableOpacity onPress={removerTarefa}>
                        <Trash name="trash" size={24} color="#808080" />
                    </TouchableOpacity>  
                </>  
                : 
                <>
                    <TouchableOpacity onPress={concluirTarefa}>
                        <CircleDone name="downcircle" size={20} color="#4EA8DE" />
                    </TouchableOpacity>
                    <Text style={styles.textConclido}>{titulo}</Text>
                    <TouchableOpacity onPress={removerTarefa}>
                        <Trash name="trash" size={24} color="#808080" />
                    </TouchableOpacity>  
                </>  
            }
        </View>
    )
}
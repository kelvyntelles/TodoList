import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, FlatList, Alert } from "react-native";
import { styles } from './styles'
import { Logo } from "../../components/Logo";
import Icon from 'react-native-vector-icons/Ionicons';
import IconList from 'react-native-vector-icons/FontAwesome5'
import { Tarefa } from '../../components/Tarefa';

interface Tarefa {
    titulo: string,
    concluido: boolean
}

export function Home() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([
        {
            titulo: 'trabalhar na pmv',
            concluido: true,
        },
        {
            titulo: 'teste',
            concluido: false,
        },
    ])

    const [tituloTarefa, setTituloTarefa] = useState('')

    function handleAddNovaTarefa() {
        const novaTarefa = {
            titulo: tituloTarefa,
            concluido: false
        }

        setTarefas(prevState => [...prevState, novaTarefa])
        setTituloTarefa('')
    }

    function handleConcluirTarefa(titulo: string) {
        const novaLista = tarefas.map((tarefa) => {
            if (tarefa.titulo == titulo) {
                tarefa.concluido = !tarefa.concluido
            }

            return tarefa
        })

        setTarefas(novaLista)
    }

    function handleRemoverTarefa(titulo: string) {
        Alert.alert('Remover', `Remover tarefa ${titulo}?`, [
            {
                text: 'Sim',
                onPress: () => setTarefas(prevState => prevState.filter(tarefa => tarefa.titulo !== titulo))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function getTotalTarefas() {
        return tarefas.length
    }

    function getTotalTarefasConcluidas() {
        if(tarefas.length !== 0) {
            let total = 0
            for(let tarefa = 0; tarefa < tarefas.length; tarefa++) {
                if(tarefas[tarefa].concluido === true) {
                    total += 1
                }
            }

            return total
        } else {
            return 0
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
            </View>
            <View style={styles.body}>
                <View style={styles.newTask}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Adicionar uma nova tarefa"
                        placeholderTextColor={'#808080'}
                        onChangeText={setTituloTarefa}  
                        value={tituloTarefa}
                    />
                    <TouchableOpacity style={styles.buttonAddNewTask} onPress={handleAddNovaTarefa}>
                        <Icon name="add-circle-outline" size={20} color="#FFF" />
                    </TouchableOpacity>
                </View>
                <View style={styles.dashboard}>
                    <View style={styles.dashboardTitle}>
                        <Text style={styles.dashboardTitleCreated}>Criadas</Text>
                        <View style={styles.qtd}>
                            <Text style={styles.qtdText}>{getTotalTarefas()}</Text>
                        </View>
                    </View>
                    <View style={styles.dashboardTitle}>
                        <Text style={styles.dashboardTitleCompleted}>Concluídas</Text>
                        <View style={styles.qtd}>
                            <Text style={styles.qtdText}>{getTotalTarefasConcluidas()}</Text>
                        </View>
                    </View>
                </View>
                {
                    getTotalTarefas() == 0 ? 
                    <View style={styles.areaItemsCadastrados}>
                        <View style={styles.linhaHorizontal}></View>
                        <View style={styles.bodyZeroItemsCadastrados}>
                            <IconList name="clipboard-list" size={64} color="#808080" />
                            <Text style={styles.textBoldZeroItemsCadastrados}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.textZeroItemsCadastrados}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    </View>
                    : 
                    <View style={styles.areaItemsCadastrados}>
                        <FlatList 
                            data={tarefas}
                            renderItem={({item}) => 
                                <Tarefa 
                                    titulo={item.titulo}
                                    concluido={item.concluido}
                                    concluirTarefa={() => handleConcluirTarefa(item.titulo)}
                                    removerTarefa={() => handleRemoverTarefa(item.titulo)}
                                />
                            }
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                }
            </View>
        </View>
    )
}
import { useState, useEffect } from 'react';
import { View, Text,TextInput,Button,FlatList,TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filtro, setFiltro] = useState('todas');


const salvaTasks = async(tasksTosave) => {
 try {

  await AsyncStorage.setItem('tasks', JSON.stringify(tasksTosave));
  console.log('✅ Salvo com sucesso!');
} catch(error) {
  console.log('❌ Erro ao salvar:', error);
 }
}
const carregaTasks = async() => {
 try {
  const tasksString = await AsyncStorage.getItem('tasks');
  if (tasksString === null) {
    return [];
  }
  return JSON.parse(tasksString);
   } catch(error) {
   console.log('❌ Erro ao carregar:', error);
   return [];
 }

};


function addTask() {
if ( inputText.trim() === "") {
return;
}
const newId = tasks.length > 0
? Math.max(...tasks.map(t => t.id)) + 1 : 1;

  const novaTarefa = {
    id: newId,
    text: inputText,
    done: false
  };

const novasTasks = [...tasks, novaTarefa];
setTasks(novasTasks);
salvaTasks(novasTasks);
setInputText("");
};


  const toggleTasks = (id) => {
  const tasksAtualizadas = tasks.map( task => 
    task.id === id ? { ...task, done: !task.done } :
    task
  )
setTasks(tasksAtualizadas);
salvaTasks(tasksAtualizadas);
  };

 
const deletartask = (id) => {
const tasksFiltradas = tasks.filter(tasks => tasks.id !== id);

setTasks(tasksFiltradas);
salvaTasks(tasksFiltradas);
};
 

  useEffect(() => {
    const carregarDados = async () => {
      const tasksSalvas = await carregaTasks();
      setTasks(tasksSalvas);
    } 
carregarDados();
  }, []);


const totalTasks = tasks.length;
const pendentes = tasks.filter(task => !task.done).length;
const concluidas = tasks.filter(task => task.done).length; 

const tarefasFiltradas = tasks.filter(task => {
  if (filtro === 'todas') return true;
  if (filtro === 'pendentes') return !task.done;
  return task.done; 
});


    return (
  <ScrollView style={styles.container}>
    
    {/* 1️⃣ HEADER COM GRADIENTE */}
    <View style={styles.header}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <Text style={styles.headerTitle}>📱 Task Manager</Text>
        <Text style={styles.headerStats}>
          {totalTasks} tarefas | {pendentes} pendentes | {concluidas} concluídas
        </Text>
      </LinearGradient>
    </View>

    {/* 2️⃣ INPUT NOVA TAREFA */}
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Nova tarefa..."
      />
      <Button title="+" onPress={addTask} />
    </View>

    {/* 3️⃣ FLATLIST - TAREFAS PENDENTES */}
    <Text style={styles.secaoTitulo}>⏳ Pendentes</Text>
    <FlatList
      data={tasks.filter(task => !task.done)}
      scrollEnabled={false} // ✅ IMPORTANTE!
      keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <TouchableOpacity onPress={() => toggleTasks(item.id)}>
            <Text style={styles.taskPending}>
              ⏳ {item.text}
            </Text>
          </TouchableOpacity>
          <Button title="🗑️" onPress={() => deletartask(item.id)} />
        </View>
      )}
    />

    {/* 4️⃣ CARD DIVISOR (MEIO) */}
    <View style={styles.cardDivisor}>
      <View style={styles.linha}>
        <Text style={styles.labelDivisor}>⏳ Pendentes</Text>
        <Text style={styles.numeroDivisor}>{pendentes}</Text>
      </View>
      
      <View style={styles.separador} />
      
      <View style={styles.linha}>
        <Text style={styles.labelDivisor}>✅ Concluídas</Text>
        <Text style={styles.numeroDivisor}>{concluidas}</Text>
      </View>
    </View>

    {/* 5️⃣ FLATLIST - TAREFAS CONCLUÍDAS */}
    <Text style={styles.secaoTituloInvisivel}>✅ Concluídas</Text>
    <FlatList
      data={tasks.filter(task => task.done)}
      scrollEnabled={false} // ✅ IMPORTANTE!
      keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
      renderItem={({ item }) => (
        <View style={[styles.taskItem, styles.taskItemConcluido]}>
          <TouchableOpacity onPress={() => toggleTasks(item.id)}>
            <Text style={styles.taskDone}>
              ✅ {item.text}
            </Text>
          </TouchableOpacity>
          <Button title="🗑️" onPress={() => deletartask(item.id)} />
        </View>
      )}
    />

  </ScrollView>
);
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // HEADER
  header: {
    marginBottom: 20,
  },

  background: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },

  headerStats: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
  },

  // INPUT
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },

  // SEÇÕES
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
  },

  secaoTituloInvisivel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
    opacity: 0.5,
  },

  // TASKS
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  taskItemConcluido: {
    opacity: 0.5,
  },

  taskPending: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },

  taskDone: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#999',
  },

  // CARD DIVISOR
  cardDivisor: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    marginVertical: 20,
    borderRadius: 12,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },

  separador: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },

  labelDivisor: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },

  numeroDivisor: {
    fontSize: 22,
    color: '#667eea', 
    fontWeight: 'bold',
  },
});














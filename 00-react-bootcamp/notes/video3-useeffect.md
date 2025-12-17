# 📝 Vídeo 3: useEffect - React Hook

**Data:** 15/Dezembro/2024  
**Canal:** Matheus Battisti - Hora de Codar  
**Duração:** 12min  
**Link:** https://www.youtube.com/watch?v=0pscg1z4Ihw

---

## 🎯 O que faz?

Assim como o nome sugere, `useEffect` **tem efeitos** e os efeitos dele **dependem de nossas ações**.

É um Hook que permite executar código em momentos específicos do ciclo de vida do componente.

---

## 📌 Quando usar?

Use `useEffect` quando você quiser ter alguma **reação específica** ao:
- ✅ Renderizar algo visualmente
- ✅ Controlar algo dentro do código
- ✅ Executar código após o componente aparecer na tela
- ✅ Reagir a mudanças de estado ou props

---

## 💻 Exemplo Básico

```javascript
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("Roda a cada renderização");
  })
  
  return (
    <div className='app'>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Renderizar
        </button>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default App;
```

**O que acontece:**
- Toda vez que clicar no botão → `count` muda
- `count` muda → componente re-renderiza
- Componente re-renderiza → `useEffect` roda
- `console.log` aparece

---

## 🔄 Array de Dependências

### Sem array (roda sempre):
```javascript
useEffect(() => {
  console.log("Roda TODA renderização");
})
```

### Array vazio (roda 1x):
```javascript
useEffect(() => {
  console.log("Roda APENAS no mount (primeira vez)");
}, [])
```

### Com dependência (roda quando muda):
```javascript
useEffect(() => {
  console.log("Roda quando count mudar");
}, [count])
```

---

## 📊 Casos de Uso

### 1. Fetch de API
```javascript
useEffect(() => {
  fetch('https://api.com/dados')
    .then(res => res.json())
    .then(data => setDados(data))
}, []) // Roda 1x ao carregar
```

### 2. Event Listeners
```javascript
useEffect(() => {
  window.addEventListener('resize', handleResize)
  
  // Cleanup
  return () => window.removeEventListener('resize', handleResize)
}, [])
```

### 3. Sincronizar com estado
```javascript
useEffect(() => {
  document.title = `Count: ${count}`
}, [count]) // Atualiza título quando count muda
```

---

## 🧹 Cleanup (Limpeza)

Quando `useEffect` retorna uma função, essa função roda quando:
- Componente desmonta (sai da tela)
- Antes de rodar o effect de novo

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick')
  }, 1000)
  
  // Cleanup: limpa o timer
  return () => clearInterval(timer)
}, [])
```

**Por que precisa?**
Evita memory leaks (vazamento de memória).

---

## 💡 Insights

1. **useEffect roda APÓS render** - Não bloqueia a tela
2. **Array vazio = componentDidMount** - Roda 1x
3. **Sem array = componentDidUpdate** - Roda toda mudança
4. **Cleanup = componentWillUnmount** - Limpa recursos

---

## ⚠️ Regras Importantes

- ✅ Sempre declare dependências no array
- ✅ Use cleanup pra eventos/timers
- ❌ Não use `async` direto no useEffect
- ❌ Não modifique estado sem condição (loop infinito!)

---

## 🎯 Minha Compreensão

`useEffect` é como um "observador" que reage a mudanças. Ele permite executar código em momentos específicos: ao montar, ao atualizar, ou ao desmontar. É essencial para interagir com coisas externas ao React (APIs, DOM, timers).

**useState** = guarda dados  
**useEffect** = reage a mudanças  

Juntos = app React completo! 💪

---

## ✅ CHECKLIST

- [x] Entendi o que é useEffect
- [x] Sei quando ele roda (com/sem array)
- [x] Entendi cleanup
- [x] Sei casos de uso (API, eventos, etc)

---

**Status:** ✅ Entendido  
**Aplicado:** Counter App (Dia 2)
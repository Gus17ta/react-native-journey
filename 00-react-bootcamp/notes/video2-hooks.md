# 📝 Vídeo 2: React Hooks - useState

**Data:** 15/Dezembro/2024  
**Canal:** Web Dev Simplified  
**Duração:** 15min  
**Link:** https://www.youtube.com/watch?v=O6P86uwfdR0

---

## 🎯 HOOKS - Conceitos Principais

### O que são Hooks?

Hooks são fundamentos que **só podemos usar em componentes funcionais**, e devemos usar com cuidado pois podem corromper o código todo se usados de forma errada.

### Por que usar?

Para que possamos ter componentes com **diferentes funções** dentro do código, cada um com sua responsabilidade específica.

### Como funcionam?

Eles funcionam como uma **integração no código** para dar direção no que você está fazendo. Cada Hook tem sua função específica e você só usará se for de **extrema importância** para não sobrecarregar o código ou deixar ele com funções que não vai usar.

---

## ⚠️ REGRAS DOS HOOKS (IMPORTANTE!)

### ✅ Pode fazer:
- Usar dentro de componentes funcionais
- Usar no nível superior do componente
- Chamar múltiplos Hooks (sempre na mesma ordem)

### ❌ NÃO pode fazer:
- ❌ Usar dentro de `if`
- ❌ Usar dentro de loops (`for`, `while`)
- ❌ Usar dentro de funções aninhadas
- ❌ Usar dentro de condições

### Por quê?
Porque **sempre que a função é chamada no código, os Hooks também são chamados**. Se algo der errado em relação a eles, **o código pode ruir**.

---

## 📌 useState

### O que é?

`useState` é uma forma de definirmos **valores que serão fixos no início**, mas ao decorrer do desenvolvimento **poderão mudar**. Se precisar, o valor pode ser resetado.

É um **valor ao qual damos para uma variável** que será fixa até ter sua alteração, que virá diretamente da função que será escrita logo em seguida.

### Sintaxe:

```javascript
import { useState } from 'react'

const [count, setCount] = useState(0)
//     ↑        ↑              ↑
//   valor   função p/    valor inicial
//           atualizar
```

### Como funciona o setCount?

O `setCount` é uma **função dentro do useState** que irá fazer as **atualizações quando chamado** pela função ou clicado.

No caso de ser um botão, ele pode ter a função de:
- ✅ Aumentar o valor
- ✅ Diminuir o valor  
- ✅ Resetar (dependendo do que esteja fazendo)

### Exemplo Completo:

```javascript
import { useState } from 'react' 

function Contador() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <button onClick={() => setCount(count - 1)}> - </button>
      <span> {count} </span>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  )
}

export default Contador
```

**O que acontece:**
1. `count` começa com valor `0`
2. Quando clica no botão `-`, chama `setCount(count - 1)`
3. React **re-renderiza** o componente com novo valor
4. Span mostra o valor atualizado

---

## 🎨 CONCEITOS EXTRAS

### Render

**Render** é aquilo que nós vemos conforme vamos escrevendo o código e salvando para ver se está tudo certo.

Quando React "re-renderiza", ele **redesenha a tela** com os novos valores.

---

## 💡 INSIGHTS

1. **Hooks têm ordem específica** - Sempre são chamados na mesma ordem
2. **useState "observa" mudanças** - React sabe quando atualizar a tela
3. **setCount não muda direto** - Agenda uma atualização pro próximo render
4. **Componente é uma função** - Que roda toda vez que precisa atualizar

---

## ⚠️ ERROS COMUNS (Aprendi depois):

### Erro 1: Hook fora da função
```javascript
// ❌ ERRADO:
const [count, setCount] = useState(0)
function App() { ... }

// ✅ CERTO:
function App() {
  const [count, setCount] = useState(0)
  ...
}
```

### Erro 2: Modificar state diretamente
```javascript
// ❌ NUNCA:
count = 5

// ✅ SEMPRE:
setCount(5)
```

---

## ❓ DÚVIDAS

### Dúvidas atuais:
- [ ] Por hora nenhuma, mas devem surgir na hora de escrever códigos

### Perguntas respondidas depois:
- [x] Como resetar o valor? → `setCount(0)` volta pro inicial
- [x] Por que não posso fazer `count++`? → State é read-only

---

## 🎯 MINHA COMPREENSÃO

O uso dos Hooks é **extremamente necessário** para criar componentes dinâmicos e interativos. 

`useState` permite criar variáveis que o React "observa", e quando mudamos essas variáveis com `set___()`, React automaticamente atualiza a tela.

---

## ✅ CHECKLIST

- [x] Entendi o que são Hooks
- [x] Sei as regras (não usar em if, loops, etc)
- [x] Entendi useState básico
- [x] Sei a sintaxe `const [x, setX] = useState(valor)`
- [x] Pratiquei no Counter App!

---

**Status:** ✅ Dominado na prática!  
**Próximo:** useEffect
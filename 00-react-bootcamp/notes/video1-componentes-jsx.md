# 📝 Vídeo 1: React in 100 Seconds - Componentes e JSX

**Data:** 15/Dezembro/2024  
**Canal:** Fireship  
**Duração:** 2min  
**Link:** https://www.youtube.com/watch?v=Tn6-PIqc4UM

---

## 🎯 COMPONENTES

### O que é:
Componente é uma forma de fazer e reutilizar interfaces para fazer funções. Como se fosse o JavaScript que devolve uma sintaxe entendida pela linguagem.

É como uma função JavaScript que retorna interface (UI). Posso criar uma vez (ex: botão) e usar em vários lugares. Isso deixa o código mais organizado e fácil de manter.

### Analogia:
```
Componente = LEGO 🧱
└─ Cada peça é um componente
└─ Monta peças = constrói app
└─ Mesma peça em vários lugares
```

### Exemplo:
```javascript
// Componente simples
function BotaoLegal() {
  return <button>Clique aqui!</button>
}

// Usar várias vezes:
<BotaoLegal />
<BotaoLegal />
<BotaoLegal />
```

---

## 🎯 JSX

### O que é:
JSX é o próprio que se refere a uma forma de integrar o JavaScript e HTML como um só, podendo assim criar diversas interfaces em menos linhas de código e de forma mais dinâmica e rápida com menos peso para o desenvolvedor.

### Como funciona:
```javascript
// JSX (o que você escreve):
const elemento = <h1>Olá, {nome}!</h1>

// Vira JavaScript (por baixo dos panos):
const elemento = React.createElement('h1', null, 'Olá, ', nome, '!')
```

### Vantagens:
- ✅ Mais legível que `createElement`
- ✅ Mistura lógica (JS) com visual (HTML)
- ✅ Mais rápido de escrever
- ✅ Menos verboso

### Características:
```javascript
// 1. Pode usar expressões JS dentro {}
<h1>2 + 2 = {2 + 2}</h1> // Resultado: "2 + 2 = 4"

// 2. Pode usar variáveis
const nome = "Gustavo"
<h1>Olá, {nome}!</h1>

// 3. className (não class)
<div className="container">...</div>

// 4. Tags fecham sozinhas se vazias
<img src="foto.jpg" />
<input type="text" />
```

---

## 💡 INSIGHTS

**"AHA!" moments:**
1. Componentes são como funções que retornam interface
2. JSX não é HTML de verdade, é JavaScript disfarçado
3. Por isso {} funciona dentro do JSX (é JS!)
4. Eu também acho que deve ficar mais leve na impressão do site quando pronto

**Conexões:**
- Componente → Função JavaScript ✅
- JSX → Template com superpoderes ✅
- {} → "Buraco" pra colocar JavaScript dentro ✅

---

## 📌 Conceitos Principais Aprendidos:

1. **Componente** - Pedaço reutilizável de interface
2. **JSX** - Sintaxe que mistura JS e HTML
3. **{}** - Coloca JavaScript dentro do JSX
4. **className** - Usa isso ao invés de class

---

## ❓ DÚVIDAS

- [x] Por que `className` em vez de `class`?
  - **Resposta:** `class` é palavra reservada do JS, então React usa `className`

---

## 🎯 MINHA COMPREENSÃO

Componente é como uma função que devolve interface. JSX deixa eu escrever "HTML" dentro do JavaScript. É mais fácil de ler e escrever do que usar funções puras.

---

**Status:** ✅ Entendido  
**Próximo:** Vídeo 2 - useState
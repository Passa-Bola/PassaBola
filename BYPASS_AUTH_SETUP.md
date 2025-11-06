# 🧪 Bypass de Autenticação - Guia de Uso

Este guia explica como usar o **bypass de autenticação** para testar o site sem precisar do backend de autenticação rodando.

## ⚠️ Importante

**Nunca ative o bypass em produção!** Isso é apenas para desenvolvimento local.

## 🚀 Como Ativar o Bypass

### 1. Editar o arquivo `.env`

```bash
# Copiar o arquivo de exemplo (se ainda não tiver)
cp .env.example .env

# Editar o arquivo
nano .env
# ou
code .env
```

### 2. Ativar a variável de ambiente

Procure pela linha:

```env
VITE_BYPASS_AUTH=true
```

Se ela não existir, adicione:

```env
# ===== BYPASS DE AUTENTICAÇÃO (APENAS PARA DESENVOLVIMENTO) =====
VITE_BYPASS_AUTH=true
```

### 3. Reiniciar o servidor de desenvolvimento

```bash
npm run dev
```

## 🎯 Como Usar

### 1. Abra o site

Acesse: `http://localhost:5173` (ou a porta que aparecer)

### 2. Na tela de login

Você verá um **botão laranja** com o texto **"🧪 Bypass (Dev)"**

### 3. Clique no botão

Você será **automaticamente autenticado** como um usuário de teste e redirecionado para a página inicial!

## 📊 Dados do Usuário de Teste

Quando você usa o bypass, um usuário mock é criado com os seguintes dados:

```json
{
  "id": 1,
  "username": "teste",
  "email": "teste@passabola.com",
  "name": "Usuário Teste",
  "role": "user"
}
```

Esses dados são armazenados no `localStorage` do navegador.

## 🔄 Como Desativar o Bypass

### Opção 1: Editar `.env`

```env
VITE_BYPASS_AUTH=false
```

### Opção 2: Remover a variável

Se remover a linha `VITE_BYPASS_AUTH` do `.env`, o bypass será desativado automaticamente.

### Opção 3: Reiniciar sem o arquivo `.env`

Se não tiver um arquivo `.env`, o bypass não aparecerá.

## 🧹 Limpar Dados do Bypass

Se quiser limpar os dados de autenticação armazenados:

### No Browser

1. Abra o **DevTools** (F12)
2. Vá para **Application** → **Local Storage**
3. Procure por `authToken` e `user`
4. Delete ambos

### Via Console

```javascript
localStorage.removeItem('authToken');
localStorage.removeItem('user');
```

## 🔐 Segurança

### ✅ O que é seguro

- O bypass **só funciona em desenvolvimento local**
- O bypass **não afeta a produção**
- O bypass **usa variáveis de ambiente**

### ❌ O que NÃO fazer

- ❌ Nunca ative em produção
- ❌ Nunca faça commit do `.env` com `VITE_BYPASS_AUTH=true`
- ❌ Nunca compartilhe o código com bypass habilitado

## 📝 Checklist

- [ ] Arquivo `.env` criado
- [ ] `VITE_BYPASS_AUTH=true` configurado
- [ ] Servidor reiniciado (`npm run dev`)
- [ ] Botão "🧪 Bypass (Dev)" aparecendo na tela de login
- [ ] Clicou no botão e foi redirecionado para home
- [ ] Dashboard funcionando

## 🐛 Troubleshooting

### Botão de bypass não aparece

**Causa:** Variável de ambiente não está configurada

**Solução:**
1. Verifique se o arquivo `.env` existe
2. Verifique se `VITE_BYPASS_AUTH=true` está no arquivo
3. Reinicie o servidor (`npm run dev`)

### Erro ao clicar no botão

**Causa:** Problema com localStorage

**Solução:**
1. Abra o DevTools (F12)
2. Vá para **Console** e procure por erros
3. Limpe o localStorage e tente novamente

### Bypass não funciona após fazer build

**Causa:** Variáveis de ambiente não foram incluídas no build

**Solução:**
1. Certifique-se de que `VITE_BYPASS_AUTH=true` está no `.env`
2. Faça um novo build: `npm run build`
3. O bypass só funciona em desenvolvimento (`npm run dev`)

## 📚 Arquivos Modificados

- `src/components/Authentication.jsx` - Adicionado bypass
- `.env.example` - Adicionada variável de ambiente
- `BYPASS_AUTH_SETUP.md` - Este arquivo

## 🎉 Pronto!

Agora você pode testar o site sem precisar do backend de autenticação rodando!

---

**Dica:** Use o bypass para testar o dashboard enquanto desenvolve!

Última atualização: Novembro 2024

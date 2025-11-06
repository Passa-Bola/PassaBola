# 📊 Setup do Dashboard - Passa a Bola

Este guia explica como configurar e usar o dashboard de chutes integrado no seu site.

## ✨ O Que Foi Adicionado

- **Componente KicksDashboard** (`src/components/KicksDashboard.jsx`) - Dashboard com gráfico de barras
- **CSS do Dashboard** (`src/css/kicks-dashboard.css`) - Estilos responsivos
- **Integração no Modal** - O dashboard agora aparece dentro do modal de jogadoras
- **Dependência Recharts** - Biblioteca para gráficos

## 🚀 Instalação

### 1. Instalar Dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

Isso instalará automaticamente o Recharts que é necessário para os gráficos.

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure a URL do backend:

```env
# Para desenvolvimento local
VITE_BACKEND_URL=http://localhost:3000

# Para produção (após deploy no Render)
VITE_BACKEND_URL=https://seu-backend.render.com
```

## 🎯 Como Usar

### Desenvolvimento Local

1. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

2. **Navegue até a página de jogadoras**

3. **Clique no ícone de gráfico** (📊) em qualquer jogadora

4. **O modal abrirá com o dashboard**

### Fluxo Completo

1. **Backend rodando** (Node.js + MQTT)
2. **ESP32 enviando dados** via MQTT
3. **Frontend recebendo dados** do backend
4. **Dashboard exibindo estatísticas** em tempo real

## 📱 Estrutura do Dashboard

O dashboard exibe:

- **Gráfico de Barras:** Contagem de chutes por partida (últimas 3)
- **Estatísticas:** Total, média e máximo de chutes
- **Tabela de Detalhes:** Informações de cada partida
- **Atualização em Tempo Real:** A cada 5 segundos

## 🔧 Componentes

### KicksDashboard.jsx

Componente React que exibe o dashboard.

**Props:**
- `backendUrl` - URL do backend (padrão: `http://localhost:3000`)
- `refreshInterval` - Intervalo de atualização em ms (padrão: 5000)

**Exemplo de uso:**

```jsx
import KicksDashboard from './components/KicksDashboard';

function MyComponent() {
  return (
    <KicksDashboard 
      backendUrl="https://seu-backend.com"
      refreshInterval={3000}
    />
  );
}
```

## 🐛 Troubleshooting

### "Erro ao carregar dashboard"

**Causa:** Backend não está respondendo

**Solução:**
1. Verifique se o backend está rodando
2. Verifique a URL no `.env`
3. Verifique os logs do browser (F12 → Console)

### Gráfico não aparece

**Causa:** Recharts não foi instalado

**Solução:**
```bash
npm install recharts
```

### Dados não atualizam

**Causa:** Backend não está enviando dados

**Solução:**
1. Verifique se o ESP32 está conectado ao MQTT
2. Verifique os logs do backend
3. Reduza o `refreshInterval` para testar

## 📚 Arquivos Modificados

- `package.json` - Adicionado Recharts
- `src/components/Dashboard.jsx` - Integrado KicksDashboard
- `src/components/KicksDashboard.jsx` - Novo componente
- `src/css/kicks-dashboard.css` - Novo arquivo de estilos
- `.env.example` - Variáveis de ambiente

## 🔐 Segurança

- Use HTTPS em produção
- Configure CORS no backend se necessário
- Não compartilhe URLs sensíveis

## 📞 Próximos Passos

1. **Deploy do Backend** - Siga o guia de deployment no Render
2. **Configurar Variáveis** - Atualize a URL do backend
3. **Testar** - Clique no ícone de gráfico para abrir o dashboard
4. **Monitorar** - Verifique os logs regularmente

## 📖 Documentação

- **Backend:** Veja `DEPLOYMENT.md` no projeto backend
- **Recharts:** https://recharts.org/
- **Vite:** https://vitejs.dev/

---

Pronto! Seu dashboard está integrado! 🚀⚽

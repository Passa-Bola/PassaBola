import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../css/kicks-dashboard.css';

/**
 * Componente Dashboard para exibir estatísticas de chutes por partida
 * 
 * Props:
 * - backendUrl: URL do backend (ex: http://localhost:3000)
 * - refreshInterval: Intervalo de atualização em ms (padrão: 5000)
 */
const KicksDashboard = ({ 
  backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000',
  refreshInterval = 5000
}) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  /**
   * Buscar dados das partidas do backend via tRPC
   */
  const fetchMatches = async () => {
    try {
      setError(null);
      
      // Chamar a procedure tRPC dashboard.getMatches
      const response = await fetch(`${backendUrl}/api/trpc/dashboard.getMatches`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.statusText}`);
      }

      const data = await response.json();
      
      // A resposta do tRPC vem no formato { result: { data: [...] } }
      const matchesData = data.result?.data || [];
      
      // Transformar dados para o formato esperado pelo gráfico
      const chartData = matchesData.map((match) => ({
        matchNumber: `Partida ${match.matchNumber}`,
        totalKicks: match.totalKicks,
        maxForce: match.maxForce,
        averageForce: match.averageForce || 0,
        status: match.status,
        id: match.id,
      }));

      setMatches(chartData);
      setLastUpdate(new Date());
      setLoading(false);
    } catch (err) {
      console.error('[Dashboard] Erro ao buscar partidas:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  /**
   * Efeito para buscar dados inicialmente e configurar polling
   */
  useEffect(() => {
    // Buscar dados imediatamente
    fetchMatches();

    // Configurar polling para atualizar dados periodicamente
    const interval = setInterval(() => {
      fetchMatches();
    }, refreshInterval);

    // Cleanup ao desmontar o componente
    return () => clearInterval(interval);
  }, [backendUrl, refreshInterval]);

  /**
   * Renderizar estado de carregamento
   */
  if (loading && matches.length === 0) {
    return (
      <div className="kicks-dashboard-loading">
        <div className="spinner"></div>
        <p>Carregando dados do dashboard...</p>
      </div>
    );
  }

  /**
   * Renderizar erro
   */
  if (error && matches.length === 0) {
    return (
      <div className="kicks-dashboard-error">
        <h3>Erro ao carregar dashboard</h3>
        <p>{error}</p>
        <button onClick={fetchMatches} className="btn-retry">
          Tentar Novamente
        </button>
      </div>
    );
  }

  /**
   * Renderizar estado vazio
   */
  if (matches.length === 0) {
    return (
      <div className="kicks-dashboard-empty">
        <p>Nenhuma partida registrada ainda.</p>
        <p className="text-small">Os dados aparecerão aqui quando uma partida for iniciada.</p>
      </div>
    );
  }

  /**
   * Calcular estatísticas gerais
   */
  const totalKicks = matches.reduce((sum, m) => sum + m.totalKicks, 0);
  const averageKicks = Math.round(totalKicks / matches.length);
  const maxKicks = Math.max(...matches.map(m => m.totalKicks));

  return (
    <div className="kicks-dashboard">
      {/* Cabeçalho */}
      <div className="dashboard-header">
        <h2>⚽ Estatísticas de Chutes</h2>
        <p className="dashboard-subtitle">
          Últimas {matches.length} partidas | Atualizado em {lastUpdate?.toLocaleTimeString('pt-BR')}
        </p>
      </div>

      {/* Cards de estatísticas */}
      <div className="stats-grid">
        <div className="stat-card stat-total">
          <p className="stat-label">Total de Chutes</p>
          <p className="stat-value">{totalKicks}</p>
        </div>
        <div className="stat-card stat-average">
          <p className="stat-label">Média por Partida</p>
          <p className="stat-value">{averageKicks}</p>
        </div>
        <div className="stat-card stat-max">
          <p className="stat-label">Máximo em Uma Partida</p>
          <p className="stat-value">{maxKicks}</p>
        </div>
      </div>

      {/* Gráfico de barras */}
      <div className="chart-container">
        <h3>Contagem de Chutes por Partida</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={matches} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="matchNumber" 
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              label={{ value: 'Quantidade de Chutes', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value) => [value, 'Chutes']}
              labelFormatter={(label) => label}
            />
            <Legend />
            <Bar 
              dataKey="totalKicks" 
              fill="#3b82f6" 
              name="Chutes"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tabela de detalhes */}
      <div className="details-table">
        <h3>Detalhes das Partidas</h3>
        <table>
          <thead>
            <tr>
              <th>Partida</th>
              <th>Chutes</th>
              <th>Força Máx.</th>
              <th>Força Média</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => (
              <tr key={match.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                <td className="match-number">{match.matchNumber}</td>
                <td className="kicks-count">{match.totalKicks}</td>
                <td>{match.maxForce}</td>
                <td>{match.averageForce}</td>
                <td>
                  <span className={`status-badge ${match.status}`}>
                    {match.status === 'active' ? '🟢 Ativa' : '⏹️ Finalizada'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botão de atualização manual */}
      <div className="dashboard-footer">
        <button
          onClick={fetchMatches}
          disabled={loading}
          className="btn-refresh"
        >
          {loading ? 'Atualizando...' : '🔄 Atualizar Agora'}
        </button>
      </div>
    </div>
  );
};

export default KicksDashboard;

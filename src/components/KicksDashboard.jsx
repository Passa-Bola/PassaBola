import React from 'react';

// Substitua esta URL pela URL real do seu dashboard hospedado no Render
const RENDER_DASHBOARD_URL = "https://passabola-dashboard.onrender.com"; 

const KicksDashboard = ( ) => {
    // Presumo que você tenha uma forma de obter o estado da partida
    // Se você não usa 'isGameStarted', você pode remover a lógica 'if' e ir direto para o iframe.
    const isGameStarted = true; // Altere para a sua lógica real de estado

    // Se a partida não estiver iniciada, exibe a mensagem de aviso
    if (!isGameStarted) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-xl font-semibold mb-2">Nenhuma partida registrada ainda.</h2>
                <p className="text-gray-500">Os dados aparecerão aqui quando uma partida for iniciada.</p>
            </div>
        );
    }

    // Se a partida estiver iniciada, renderiza o iframe com o dashboard
    return (
        <div className="w-full h-full">
            <iframe
                src={RENDER_DASHBOARD_URL}
                title="Dashboard Passa a Bola"
                // Ocupa 100% do espaço do modal
                width="100%"
                height="100%"
                frameBorder="0"
                // Remove a borda padrão do iframe
                style={{ border: 'none', minHeight: '350px' }} 
                allowFullScreen
            />
        </div>
    );
};

export default KicksDashboard;

import React, { useState } from 'react';

const USUARIO_VALIDO = {
  email: 'teste@exemplo.com',
  senha: '123456',
};

function App() {
  const [tela, setTela] = useState('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    if (email === USUARIO_VALIDO.email && senha === USUARIO_VALIDO.senha) {
      setTela('home');
      setErro('');
    } else {
      setErro('Email ou senha inválidos');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {tela === 'login' ? (
        <div className="bg-white shadow-md rounded p-6 w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Entrar
          </button>
          {erro && <p className="text-red-500 mt-3 text-center">{erro}</p>}
        </div>
      ) : (
        <div className="w-full h-full">
          <div className="bg-[#d3cdea] p-4">
            <div className="flex justify-between items-start">
              <h1 className="text-lg font-bold text-black">
                Mapa Cultural<br />Araraquara
              </h1>
              <div className="text-2xl">☰</div>
            </div>
            <input
              type="text"
              placeholder="🔍 Buscar eventos"
              className="mt-3 w-full p-2 rounded-md border border-gray-300"
            />
            <div className="flex justify-around mt-2 text-sm font-medium">
              <span className="text-black">Gratuitos</span>
              <span className="text-black">Seus eventos</span>
              <span className="text-purple-600 border-b-2 border-purple-600">Categorias</span>
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-4 p-4 bg-white min-h-[calc(100vh-180px)]">
            <Categoria titulo="Teatro" emoji="🎭" />
            <Categoria titulo="Cinema" emoji="🎬" />
            <Categoria titulo="Gastronomia" emoji="👨‍🍳" />
            <Categoria titulo="Roda de conversa" emoji="🗣️" />
          </div>

          <div className="flex justify-center p-4">
            <button
              onClick={() => setTela('login')}
              className="text-blue-600 hover:underline"
            >
              Sair
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Categoria({ titulo, emoji }) {
  return (
    <div className="bg-[#e4e0f3] rounded-lg p-4 flex flex-col items-center justify-center">
      <div className="text-5xl text-blue-600 mb-2">{emoji}</div>
      <span className="text-center text-sm text-black font-medium">{titulo}</span>
    </div>
  );
}

export default App;

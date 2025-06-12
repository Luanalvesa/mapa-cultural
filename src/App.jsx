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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-sm">
        {tela === 'login' ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
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
            {erro && <p className="text-red-500 mt-3 text-#1d4ed8">{erro}</p>}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">Bem-vindo!</h2>
            <button
              onClick={() => setTela('login')}
              className="text-blue-600 hover:underline"
            >
              Sair
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

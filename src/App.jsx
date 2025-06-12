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
  <figure className='flex items-center justify-center mx-auto w-full'>

          <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="#0020ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
  </figure>


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

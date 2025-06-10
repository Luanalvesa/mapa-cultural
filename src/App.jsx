import React, { useState, useEffect } from 'react';

const USUARIO_VALIDO = {
  email: 'usuario@exemplo.com',
  senha: '123456',
};

function App() {
  const [tela, setTela] = useState('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [busca, setBusca] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Carrega usuários do localStorage ou cria com usuário padrão
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios'));
    if (usuariosSalvos && usuariosSalvos.length > 0) {
      setUsuarios(usuariosSalvos);
    } else {
      setUsuarios([USUARIO_VALIDO]);
      localStorage.setItem('usuarios', JSON.stringify([USUARIO_VALIDO]));
    }

    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado === 'true') {
      setTela('principal');
    }
  }, []);

  const salvarUsuarios = (novosUsuarios) => {
    setUsuarios(novosUsuarios);
    localStorage.setItem('usuarios', JSON.stringify(novosUsuarios));
  };

  const handleLogin = () => {
    if (!email.trim() || !senha.trim()) {
      alert('Por favor, preencha email e senha.');
      return;
    }

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuarioEncontrado) {
      localStorage.setItem('usuarioLogado', 'true');
      setTela('principal');
      setEmail('');
      setSenha('');
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setTela('login');
  };

  const handleCriarConta = () => {
    if (!email.trim() || !senha.trim() || !confirmaSenha.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    if (usuarios.some((u) => u.email === email)) {
      alert('Email já cadastrado.');
      return;
    }

    const novosUsuarios = [...usuarios, { email, senha }];
    salvarUsuarios(novosUsuarios);

    alert('Conta criada com sucesso! Agora faça login.');
    setEmail('');
    setSenha('');
    setConfirmaSenha('');
    setTela('login');
  };

  const cinemas = [
    {
      nome: 'Cine Center Lupo',
      filmes: ['Filme 1', 'Filme 2'],
    },
    {
      nome: 'Moviecom',
      filmes: ['Filme 1', 'Filme 2'],
    },
    {
      nome: 'Cine Sesc',
      filmes: ['Filme 1', 'Filme 2'],
    },
  ];

  const renderTela = () => {
    switch (tela) {
      case 'login':
        return (
          <div style={{ maxWidth: 300, margin: 'auto', textAlign: 'center' }}>
            <h2>
              Seja Bem-vindo ao
              <br />
              <strong>MAPA CULTURAL</strong>
            </h2>
            <img
              src="https://img.icons8.com/ios-filled/50/user.png"
              alt="User Icon"
              style={{ marginBottom: 20 }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: 8, marginBottom: 10 }}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{ width: '100%', padding: 8, marginBottom: 20 }}
            />
            <button
              onClick={handleLogin}
              style={{
                width: '100%',
                padding: 10,
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                marginBottom: 10,
              }}
            >
              Entrar
            </button>
            <button
              onClick={() => {
                const emailParaReset = prompt(
                  'Por favor, informe seu email para redefinir a senha:'
                );
                if (emailParaReset) {
                  alert(
                    `Se um usuário com o email ${emailParaReset} existir, você receberá um link para redefinir a senha.`
                  );
                }
              }}
              style={{
                width: '100%',
                padding: 10,
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                marginBottom: 10,
              }}
            >
              Redefinir senha
            </button>
            <button
              onClick={() => setTela('criarConta')}
              style={{
                width: '100%',
                padding: 10,
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Criar Conta
            </button>
          </div>
        );

      case 'criarConta':
        return (
          <div style={{ maxWidth: 300, margin: 'auto', textAlign: 'center' }}>
            <h2>Criar Conta</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: 8, marginBottom: 10 }}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{ width: '100%', padding: 8, marginBottom: 10 }}
            />
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              style={{ width: '100%', padding: 8, marginBottom: 20 }}
            />
            <button
              onClick={handleCriarConta}
              style={{
                width: '100%',
                padding: 10,
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                marginBottom: 10,
              }}
            >
              Criar Conta
            </button>
            <button
              onClick={() => setTela('login')}
              style={{
                width: '100%',
                padding: 10,
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Voltar para Login
            </button>
          </div>
        );

      case 'principal':
        return (
          <div style={{ maxWidth: 400, margin: 'auto' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <h2>Mapa Cultural Araraquara</h2>
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#007bff',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
                title="Sair"
              >
                Logout
              </button>
            </div>

            <input
              type="text"
              placeholder="Buscar eventos"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              style={{
                width: '100%',
                padding: 8,
                marginBottom: 20,
                boxSizing: 'border-box',
              }}
            />
            {[ 
              {
                icon: 'https://img.icons8.com/ios-filled/50/theatre-mask.png',
                label: 'Teatro',
                onClick: () => alert('Teatro ainda não implementado'),
              },
              {
                icon: 'https://img.icons8.com/ios-filled/50/movie-projector.png',
                label: 'Cinema',
                onClick: () => setTela('cinema'),
              },
              {
                icon: 'https://img.icons8.com/ios-filled/50/chef-hat.png',
                label: 'Gastronomia',
                onClick: () => alert('Gastronomia ainda não implementado'),
              },
              {
                icon: 'https://img.icons8.com/ios-filled/50/conference.png',
                label: 'Roda de conversa',
                onClick: () => alert('Roda de conversa ainda não implementado'),
              },
            ].map(({ icon, label, onClick }) => (
              <div
                key={label}
                onClick={onClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  marginBottom: 15,
                  padding: 10,
                  border: '1px solid #ccc',
                  borderRadius: 5,
                  userSelect: 'none',
                }}
              >
                <img src={icon} alt={label} style={{ marginRight: 10 }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        );

      case 'cinema':
        return (
          <div style={{ maxWidth: 400, margin: 'auto' }}>
            <button
              onClick={() => setTela('principal')}
              style={{
                marginBottom: 20,
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                fontSize: 18,
              }}
            >
              ← Voltar
            </button>
            <h2>Cinema</h2>
            <p>09 de Junho de 2025</p>
            {cinemas.map(({ nome, filmes }) => (
              <div key={nome} style={{ marginBottom: 20 }}>
                <label style={{ fontWeight: 'bold' }}>{nome}</label>
                <br />
                <select style={{ width: '100%', padding: 8, marginTop: 5 }}>
                  <option>Selecione uma opção</option>
                  {filmes.map((filme) => (
                    <option key={filme}>{filme}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return <div style={{ padding: 20 }}>{renderTela()}</div>;
}

export default App;

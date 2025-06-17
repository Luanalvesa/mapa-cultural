import React, { useState, useEffect } from 'react';
import {
  Theater,
  Clapperboard,
  UtensilsCrossed,
  Mic,
  MapPin,
  Train,
  TreePalm,
  Church,
  Utensils,
  Smile,
  BookOpen,
  Dna,
  ShoppingBag,
  Beer,
  ShoppingCart,
  Coffee,
  Cross,
  Film,
  Tent,
  MessageSquare,
  Clock,
} from 'lucide-react';

const USUARIO_VALIDO = {
  email: 'teste@exemplo.com',
  senha: '123456',
};

function App() {
  const [tela, setTela] = useState('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Categorias');
  const [selectedLocal, setSelectedLocal] = useState(null);

  const handleLogin = () => {
    if (email === USUARIO_VALIDO.email && senha === USUARIO_VALIDO.senha) {
      setTela('home');
      setErro('');
    } else {
      setErro('Email ou senha inválidos');
    }
  };

  const getFilterClasses = (filterName) => {
    const baseClasses = "whitespace-nowrap px-4 py-2 rounded-full cursor-pointer transition-colors duration-200";
    if (selectedFilter === filterName) {
      return `${baseClasses} bg-green-100 border border-green-600 text-green-600`;
    }
    return `${baseClasses} border border-gray-300 hover:bg-green-100 text-black`;
  };

  const handleCategoryClick = (localData) => {
    setSelectedLocal(localData);
    setTela('detalheLocal');
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center overflow-auto font-inter">
      {tela === 'login' ? (
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm mx-4 sm:mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Entrar
          </button>
          {erro && <p className="text-red-500 mt-3 text-center">{erro}</p>}
          <div className="mt-4 text-center">
            <button
              onClick={() => setTela('register')}
              className="text-green-600 hover:underline text-sm"
            >
              Não tem conta? Crie uma aqui!
            </button>
          </div>
        </div>
      ) : tela === 'register' ? (
        <RegisterScreen onVoltar={() => setTela('login')} />
      ) : tela === 'home' ? (
        <div className="w-full h-full lg:max-w-2xl lg:rounded-xl lg:shadow-lg lg:my-8">
          <div className="bg-green-100 p-4 rounded-t-xl">
            <div className="relative flex justify-center items-start w-full">
              <h1 className="text-lg font-bold text-black text-center">
                Mapa Cultural<br />Araraquara
              </h1>
              <div className="text-2xl absolute top-0 right-0">☰</div>
            </div>
            <input
              type="text"
              placeholder="🔍 Buscar eventos"
              className="mt-3 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm font-medium">
              <span
                className={getFilterClasses('Gratuitos')}
                onClick={() => setSelectedFilter('Gratuitos')}
              >
                Gratuitos
              </span>
              <span
                className={getFilterClasses('Seus eventos')}
                onClick={() => setSelectedFilter('Seus eventos')}
              >
                Seus eventos
              </span>
              <span
                className={getFilterClasses('Categorias')}
                onClick={() => setSelectedFilter('Categorias')}
              >
                Categorias
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 bg-white min-h-[calc(100vh-180px)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-b-xl">
            
            <Categoria
              titulo="Rua 5 - Voluntários da Pátria"
              Icone={MapPin}
              endereco="Rua Voluntários da Pátria, Centro"
              description="É uma das ruas mais emblemáticas da cidade, com rica história e beleza natural. A Rua 5 foi rebatizada como Rua Voluntários da Pátria em 1914, em homenagem aos 30 jovens que partiram para a Guerra do Paraguai. Infelizmente, nem todos voltaram do conflito, e a homenagem serve como um lembrete do sacrifício dos cidadãos. A Rua 5 é um cartão postal de Araraquara, com sua beleza paisagística e arquitetônica."
              onClick={handleCategoryClick}
              openingHours="00:00"
              closingHours="23:59"
            />
            <Categoria
              titulo="Museu Ferroviário"
              Icone={Train}
              endereco="Rua Antônio Prado, s/n - Centro"
              description="O museu é um local de forte apelo nostálgico e histórico para Araraquara, é uma instituição cultural que preserva a história das ferrovias no Brasil, especialmente em Araraquara. Ele está localizado em um conjunto de prédios da antiga estação ferroviária da cidade. É também conhecido como Museu Ferroviário “Francisco Aureliano de Araújo”."
              onClick={handleCategoryClick}
              openingHours="09:00"
              closingHours="17:00"
            />
            <Categoria
              titulo="Parque Natural Municipal do Basalto"
              Icone={TreePalm}
              endereco="Rua Antônio Joaquim de Carvalho - Jd. Pinheiros"
              description="É um verdadeiro oásis de biodiversidade e beleza natural, este parque é uma área de conservação que oferece aos seus visitantes a oportunidade de se conectar com a natureza através de trilhas ecológicas. Uma de suas joias é uma cachoeira encantadora, além das impressionantes formações rochosas de basalto que dão nome ao local."
              onClick={handleCategoryClick}
              openingHours="08:00"
              closingHours="18:00"
            />
            <Categoria
              titulo="Igreja Matriz de São Bento"
              Icone={Church}
              endereco="R. Padre Duarte, 1334 - Centro"
              description="É um ponto de referência histórico e cultural da cidade, sendo também a paróquia mais antiga da Diocese de São Carlos. A igreja é um marco da fundação de Araraquara, com seis templos construídos no mesmo local desde 1805."
              onClick={handleCategoryClick}
              openingHours="07:00"
              closingHours="20:00"
            />
            <Categoria
              titulo="Bueno de Andrada"
              Icone={Utensils}
              endereco="Distrito de Bueno de Andrada"
              description="Bueno de Andrada foi criado como distrito de paz em 1924, é um charmoso distrito de Araraquara, no interior de São Paulo, conhecido por sua tranquilidade e, acima de tudo, pelas famosas coxinhas douradas."
              onClick={handleCategoryClick}
              openingHours="08:00"
              closingHours="22:00"
            />
            <Categoria
              titulo="Teatro Municipal"
              Icone={Theater}
              endereco="Av. Bento de Abreu, 821 - Fonte Luminosa"
              description="Inaugurado em 1990, o teatro foi um marco para a vida cultural de Araraquara e é um dos principais centros culturais da cidade e um espaço fundamental para as artes cênicas da cidade, oferecendo um palco para diversas manifestações de teatro, dança e outras performances."
              onClick={handleCategoryClick}
              openingHours="10:00"
              closingHours="22:00"
            />
            <Categoria
              titulo="Parque Infantil"
              Icone={Smile}
              endereco="Rua Barão do Rio Branco, s/n - Centro"
              description="É um local muito utilizado para atividades físicas, com pista de caminhada de 800 metros e equipamentos de exercícios, o parque pode ser um local interessante para atividades em família, como caminhadas e piqueniques. O Parque Infantil, em Araraquara, é considerado patrimônio cultural e ambiental da cidade, e é fundamental cuidar da preservação do espaço."
              onClick={handleCategoryClick}
              openingHours="06:00"
              closingHours="21:00"
            />
            <Categoria
              titulo="Museu Histórico e Pedagógico"
              Icone={BookOpen}
              endereco="Rua João Gurgel, 1904 - Centro"
              description="O Museu Histórico e Pedagógico “Voluntários da Pátria” é, portanto, um guardião do passado de Araraquara, um espaço de educação e cultura que permite aos visitantes se conectarem com a história e a identidade da “Morada do Sol”. É um local de pesquisa e aprendizado para estudantes, pesquisadores e a comunidade em geral."
              onClick={handleCategoryClick}
              openingHours="09:00"
              closingHours="17:00"
            />
            <Categoria
              titulo="Museu de Arqueologia e Paleontologia"
              Icone={Dna}
              endereco="Rua Voluntários da Pátria, 1108 - Centro"
              description="O Museu de Arqueologia e Paleontologia de Araraquara, inaugurado em 2008, é vasto e abrange tanto a arqueologia quanto a paleontologia, com um foco especial nas descobertas locais que colocaram a cidade no cenário científico internacional. É um testemunho fundamental da rica história geológica e da ocupação humana da região, oferecendo aos visitantes uma jornada no tempo que abrange milhões de anos e a evolução da vida no planeta, com um foco especial nas descobertas e pesquisas locais."
              onClick={handleCategoryClick}
              openingHours="09:00"
              closingHours="17:00"
            />
            <Categoria
              titulo="Shopping Jaraguá"
              Icone={ShoppingBag}
              endereco="Av. Alberto Benassi, 2270 - Jd. dos Manacás"
              description="O Shopping Jaraguá de Araraquara é um dos principais centros de compras, lazer e entretenimento da cidade e da região central do estado de São Paulo. Inaugurado em 2001, ele se consolidou como um ponto de referência para os moradores de Araraquara e municípios vizinhos. Diversas opções de restaurantes e fast-foods para todos os gostos, conta com 5 salas de cinema de sistema 3D e oferece uma grande variedade de lojas dos mais diversos segmentos, incluindo moda, acessórios, eletrônicos, cosméticos, entre outros."
              onClick={handleCategoryClick}
              openingHours="10:00"
              closingHours="22:00"
            />
            <Categoria
              titulo="Bar do Zinho"
              Icone={Beer}
              endereco="Av. São Paulo, 1261 - Vila Prado"
              description="O local é um famoso botecão com uma praça bem em frente e, talvez por isso mesmo, seja famoso na cidade. O ambiente é descontraído e a atração aqui são os próprios frequentadores."
              onClick={handleCategoryClick}
              openingHours="17:00"
              closingHours="01:00"
            />
            <Categoria
              titulo="Shopping Lupo"
              Icone={ShoppingCart}
              endereco="Rua Padre Duarte, 1515 - Centro"
              description="Shopping no centro da cidade com lojas de roupas e acessórios, cinema e praça de alimentação. O Shopping foi inaugurado em 17 de outubro de 2002 e traz até hoje muita tradição e emoção no coração de todos araraquarenses."
              onClick={handleCategoryClick}
              openingHours="09:00"
              closingHours="21:00"
            />
            <Categoria
              titulo="Café Espanha"
              Icone={Coffee}
              endereco="R. Nove de Julho, 1071 - Centro"
              description="O Café Espanha é uma cafeteria tradicional em Araraquara, conhecida por ser um local agradável para tomar um café e fazer um lanche. Não se trata de shopping center, mas sim de um estabelecimento focado em cafeteria e lanchonete. É descrito como um estabelecimento sereno, com um serviço notável e um ambiente familiar e agradável. É frequentemente recomendado para quem quer desfrutar de uma boa xícara de café, um de seus itens mais elogiados e populares é o pão de batata salgado com requeijão, que é um favorito entre os clientes. Eles também são conhecidos por terem um dos melhores cappuccinos da cidade."
              onClick={handleCategoryClick}
              openingHours="07:00"
              closingHours="19:00"
            />
            <Categoria
              titulo="Igreja Santa Cruz"
              Icone={Cross}
              endereco="Praça Santa Cruz, 303 - Centro"
              description="A Igreja Santa Cruz, com seu estilo arquitetônico, é um marco histórico, cultural e religioso de Araraquara, testemunhando e participando do desenvolvimento da cidade ao longo de mais de um século. A igreja tem um papel ativo na comunidade, com diversas missas, novenas e atividades pastorais, em 2021, a Igreja Santa Cruz de Araraquara completou 150 anos de história, contando desde a inauguração da capela original."
              onClick={handleCategoryClick}
              openingHours="08:00"
              closingHours="20:00"
            />
            <Categoria
              titulo="Museu da Imagem e do Som"
              Icone={Film}
              endereco="Rua Barão do Rio Branco, 1097 - Centro"
              description="O Museu da Imagem e do Som (MIS) de Araraquara é um importante espaço cultural da cidade, dedicado à preservação e difusão da memória visual e sonora local. O principal objetivo do MIS é preservar a memória de Araraquara por meio de registros visuais e sonoros, tornando-os acessíveis ao público e contribuindo para a pesquisa e o conhecimento da história local. Além de preservar o acervo, o museu pode promover exposições, mostras, cursos e oficinas relacionadas à imagem e ao som, embora as informações mais recentes foquem mais no seu papel de guardião do acervo histórico."
              onClick={handleCategoryClick}
              openingHours="09:00"
              closingHours="18:00"
            />
            <Categoria
              titulo="Sesc"
              Icone={Tent}
              endereco="Rua Castro Alves, 1315 - Quitandinha"
              description="O Sesc de Araraquara é um centro cultural e esportivo muito dinâmico, que oferece uma vasta programação para todas as idades e interesses. De atrações fixas e estrutura têm: piscinas para adultos e crianças, quadras e campos esportivos, apresentações de teatro / auditório, exposições para obras de artes, biblioteca, lanchonete / restaurante e espaços de convivência."
              onClick={handleCategoryClick}
              openingHours="09:00"
              closingHours="21:00"
            />
          </div>

          <div className="flex justify-center p-4 bg-white rounded-b-xl">
            <button
              onClick={() => setTela('feedbackGeral')}
              className="text-green-600 hover:underline flex items-center mr-4"
            >
              <MessageSquare className="mr-1" size={18} /> Dar Feedback Geral
            </button>
            <button
              onClick={() => setTela('login')}
              className="text-green-600 hover:underline"
            >
              Sair
            </button>
          </div>
        </div>
      ) : tela === 'cinema' ? (
        <CinemaScreen onVoltar={() => setTela('home')} />
      ) : tela === 'detalheLocal' ? (
        <DetalheLocalScreen
          local={selectedLocal}
          onVoltar={() => setTela('home')}
          onDarFeedback={() => setTela('feedbackLocal')} // Novo prop para feedback do local
        />
      ) : tela === 'feedbackGeral' ? (
        <FeedbackGeralScreen onVoltar={() => setTela('home')} />
      ) : tela === 'feedbackLocal' ? (
        <FeedbackLocalScreen local={selectedLocal} onVoltar={() => setTela('detalheLocal')} />
      ) : null}
    </div>
  );
}


function Categoria({ titulo, Icone, onClick, endereco, description, openingHours, closingHours }) {
  const localData = { titulo, Icone, endereco, description, openingHours, closingHours };
  return (
    <div
      onClick={() => onClick(localData)}
      className="bg-green-50 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-green-100 transition-colors duration-200"
    >
      <Icone className="text-black mb-2" size={40} />
      <span className="text-center text-sm text-black font-medium">{titulo}</span>
      {endereco && (
        <p className="text-center text-xs text-gray-600 mt-1">{endereco}</p>
      )}
    </div>
  );
}

function CinemaScreen({ onVoltar }) {
  return (
    <div className="min-h-screen bg-white p-4 w-full mx-auto max-w-xl lg:rounded-xl lg:shadow-lg lg:my-8 font-inter">
      <div className="bg-green-100 p-4 rounded-xl mb-4">
        <h2 className="text-center text-lg font-semibold">Cinema</h2>
        <p className="text-center text-sm">17 de Junho de 2025</p>
      </div>

      <div className="space-y-4">
        <Dropdown titulo="Cine Center Lupo" />
        <Dropdown titulo="Moviecom" />
        <Dropdown titulo="Cine Sesc" />
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={onVoltar}
          className="text-green-600 hover:underline"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}

function Dropdown({ titulo }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="bg-green-100 p-3 rounded-xl cursor-pointer hover:bg-green-200 transition-colors duration-200" onClick={() => setAberto(!aberto)}>
      <div className="flex justify-between items-center">
        <span>{titulo}</span>
        <span className="text-black">{aberto ? '▲' : '▼'}</span>
      </div>
      {aberto && (
        <div className="mt-2 text-sm text-gray-700">
          <p>🎬 Filme: Exemplo</p>
          <p>🕒 Horários: 14:00, 16:30, 19:00</p>
        </div>
      )}
    </div>
  );
}

function RegisterScreen({ onVoltar }) {
  const [newEmail, setNewEmail] = useState('');
  const [newSenha, setNewSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');

  const handleRegister = () => {
    setRegisterError('');
    setRegisterSuccess('');

    if (!newEmail || !newSenha || !confirmSenha) {
      setRegisterError('Por favor, preencha todos os campos.');
      return;
    }

    if (newSenha !== confirmSenha) {
      setRegisterError('As senhas não coincidem.');
      return;
    }

    console.log('Novo usuário registrado:', { email: newEmail, senha: newSenha });
    setRegisterSuccess('Conta criada com sucesso! Faça login.');
    setNewEmail('');
    setNewSenha('');
    setConfirmSenha('');
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm mx-4 sm:mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Criar Conta</h2>
      <input
        type="email"
        placeholder="Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        className="w-full mb-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <input
        type="password"
        placeholder="Senha"
        value={newSenha}
        onChange={(e) => setNewSenha(e.target.value)}
        className="w-full mb-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <input
        type="password"
        placeholder="Confirmar Senha"
        value={confirmSenha}
        onChange={(e) => setConfirmSenha(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        onClick={handleRegister}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
      >
        Registrar
      </button>
      {registerError && <p className="text-red-500 mt-3 text-center">{registerError}</p>}
      {registerSuccess && <p className="text-green-600 mt-3 text-center">{registerSuccess}</p>}
      <div className="mt-4 text-center">
        <button
          onClick={onVoltar}
          className="text-green-600 hover:underline text-sm"
        >
          Voltar ao Login
        </button>
      </div>
    </div>
  );
}

function DetalheLocalScreen({ local, onVoltar, onDarFeedback }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  const getStatus = () => {
    if (!local.openingHours || !local.closingHours) {
      return { text: "Horário não informado", color: "text-gray-600" };
    }

    const [openHour, openMinute] = local.openingHours.split(':').map(Number);
    const [closeHour, closeMinute] = local.closingHours.split(':').map(Number);

    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const nowInMinutes = currentHour * 60 + currentMinute;
    const openInMinutes = openHour * 60 + openMinute;
    const closeInMinutes = closeHour * 60 + closeMinute;

    // Horário de funcionamento que passa para o dia seguinte (ex: 17:00 - 01:00)
    if (openInMinutes > closeInMinutes) {
      // Se a hora atual estiver entre a abertura (no dia atual) e a meia-noite, OU entre meia-noite e o fechamento (no dia seguinte)
      if (nowInMinutes >= openInMinutes || nowInMinutes <= closeInMinutes) {
        return { text: "Aberto agora", color: "text-green-600" };
      } else {
        return { text: "Fechado", color: "text-red-600" };
      }
    } else {
      // Horário de funcionamento que abre e fecha no mesmo dia
      if (nowInMinutes >= openInMinutes && nowInMinutes <= closeInMinutes) {
        return { text: "Aberto agora", color: "text-green-600" };
      } else {
        return { text: "Fechado", color: "text-red-600" };
      }
    }
  };

  const status = getStatus();

  if (!local) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 w-full mx-auto max-w-xl lg:rounded-xl lg:shadow-lg lg:my-8 font-inter">
        <p className="text-gray-700">Nenhum local selecionado.</p>
        <button
          onClick={onVoltar}
          className="mt-6 text-green-600 hover:underline"
        >
          Voltar para a Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4 w-full mx-auto max-w-xl lg:rounded-xl lg:shadow-lg lg:my-8 font-inter">
      <div className="bg-green-100 p-4 rounded-xl mb-4 text-center">
        <local.Icone className="text-black mx-auto mb-2" size={50} />
        <h2 className="text-xl font-bold text-black">{local.titulo}</h2>
        {local.endereco && (
          <p className="text-sm text-gray-700 mt-1">{local.endereco}</p>
        )}
        {(local.openingHours && local.closingHours) && (
          <div className="mt-2 flex items-center justify-center">
            <Clock className="text-gray-600 mr-1" size={16} />
            <p className="text-sm text-gray-700">
              {local.openingHours} - {local.closingHours}
            </p>
            <span className={`ml-2 font-semibold ${status.color}`}>
              ({status.text})
            </span>
          </div>
        )}
        {(!local.openingHours || !local.closingHours) && (
          <p className="text-sm text-gray-600 mt-1">Horário de funcionamento não disponível.</p>
        )}
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md">
        <p className="text-gray-800 text-base leading-relaxed">{local.description || "Nenhuma descrição disponível para este local."}</p>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={onVoltar}
          className="text-green-600 hover:underline"
        >
          Voltar para a Home
        </button>
        <button
          onClick={onDarFeedback}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Dar Feedback sobre o Local
        </button>
      </div>
    </div>
  );
}

function FeedbackGeralScreen({ onVoltar }) {
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSubmitFeedback = () => {
    if (feedbackText.trim() === '') {
      alert('Por favor, escreva seu feedback antes de enviar.');
      return;
    }
    console.log('Feedback geral enviado:', feedbackText);
    setFeedbackSent(true);
    setFeedbackText('');
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm mx-4 sm:mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Dar Feedback Geral</h2>
      {feedbackSent ? (
        <div className="text-center text-green-600 mb-4">
          <p>Obrigado pelo seu feedback geral!</p>
          <p>Ele nos ajuda a melhorar o aplicativo.</p>
        </div>
      ) : (
        <>
          <textarea
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="5"
            placeholder="Compartilhe suas sugestões ou problemas gerais do aplicativo..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
          <button
            onClick={handleSubmitFeedback}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Enviar Feedback
          </button>
        </>
      )}
      <div className="mt-4 text-center">
        <button
          onClick={onVoltar}
          className="text-green-600 hover:underline text-sm"
        >
          Voltar para a Home
        </button>
      </div>
    </div>
  );
}

function FeedbackLocalScreen({ local, onVoltar }) {
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSubmitFeedback = () => {
    if (feedbackText.trim() === '') {
      alert('Por favor, escreva seu feedback antes de enviar.');
      return;
    }
    console.log(`Feedback para ${local.titulo} enviado:`, feedbackText);
    setFeedbackSent(true);
    setFeedbackText('');
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm mx-4 sm:mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Feedback sobre {local.titulo}</h2>
      {feedbackSent ? (
        <div className="text-center text-green-600 mb-4">
          <p>Obrigado pelo seu feedback sobre {local.titulo}!</p>
          <p>Sua opinião é muito importante.</p>
        </div>
      ) : (
        <>
          <textarea
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="5"
            placeholder={`Compartilhe suas observações sobre ${local.titulo}...`}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
          <button
            onClick={handleSubmitFeedback}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Enviar Feedback
          </button>
        </>
      )}
      <div className="mt-4 text-center">
        <button
          onClick={onVoltar}
          className="text-green-600 hover:underline text-sm"
        >
          Voltar para {local.titulo}
        </button>
      </div>
    </div>
  );
}

export default App;
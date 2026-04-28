import Header from "../components/header"; // Ajuste o caminho se necessário
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      
      <main className="main-content">
        <div className="container">
          {/* COLUNA PRINCIPAL */}
          <section className="profile-column">
            
            {/* Card de Perfil (Hero) */}
            <div className="card hero-card">
              <div className="banner"></div>
              <div className="profile-header">
                <div className="profile-avatar"></div>
                <div className="profile-info">
                  <div className="info-text">
                    <h1>Nome Sobrenome</h1>
                    <p className="headline">Desenvolvedora | HTML | CSS | Typescript | Node</p>
                    <p className="sub-info">Cidade, estado e país • <span className="accent-link">informações de contato</span></p>
                    <p className="stats"><span className="accent-link">??? seguidores</span> • <span className="accent-link">??? conexões</span></p>
                    
                    <div className="button-group">
                      <button className="btn-filled">Mensagem</button>
                      <button className="btn-outlined">Mais</button>
                    </div>
                  </div>
                  
                  <div className="org-info">
                    <div className="org-item"> <span className="mini-box verde"></span> Empresa</div>
                    <div className="org-item"> <span className="mini-box rosa"></span> Instituição de ensino</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Destaques */}
            <div className="card section-card">
              <h2>Destaques</h2>
              <div className="highlights-grid">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="highlight-item">
                    <span className="label">Publicação</span>
                    <h4>Legenda da publicação {i}...</h4>
                    <div className="post-thumb"></div>
                    <div className="post-stats">👍 124 • 5 comentários</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experiências */}
            <div className="card section-card">
              <h2>Experiências</h2>
              <div className="exp-item">
                <div className="exp-logo"></div>
                <div className="exp-details">
                  <h3>Fullstack Developer</h3>
                  <p className="company">Empresa • Tempo integral</p>
                  <p className="period">jan de 2022 - o momento • 5 meses</p>
                  <div className="timeline-line"></div>
                </div>
              </div>
            </div>
          </section>

          {/* BARRA LATERAL */}
          <aside className="sidebar">
            <div className="card sidebar-card">
              <h3>As pessoas também viram</h3>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="user-row">
                  <div className="user-avatar-sm"></div>
                  <div className="user-details">
                    <p className="user-name">Nome e Sobrenome</p>
                    <p className="user-title">Título, cargo e tecnologias...</p>
                    <button className="btn-outlined-sm">Enviar mensagem</button>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
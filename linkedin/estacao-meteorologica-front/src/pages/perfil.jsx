import React from 'react';
import './Perfil.css';

const Perfil = () => {
  return (
    <div className="linkedin-container">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-left">
            <div className="logo-placeholder">in</div>
            <div className="search-bar">
              <input type="text" placeholder="Pesquisar" />
            </div>
          </div>
          <ul className="nav-menu">
            <li><span className="icon">🏠</span><span>Início</span></li>
            <li><span className="icon">👥</span><span>Minha rede</span></li>
            <li><span className="icon">💼</span><span>Vagas</span></li>
            <li><span className="icon">💬</span><span>Mensagens</span></li>
            <li><span className="icon">🔔</span><span>Notificações</span></li>
          </ul>
        </div>
      </nav>

      <main className="main-layout">
        {/* --- COLUNA PRINCIPAL --- */}
        <section className="content-column">
          
          {/* Hero Section */}
          <div className="card profile-hero">
            <div className="banner"></div>
            <div className="profile-info-wrapper">
              <div className="profile-pic"></div>
              <div className="profile-details">
                <div className="details-text">
                  <h1>Nome Sobrenome</h1>
                  <p className="headline">Desenvolvedora | HTML | CSS | Typescript | Node</p>
                  <p className="location">Cidade, estado e país • <span className="link">informações de contato</span></p>
                  <p className="connections"><span className="link">??? seguidores</span> • <span className="link">??? conexões</span></p>
                  <div className="actions">
                    <button className="btn-primary">Mensagem</button>
                    <button className="btn-outline">Mais</button>
                  </div>
                </div>
                <div className="details-orgs">
                  <div className="org-item"><div className="org-icon"></div> Empresa</div>
                  <div className="org-item"><div className="org-icon"></div> Instituição de ensino</div>
                </div>
              </div>
            </div>
          </div>

          {/* Destaques */}
          <div className="card section-card">
            <h2>Destaques</h2>
            <div className="highlights-grid">
              {[1, 2, 3].map(i => (
                <div key={i} className="highlight-item">
                  <p className="label">Publicação</p>
                  <h3>Legenda da primeira publica...</h3>
                  <div className="post-preview"></div>
                  <div className="post-footer">👍 124 • 5 comentários</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sobre */}
          <div className="card section-card">
            <h2>Sobre</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          {/* Experiências */}
          <div className="card section-card">
            <h2>Experiências</h2>
            <div className="experience-item">
              <div className="org-icon large"></div>
              <div className="exp-content">
                <h3>Empresa</h3>
                <p>1 a 7 m</p>
                <div className="timeline">
                  <div className="timeline-node active">
                    <h4>Fullstack Developer</h4>
                    <p>Tempo integral</p>
                    <p className="sub">jan de 2022 - o momento • 5 meses</p>
                  </div>
                  <div className="timeline-node">
                    <h4>Front-end Developer</h4>
                    <p>Tempo integral</p>
                    <p className="sub">jan de 2021 - jun de 2021 • 6 meses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SIDEBAR --- */}
        <aside className="sidebar-column">
          <div className="card sidebar-card">
            <h3>As pessoas também viram</h3>
            {[1, 2, 3].map(i => (
              <div key={i} className="sidebar-user">
                <div className="user-pic"></div>
                <div className="user-info">
                  <h4>Nome e sobrenome</h4>
                  <p>Título, cargo e tecnologias...</p>
                  <button className="btn-outline-sm">Enviar mensagem</button>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Perfil;
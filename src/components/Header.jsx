import React from 'react';

const Header = () => {
  // You can add logic here if navigation links need to be dynamic
  return (
    <header className="header">
      <div className="container">
        <div className="header_top">
          <h1 className="header_title">КГУ "Комплекс школа-ясли-детский сад имени К.Ахмирова"</h1>
          <p className="subtitle">Научный портал образовательного учреждения</p>
          <p className="subtitle">ЗКО, район Байтерек, село Бейтбішілік</p>

          <nav className="header_nav">
            {/* Using hash links for now, could be replaced with React Router links */}
            <a href="#" className="header_top-link pulse">
              <i className="fas fa-home"></i> Главная
            </a>
            <a href="#about" className="header_top-link">
              <i className="fas fa-school"></i> О комплексе
            </a>
            <a href="#director" className="header_top-link">
              <i className="fas fa-user-tie"></i> Директор
            </a>
            <a href="#gallery" className="header_top-link">
              <i className="fas fa-images"></i> Галерея
            </a>
            <a href="#science" className="header_top-link">
              <i className="fas fa-flask"></i> Научные проекты
            </a>
            <a href="#contact" className="header_top-link">
              <i className="fas fa-phone-alt"></i> Контакты
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
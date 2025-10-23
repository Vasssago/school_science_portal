import React from 'react';
import Header from './components/Header';
import SchoolInfo from './components/SchoolInfo';
import DirectorInfo from './components/DirectorInfo';
import Gallery from './components/Gallery';
import ScienceProjects from './components/ScienceProjects';
import ToTopButton from './components/ToTopButton'; // Import the new component
import './App.css'; // Import main CSS (you can move global styles here if needed)

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <section className="content">
          <div className="intro-text">
            <p>Добро пожаловать на научный портал КГУ "Комплекс школа-ясли-детский сад имени К.Ахмирова". Наше
              образовательное учреждение уделяет особое внимание развитию научного мышления у учащихся всех
              возрастов, от дошкольников до учащихся средней школы.</p>

            <p>Мы гордимся своими учениками, которые активно участвуют в научных проектах, конкурсах и олимпиадах.
              Наши педагоги используют современные методики преподавания, включая проектную деятельность и
              экспериментальное обучение.</p>
          </div>

          <div className="school-facts">
            <h3><i className="fas fa-graduation-cap"></i> О комплексе</h3>
            <ul>
              <li>Основан в 1968 году, расположен в селе Бейтбішілік, районе Байтерек, Западно-Казахтанской области</li>
              <li>Объединяет школу, ясли и детский сад в одном комплексе</li>
              <li>Обучает детей от 1 года до 11 класса</li>
              <li>Имеет современную материально-техническую базу</li>
            </ul>
          </div>

          <div className="measurement-info">
            <h3><i className="fas fa-lightbulb"></i> Научные инициативы</h3>
            <p>Наш комплекс активно развивает научно-исследовательскую деятельность. Учащиеся принимают участие в
              проектах по физике, химии, биологии и другим наукам. Мы поддерживаем любознательность и стремление к
              познанию у каждого ученика.</p>
          </div>

          <SchoolInfo />
          <DirectorInfo />
          <Gallery />
          <ScienceProjects />
        </section>
      </main>
      <footer className="footer container">
        <p>КГУ "Комплекс школа-ясли-детский сад имени К.Ахмирова" | Научный портал 2025</p>
        <p>Развиваем научное мышление с детства</p>
        <p>ЗКО, р.Байтерек, село Бейбітшілік | Тел: +7 (7113) 13-41-41</p>
      </footer>
      <ToTopButton /> {/* Add the ToTopButton component */}
    </div>
  );
}

export default App;
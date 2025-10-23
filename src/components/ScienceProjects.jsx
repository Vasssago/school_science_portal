import React from 'react';

const ScienceProjects = () => {
  // Example project data - could be fetched from a state or API
  const projects = [
    {
      id: 1,
      icon: 'fa-wind',
      title: 'Атмосферное давление',
      description: 'Проект ученицы 7 класса Жангабиловой Анели: "Исследование атмосферного давления с помощью самодельного и цифрового барометра"',
      link: 'https://barometer.ahmirov-science.kz', // Use the link from the knowledge base
      linkText: 'Перейти к проекту'
    },
    // Add more projects if needed, but commented out for now
    // {
    //   id: 2,
    //   icon: 'fa-leaf',
    //   title: 'Экология растений',
    //   description: 'Исследование влияния городской среды на развитие комнатных растений',
    //   link: '#',
    //   linkText: 'Перейти к проекту'
    // }
  ];

  return (
    <>
      <h2 id="science" style={{ color: 'var(--primary-dark)', margin: '2rem 0 1rem', textAlign: 'center' }}>Научные проекты учеников</h2>
      <div className="subsites-grid">
        {projects.map(project => (
          <div key={project.id} className="subsite-card">
            <div className="card-image">
              <i className={`fas ${project.icon}`}></i>
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="card-link" target="_blank" rel="noopener noreferrer">{project.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ScienceProjects;
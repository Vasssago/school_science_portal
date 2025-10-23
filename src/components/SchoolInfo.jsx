import React from 'react';

const SchoolInfo = () => {
  return (
    <div id="about" className="school-info">
      <div className="school-image">
        <div
          style={{
            background: 'linear-gradient(45deg, var(--primary-dark), var(--primary-blue))',
            height: '300px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem',
            textAlign: 'center',
            padding: '1rem',
          }}
        >
          Фото здания школы<br />(Изображение школы)
        </div>
      </div>
      <div className="school-details">
        <h2>О КГУ "Комплекс школа-ясли-детский сад имени К.Ахмирова"</h2>
        <p>Наше образовательное учреждение было создано с целью предоставления качественного образования в
          едином комплексе для детей разного возраста. Мы объединяем дошкольное и школьное образование,
          что позволяет создать непрерывную образовательную среду.</p>
        <p>Комплекс оснащен современными классами, лабораториями, спортивным залом и библиотекой. У нас
          работает команда опытных педагогов, которые заботятся о каждом ученике.</p>
      </div>
    </div>
  );
};

export default SchoolInfo;
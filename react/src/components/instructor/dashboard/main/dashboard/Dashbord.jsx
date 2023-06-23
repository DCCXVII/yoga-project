import React from 'react';
import { MdFeedback, BsPeopleFill, BsBookFill, BsFillPersonFill, BsCameraVideoFill, BsFillCartFill, RiLiveFill } from 'react-icons/all';
import './Dashboard.css';

function Dashboard() {
  const cards = [
    { icon: BsPeopleFill, number: '130', title: 'Total Students' },
    { icon: BsBookFill, number: '87', title: 'Total Courses' },
    { icon: BsFillPersonFill, number: '40', title: 'Total Instructors' },
    { icon: BsCameraVideoFill, number: '350', title: 'Course Video' },
    { icon: BsFillCartFill, number: '54578$', title: 'Total Sale' },
    { icon: RiLiveFill, number: '55', title: 'Course Live' },
    { icon: MdFeedback, number: '2', title: 'Reclamation' },

  ];

  return (
    <>
          <div className='titre'><h1 >Dashboard panel</h1></div>
    <div className="dashboard-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-icon">
            {React.createElement(card.icon, { className: 'icone_dashbord' })}
          </div>
          <div className="card-number">{card.number}</div>
          <div className="card-title">{card.title}</div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Dashboard;

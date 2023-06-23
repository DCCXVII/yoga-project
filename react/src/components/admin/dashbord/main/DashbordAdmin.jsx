import { useQuery } from 'react-query';
import {  fetchDashboardData, token, userData } from '../../../api/api__admin';

function DashbordAdmin() {
  const { data: dashboardData, isLoading, error } = useQuery('dashboardData', fetchDashboardData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  else if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

    const cards = [
        {icone:'bi bi-people'    ,                number: dashboardData.total_Clients    ,     title:'Total Students'},
        {icone:'bi bi-book'    ,                  number: dashboardData.total_Course    ,      title:'Total Courses'},
        {icone:'bi bi-people'    ,                number: dashboardData.total_Instructors   ,  title:'Total Instructors'},
        {icone:'bi bi-film'    ,                  number: dashboardData.total_Packs    ,       title:'total_Packs'},
        {icone:'bi bi-gear-wide-connected'    ,   number: dashboardData.total_discipline    ,  title:'Desciplines'},
        {icone:'bi bi-diagram-3'    ,             number: dashboardData.total_classes    ,     title:'Classes'},
        {icone:'bi bi-hourglass-split '    ,      number: dashboardData.pending_courses    ,   title:'pending_courses'},
        {icone:'bi bi-eye'    ,                   number: dashboardData.total_courses_view   , title:'total_courses_view'},
        {icone:'bi bi-hourglass-split'    ,       number: dashboardData.pending_packs    ,     title:'pending_packs'},
        {icone:'bi bi-eye'    ,                   number: dashboardData.total_packs_view    ,  title:'total_packs_view'},
        {icone:'bi bi-eye'    ,                   number: dashboardData.total_view    ,        title:'total_view'},

        {icone:'bi bi-cart-check',number: dashboardData.total_Clients,title:'Total Sale'},
        {icone:'bi bi-film',number: dashboardData.total_Clients,title:'Course Video'},/* 
        {icone:'bi bi-camera-reels',number: dashboardData.total_Clients,title:'Course Live'},
        */

    ]
 

    return (
    <div className="dashboard_container_admin">
        {cards.map((card , index) => (
            <div className="card_admin" key={index}>
                <div className="card_icon_admin"><i className={"icone_dashbord"+card.icone} ></i></div>
                <div className="card_number_admin">{card.number}</div>
                <div className="card_title_admin">{card.title}</div>
            </div>
            
        ))}
          <div>



    </div>
              
    </div>
    );
}

export default DashbordAdmin;
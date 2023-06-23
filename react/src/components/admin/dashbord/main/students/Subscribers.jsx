import React from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import '../main.css'
import Table from '../Table';
import { getSubscribers } from '../../../../api/api__admin';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

function Subscribers(sidebarOpen, openSidebar) {
    /*Les liens de mini_navbar de sidebar */
    const links = [  
        {label:'Students',url:'/admin/students',isActive:location.pathname == "/admin/students"},
        {label:'Subscribers',url:'/admin/students/subscribers',isActive:location.pathname == "/admin/students/subscribers"},
     ]
     const { data: subscribers, isLoading, error } = useQuery('subscribers', getSubscribers);
    
     if (isLoading) {
         return <p>Loading...</p>;
     }
     else if (error) {
         return <p>An error occurred: {error.message}</p>;
     }

    /*Les données des tableaux */
    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Email', field: 'email' },
        { label: 'Phone', field: 'phone' },
        { label: 'Duration', field: 'duration' },
        { label: 'Registration Date', field: 'registration_date' },
        { label: 'Status', field: 'status' },
      ];

  
      const data = subscribers.map((subscriber) => ({
        name: subscriber.client_name,
        email: subscriber.client_email,
        phone: '06 89 54 61 12' , 
        duration: subscriber.duration,
        registration_date: subscriber.start_date,
        status: [{ name: 'Subscriber', class:'btn_green' }],
  
      }));



 

    return (
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links}/>
            <Table columns={columns} data={data} />

        </>
    );
}

export default Subscribers;
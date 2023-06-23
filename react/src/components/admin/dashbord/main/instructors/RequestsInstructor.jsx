import React from 'react';
import NavbarDash from '../../navbar/NavbarDash';
import Table from '../Table';
import { useQuery } from 'react-query';
import { acceptInstructorRequest, getInstructorsRequests, refuseInstructorRequest } from '../../../../api/api__admin';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function RequestsInstructor(sidebarOpen, openSidebar) {
  const navigate = useNavigate();


    const links = [
        { label: 'Instructors', url: '/admin/instructors', isActive: location.pathname == "/admin/instructors"},
        { label: 'Requests', url: '/admin/instructors/requests', isActive: location.pathname =="/admin/instructors/requests" },
    ]

    const { data: instructorsRequestsData, isLoading, error } = useQuery('instructorsRequests', getInstructorsRequests);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }
    else if (error) {
        return <p>An error occurred: {error.message}</p>;
    }
    /******Accepter */
    const handleAcceptRequest = (requestId) => {
      navigate("/admin/instructors/requests/accept")
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to accept this !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, active it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Accepted!',
            'Instructor has been accepted.',
            'success'
          );
          acceptInstructorRequest(requestId);
          navigate("/admin/instructors/requests")
        }
        navigate("/admin/instructors/requests")
    
      });
    };
    /******Refuser */
    const handleRefuseRequest = (requestId) => {
      navigate("/admin/instructors/requests/refuse")
      console.log('Désactiver le compte de cette instructeur avec l\'ID:', requestId);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to refuse this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, refuse it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Refused!',
            'Instructor has been refused.',
            'success'
          );
          refuseInstructorRequest(requestId);
          navigate("/admin/instructors/requests")
        }
        navigate("/admin/instructors/requests")
    
      });
    };

    /*Les données des tableaux */
    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Email', field: 'email' },
        { label: 'Phone', field: 'phone' },
        { label: 'Status', field: 'status' },
        { label: 'Actions', field: 'actions' },
      ];

      const data = instructorsRequestsData.map((instructorRequest) => ({
        name: instructorRequest.name,
        email: instructorRequest.email,  
        phone: instructorRequest.phone_number, 
        courses_number: '0',
        
        status: [{ name:  `En attente`, class: 'btn_yellow' }],
        actions: [
          { name: 'Accepter', class: 'btn_green' , onclick: () => {  handleAcceptRequest(instructorRequest.id)}},
          { name: 'Refuser', class: 'btn_red',onclick: () => {  handleRefuseRequest(instructorRequest.id)}},
        ],
      }));


    return (
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links}/>
            <Table columns={columns} data={data} />
        </>  
    );
}

export default RequestsInstructor;
import React, { useEffect, useState } from 'react';
import user from '../../Images/user.gif'
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Components/SectionTitle';
import Swal from 'sweetalert2';
// import useAdmin from '../../Hooks/useAdmin';

const AllUsers = () => {
    // const [, ,refetch] = useAdmin(); 

    const [users, setUsers] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    const handleAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                // refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }

    const handleModerator = (user) =>{

        fetch(`http://localhost:5000/users/moderator/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                // refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Moderator Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }

    const handleDelete = (user) =>{

        fetch(`http://localhost:5000/user/${user._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                // refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is Delete Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }


    return (
        <>
        <Helmet>Abid | All Users</Helmet>
        <SectionTitle title={'All Users'}></SectionTitle>
        <section>
            <div className="custom-container">

                <div className="custom-row">
                <tbody className="mx-auto">
                {users && users.map((user, index) =>      <tr key={user._id} >
                            <td className='lg:text-lg font-bold  p-2 m-2'>
                                <span>{index + 1}</span>
                            </td>
                            <td className='lg:text-lg font-bold p-2 m-2'>
                             {user.name}
                            </td>
                            <td className='lg:text-lg font-bold p-2 m-2'>
                             <button onClick={()=>handleAdmin(user)} className="btn color font-bold">Make Admin</button>
                            </td>
                            <td className='lg:text-lg font-bold p-2 m-2'>
                             <button onClick={()=>handleModerator(user)} className="btn color font-bold">Make Moderator</button>
                            </td>
                            <td className='lg:text-lg font-bold p-2 m-2'>
                             <button onClick={()=>handleDelete(user)} className="btn color font-bold"><i class="fa-solid fa-trash"></i></button>
                            </td>
                            
                           
                        </tr>)}
              </tbody>
                </div>
            </div>
        </section>
        </>
    );
};

export default AllUsers;
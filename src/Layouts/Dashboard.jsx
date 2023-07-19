
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../Components/DashboardHeader';

const Dashboard = () => {
    return (
       <>
       <Helmet>
        <title>Abid | Dashboard</title>
       </Helmet>
       <DashboardHeader></DashboardHeader>
        <Outlet></Outlet>
       </>
    );
};

export default Dashboard;
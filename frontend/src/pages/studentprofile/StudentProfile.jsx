import Navbar from '../../components/navbar/Navbar';
import UserProfile from '../../components/update_profile/Profile'
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//Author: MAHBUB

function StudentProfile() {
  const navigate = useNavigate();
  const {loggedIn, role} = useSelector(state => state.user);
  if(!loggedIn || role !== 'user'){
    navigate('/signin')
  }
  return (
      <div>
        <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <UserProfile />
      </div>
      <footer><Footer /></footer>
    </div>
  );
}

export default StudentProfile;
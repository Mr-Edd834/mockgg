import react from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import {MapPin} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const bgStyle = {
    backgroundcolor: "#000000ff",
    backgroundSize: "cover",
    backgroundPosition: "center",
    Height: "100vh",
    width: "100%",
    color: "red"
  };

  return (
  
    <div className="page-content" style={bgStyle}>
     
      <div className="cards-wrapper">
        <div className="slide-top">
            <h1 id='welcome-message'>Welcome Mr.Edd,</h1>
      <div className="input-wrapper">
        <MapPin className="input-icon" size={20} />  
<input type="text" placeholder="Enter your location" />
      </div>
        <div className="cards-grid">
         
          <div className="card">
            <img className="card-image" alt="Delight meals" src="https://images.unsplash.com/photo-1598515211932-b130a728a769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFsYW5jZWQlMjBtZWFsfGVufDB8fDB8fHww" />
            <div className="card-content">
              <div className="card-title"><b>Delight meals.</b></div>
              <div className="card-text">Get your warm balanced meals here.</div>
            </div>
            <div className="card-actions">
              <button className="card-button" onClick={() => navigate('/delightmeals')}>GO</button>
            </div>
          </div>

          <div className="card">
            <img className="card-image" alt="Fastfood" src="https://media.istockphoto.com/id/692557700/photo/burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=F8z8w8zz6J4j1_rdIrwubc6wd_7GYpsU60-A7qj-vxE=" />
            <div className="card-content">
              <div className="card-title"><b>Fatfood.</b></div>
              <div className="card-text">Enjoy yourself on cheat day.</div>
            </div>
            <div className="card-actions">
              <button className="card-button" onClick={() => navigate('/fastfood')}>GO</button>
            </div>
          </div>

          <div className="card">
            <img className="card-image" alt="Snacks" src="https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jpc3BzfGVufDB8fDB8fHww" />
            <div className="card-content">
              <div className="card-title"><b>Snacks.</b></div>
              <div className="card-text">In for a quick bite.</div>
            </div>
            <div className="card-actions">
              <button className="card-button" onClick={() => navigate('/snacks')}>GO</button>
            </div>
          </div>

           <div className="card">
            <img className="card-image" alt="Fastfood" src="https://plus.unsplash.com/premium_photo-1722600019555-a9d9cd5ced3c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div className="card-content">
              <div className="card-title"><b>Bespoke Bites.</b></div>
              <div className="card-text">Prepare your weekly meal plan with your very own private chef.</div>
            </div>
            <div className="card-actions">
              <button className="card-button" onClick={() => navigate('/privatechef')}>GO</button>
            </div>
          </div>

 <div className="card">
            <img className="card-image" alt="Fastfood" src="https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8fDA%3D"/>
            <div className="card-content">
              <div className="card-title"><b>GrubMart.</b></div>
              <div className="card-text">Low on supplies? We got you covered.Stock up made simple.</div>
            </div>
            <div className="card-actions">
              <button className="card-button" onClick={() => navigate('/shopping')}>GO</button>
            </div>
          </div>

 <div className="card">
            <img className="card-image" alt="Fastfood" src="https://media.istockphoto.com/id/938158956/photo/burning-gas-burner.webp?a=1&b=1&s=612x612&w=0&k=20&c=wQRSX13GD8WILepxvnj-EHQwhHTTlqP-1Xlc8726nko="/>
            <div className="card-content">
              <div className="card-title"><b>Grub Flame.</b></div>
              <div className="card-text">Out of gas? We've got your flame.</div>
            </div>
            <div className="card-actions">
              <button className="card-button" onClick={() => navigate('/gas')}>GO</button>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
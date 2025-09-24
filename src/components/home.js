import react from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const bgStyle = {
    backgroundImage: "url('https://i.pinimg.com/1200x/ab/86/9b/ab869b111b99108f2615613537113ae9.jpg')",
    backgroundSize: "cover",
    Height: "100vh",
    width: "100%",
    color: "white"
  };

  return (
    <div className="page-content" style={bgStyle}>
      <div className="cards-wrapper">
        <div className="slide-top">
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
              <div className="card-text">in for a quick bite.</div>
            </div>
            <div className="card-actions">
              <button className="card-button" onClick={() => navigate('/snacks')}>GO</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
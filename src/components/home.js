import react from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const bgStyle = {
    backgroundImage: "url('https://i.pinimg.com/1200x/ab/86/9b/ab869b111b99108f2615613537113ae9.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "white"
  };

  return (
    <div className="page-content" style={bgStyle}>
      <div className="cards-wrapper">
        <div className="cards-grid">
          <div className="card">
            <img className="card-image" alt="Delight meals" src="" />
            <div className="card-content">
              <div className="card-title"><b>Delight meals.</b></div>
              <div className="card-text">Get your warm balanced meals here.</div>
            </div>
            <div className="card-actions">
              <button className="card-button" onClick={() => navigate('/delightmeals')}>GO</button>
            </div>
          </div>

          <div className="card">
            <img className="card-image" alt="Fastfood" src="" />
            <div className="card-content">
              <div className="card-title"><b>Fatfood.</b></div>
              <div className="card-text">Enjoy yourself on cheat day.</div>
            </div>
            <div className="card-actions">
              <button className="card-button" onClick={() => navigate('/fastfood')}>GO</button>
            </div>
          </div>

          <div className="card">
            <img className="card-image" alt="Snacks" src="" />
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
  );
}

export default Home;
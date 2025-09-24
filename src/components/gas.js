import react from 'react';


const pbgStyle = {
    backgroundImage: "url('https://media.istockphoto.com/id/1145430255/vector/fruits-and-vegetables-seamless-pattern.jpg?s=612x612&w=0&k=20&c=2ESF5mMwEhqIlYwtShzpOp3O_U_EncGZMpKMKR8_d7o=')",
    backgroundSize: "cover",  
    backgroundPosition: "center",
    Height: "100%",
    width: "100%",
    color: "red"
  };
const Gas = () => {
  return (
    

    <div style={pbgStyle}>
        <h1>Gas Page</h1>
        <p>This is the Gas component.</p>
    </div>
  );
}

export default Gas;
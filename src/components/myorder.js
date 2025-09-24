import react from 'react';
import {ClipboardList} from 'lucide-react';
import './Myorder.css';


const Myorder= () => {
  return (  
    <div className='myorder-content'>
        <h1>You don't have any orders yet</h1>  
        <ClipboardList size={240} />
    </div>
  );
}   

export default Myorder;

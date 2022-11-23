import './Btn-Home.scss';
import Btn1 from '../../../Assets/Btn-Home.png'
import { Link } from 'react-router-dom';
const BtnHome = () => {
    return(
        
            <div className='Btn-Home-Caja'><Link to={`/`}>
                    <img className='Btn-Home-Image' src={Btn1} alt="" /></Link>
            </div>
        
    )
}
export default BtnHome
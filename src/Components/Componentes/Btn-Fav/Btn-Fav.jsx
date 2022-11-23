import './Btn-Fav.scss';
import Btn1 from '../../../Assets/Btn-Fav.png'
import { Link } from 'react-router-dom';
const BtnFav = () => {
    return(
        
            <div className='Btn-Fav-Caja'><Link to={`/`}>
                    <img className='Btn-Fav-Image' src={Btn1} alt="" /></Link>
            </div>
        
    )
}
export default BtnFav
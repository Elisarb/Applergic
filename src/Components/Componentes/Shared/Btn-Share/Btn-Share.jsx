import './Btn-Share.scss';
import Btn1 from '../../../../Assets/Btn-Share.png'
import { Link } from 'react-router-dom';
const BtnShare = () => {
    return(
        
            <div className='Btn-Share-Caja'><Link to={`/`}>
                    <img className='Btn-Share-Image' src={Btn1} alt="" /></Link>
            </div>
        
    )
}
export default BtnShare
import './Btn-Home.scss';
import Btn1 from '../../../../Assets/Btn-Home-Active.png'
import Btn2 from '../../../../Assets/Btn-Home-Inactive.png'
import { Link, useLocation } from 'react-router-dom';
const BtnHome = () => {
        let location = useLocation();
    return(
        
            <div className='Btn-Home-Caja'><Link to={`/Home`}>
                    <img hidden={location.pathname==='/Home'? false : true} className='Btn-Home-Image' src={Btn1} alt="" />
                    <img hidden={location.pathname==='/Home'? true : false} className='Btn-Home-Image' src={Btn2} alt="" /></Link>
            </div>
        
    )
}
export default BtnHome
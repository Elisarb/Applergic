import './Btn-Fav.scss';
import Btn1 from '../../../Assets/Btn-Fav-Active.png'
import Btn2 from '../../../Assets/Btn-Fav-Inactive.png'
import { Link, useLocation } from 'react-router-dom';
const BtnFav = () => {
        let location = useLocation();
    return(
        
            <div className='Btn-Fav-Caja'><Link to={`/Favoritos`}>
                    <img hidden={location.pathname==='/Favoritos'? false : true} className='Btn-Fav-Image' src={Btn1} alt="" />
                    <img hidden={location.pathname==='/Favoritos'? true : false} className='Btn-Fav-Image' src={Btn2} alt="" /></Link>
            </div>
        
    )
}
export default BtnFav
import './Btn-Diary.scss';
import Btn1 from '../../../../Assets/Btn-Diary-Active.png'
import Btn2 from '../../../../Assets/Btn-Diary-Inactive.png'
import { Link, useLocation } from 'react-router-dom';
const BtnDiary = () => {
        let location = useLocation();
    return(
        
            <div className='Btn-Diary-Caja'><Link to={`/DiarioGlobal`}>
                    <img hidden={location.pathname==='/DiarioGlobal'? false : true} className='Btn-Diary-Image' src={Btn1} alt="" />
                    <img hidden={location.pathname==='/DiarioGlobal'? true : false} className='Btn-Diary-Image' src={Btn2} alt="" /></Link>
            </div>
        
    )
}
export default BtnDiary
import './Btn-Diary.scss';
import Btn1 from '../../../Assets/Btn-Diary.png'
import { Link } from 'react-router-dom';
const BtnDiary = () => {
    return(
        
            <div className='Btn-Diary-Caja'><Link to={`/`}>
                    <img className='Btn-Diary-Image' src={Btn1} alt="" /></Link>
            </div>
        
    )
}
export default BtnDiary
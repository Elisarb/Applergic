import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../contexts/JwtContext";
import { MyContext } from "../../contexts/MyContext";
import img1 from '../../../../../Assets/Btn-Salir.png'
import './AuthButton.scss'

export default function AuthButton () {
    const {jwt, setJwt} = useContext(JwtContext);
    const {t} = useContext(MyContext)
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setJwt(null);
        navigate("/");
        
    }
console.log(user)
    return jwt && user ? (
        
            
            <button className="BTNBYE"
            
                onClick={signOut}
            >
                <img src={img1} alt="" />
                <h1>{t('salir')}</h1>
            </button>
        
    ) : (
        <p>You are not logged in.</p>
    );
}

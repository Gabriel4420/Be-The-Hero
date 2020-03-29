import React, {useState} from 'react';
import './styles.css';
import {FiLogIn} from 'react-icons/fi';
import { Link , useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
            e.preventDefault();

            try {
                const res = await api.post('sessions',{ id });

                localStorage.setItem('ongId', id);
                localStorage.setItem('ongName',res.data.name);

                history.push('/profile');
            } catch (error) {
                console.log(error);
            }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogin}>

                <h1>Faça seu Login</h1>

                <input placeholder="Digite seu ID" value={id} onChange={e => setId(e.target.value)}/>
                <button type="submit" className="button">Entrar</button>

                
                <Link className="back-link"  to="/register">
                <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
                </form>
            </section>

            <img src={heroesImg} alt="imagem de herois"/>
        </div>
    );
}
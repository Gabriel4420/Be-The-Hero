import React, { useState } from 'react';
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

import { Link , useHistory} from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [wtsapp, setWtsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email, 
            wtsapp, 
            city,
            uf
        }

        try {
            const res = await api.post('ongs',data);

        alert(`Seu ID de acesso: ${res.data.id}`);

        history.push('/');
        }catch(err){
            alert(err);
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastro</h1>

                    <p>Entre na nossa plataforma ,<br/> e divulgue as necessidades da sua ong, <br/> para que ela possa ser encontrada!</p>

                    <Link className="back-link"  to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar ao inicio
                    </Link>


                </section>
                
                <form onSubmit={handleRegister}>
                
                    <input placeholder="&#x1F4E2; Nome da ong" value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="&#x1F4E7; Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="&#x1F4F1; Whatsapp"
                        value={wtsapp}
                        onChange={e => setWtsapp(e.target.value)}
                    />
                    <div className="input-group">

                        <input placeholder="&#x1F4CD; UF" style={{ width:80 }}
                            value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                        <input placeholder="&#x1F30E; Cidade"
                            value={city}
                        onChange={e => setCity(e.target.value)}
                        />

                        
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    );
}
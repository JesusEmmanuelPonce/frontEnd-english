import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../header';
import Loader from '../../../loader/loader';
import TableNationalities from './TableNationalities';

const Nationalities = () =>{

    const [nationalities, setNationalities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getNationalities = async() =>{
            const resultado = await axios.get('https://backend-english-pb.herokuapp.com/nationalities');
            setNationalities(resultado.data.nationalities);
            setLoading(false);
        }

        getNationalities();
    },[]);

    console.log(nationalities);

    return(
        <>
            <Header
                title="Nacionalidades"
            />
            {
                loading ? <Loader loading={loading}/>
                        : <TableNationalities
                            table={nationalities}
                          />
            }
        </>
    )
}

export default Nationalities;
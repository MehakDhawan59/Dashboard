import Header from './Header';
import './Home.css';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import React,{useState,useEffect} from 'react';
import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';
import ShowData from './ShowData';
import Pagination from './Pagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box ,{TextField}from '@mui/material';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home =()=>{

    const[cryptoData, setCryptoData]=useState([]);
    const URL ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d";
    const [currentPage, setCurrentPage] = useState(1);
    const [cryptoPerPage, setCryptoPerPage] = useState(10);
    const indexOfLastUser = currentPage * cryptoPerPage;
    const indexOfFirstUser = indexOfLastUser - cryptoPerPage;
    const currentCrypto = cryptoData.slice(indexOfFirstUser, indexOfLastUser);
    const numberOfPages = Math.ceil(cryptoData.length/cryptoPerPage);
   
    const setPageNumber=(number)=>{
        setCurrentPage(number);
        
      }
      const prevPage =()=>{
        if(currentPage!==1){
            setCurrentPage(currentPage-1);
        }
      }

      const nextPage =()=>{
        if(currentPage!==numberOfPages){
            setCurrentPage(currentPage+1);
        }
      }

      const handleChange=(e)=>{
        setCryptoPerPage(e.target.value);
        setCurrentPage(1);
      }

      const pageNumbers = [];
      for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i);
      }
    const fetchData = async ()=>{
        try{
            const data = await axios.get(URL);
            const res= data.data;
            console.log(data.data);
            setCryptoData(res);

        }

        catch(error){
            console.log(error.message);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

        return(
            <div>
            <Header/>
            
            <div style={{backgroundColor:"#F8FAFC"}}>
                <div className="middlePanel">
                
                <h2 style={{marginBottom:"1", marginTop:"0"}}>Top 100 Cryptocurrencies by Market Cap</h2>

                <div className="mobile-hidden">

                <div>
                <button style={{marginRight:"0.8rem", border:"0", padding:"0.5rem", borderRadius:"0.5rem"}}><GradeOutlinedIcon sx={{fontSize:"13px"}}/><span>Favorities</span></button>
                <button style={{margin:"0.8rem",border:"0", padding:"0.5rem", borderRadius:"0.5rem",color:"#3861FB"}}>CryptoCurrencies</button>
                <button style={{margin:"0.8rem",border:"0", padding:"0.5rem", borderRadius:"0.5rem"}}>DeFi</button>
                <button style={{margin:"0.8rem",border:"0", padding:"0.5rem", borderRadius:"0.5rem"}}>NFTs & Collectibles</button>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <span style={{fontSize:"14px"}}>Show rows</span>
                     <FormControl sx={{m:1}}>
                        
                        <Select
                                InputProps={{className: 'my-input-class'}}
                                value={cryptoPerPage}
                                onChange={handleChange}>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        </Select>
                </FormControl>
                </div>
                </div>
                </div>
            </div>
            <div className="body-content">
            <ShowData cryptoData={currentCrypto}/>
            <Pagination numberOfPages={numberOfPages} setPageNumber={setPageNumber} prevPage={prevPage} nextPage={nextPage} pageNumbers={pageNumbers}/>
            </div>
            </div>
            
            

        )
}

export default Home;
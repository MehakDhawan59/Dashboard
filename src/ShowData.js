import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import './ShowData.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import React,{useState} from 'react';
import ReactPaginate from 'react-paginate';
import Pagination from './Pagination';
import ModalBox from './ModalBox';
const ShowData=({cryptoData})=>{
    const[index, setIndex]= useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const sendData=(idx)=>{
        setOpen(true);
        console.log("idx",idx);
        setIndex(idx);
    }
    

    return(

        <>
            <TableContainer component={Paper} className="table-desktop" style={{border:"none", boxShadow: "none"}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{fontWeight:"bold"}}>
                                    <TableCell align="center" >
                                        
                                    </TableCell>
                                    <TableCell align="center">#</TableCell>
                                    <TableCell style={{fontWeight:"bold"}}>NAME</TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>PRICE</TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>
                                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                        <span>24H{" "}</span>
                                        <ArrowDownwardIcon style={{color:"#0052FE"}}/>

                                        </div>
                                       
                                        </TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>7D</TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>MARKET CAP</TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>VOLUME{"(24H)"}</TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>CIRCULATING SUPPLY</TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {cryptoData.map((crypto,index) => (
                                    <>
                                <TableRow className='table-content'
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    
                                    >
                                    <TableCell align="center" >
                                    <GradeOutlinedIcon style={{fontSize:"15px",color:"gray"}} />
                                    </TableCell>
                                    <TableCell align="center" style={{fontWeight:"bold",color:"gray"}}>{crypto.market_cap_rank}</TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>
                                        <div className="image-text">
                                            <img src={crypto.image} style={{height:"25px", width:"25px",marginRight:"0.5rem"}}/>
                                            <span style={{textTransform: "capitalize",marginRight:"0.3rem"}}>{crypto.id}{" "}</span><span style={{textTransform: "uppercase", color:"gray"}}>{" "}{crypto.symbol}</span>
                                        </div>
                                        
                                    </TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>${crypto.current_price.toLocaleString(undefined, {maximumFractionDigits:2})}</TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>
                                        {
                                            crypto.price_change_percentage_24h>0 ? (<div style={{color:"#EA3943",display:"flex",alignItems:"center"}}>
                                            <ArrowDropDownIcon/>
                                            <span>{crypto.price_change_percentage_24h.toFixed(2)}%</span>
                                            </div>):(<div style={{color:"#EA3943",display:"flex",alignItems:"center"}}>
                                                <ArrowDropDownIcon/>
                                                <span>{crypto.price_change_percentage_24h.toFixed(2)*-1}%</span>
                                            </div>)
                                        }

                                    </TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>
                                        {
                                            crypto.market_cap_change_percentage_24h>0 ? (<div style={{color:"#16C784",display:"flex",alignItems:"center"}}>
                                            <ArrowDropUpIcon/>
                                            <span>{crypto.market_cap_change_percentage_24h.toFixed(2)}%</span>
                                            </div>):(<div style={{color:"#16C784",display:"flex",alignItems:"center"}}>
                                                <ArrowDropUpIcon/>
                                                <span>{crypto.market_cap_change_percentage_24h.toFixed(2)*-1}%</span>
                                            </div>)
                                        }

                                    </TableCell>
                                    <TableCell  align="right"style={{fontWeight:"bold"}}>${crypto.market_cap.toLocaleString(undefined, {maximumFractionDigits:2})}</TableCell>
                                    <TableCell style={{fontWeight:"bold"}}>
                                        <div style={{display:"flex", flexDirection:"column",textAlign:"right"}}>
                                        <span>${crypto.total_volume.toLocaleString(undefined, {maximumFractionDigits:2})}</span>
                                        <span style={{textTransform: "uppercase", color:"gray", fontSize:"13px",textAlign:"right"}}>932071 {crypto.symbol}</span>
                                        </div>
                                       </TableCell>
                                       <TableCell align="right" style={{fontWeight:"bold"}}>
                                        <div style={{display:"flex", flexDirection:"column", justifyContent:"right"}}>
                                            <span>
                                            {crypto.circulating_supply.toLocaleString(undefined, {maximumFractionDigits:0})}{" "}<span style={{textTransform: "uppercase"}}>{crypto.symbol}</span>
                                            </span>
                                        <div style={{display: 'flex',justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                                        <LinearProgress 
                                        variant="determinate" value={80} style={{width: '80%', height: '8px',backgroundColor:"#EFF2F5", borderRadius:"0.5rem"}} sx={{
                                            '& .MuiLinearProgress-bar1Determinate': {
                                                backgroundColor: '#CFD6E4',
                                            },
                                            '& .MuiLinearProgress-bar2Determinate': {
                                                backgroundColor: '#fafafa',
                                            }} }/>

                                        </div>
                                        </div>
                                        </TableCell>

                                       <TableCell style={{fontWeight:"bold"}}><MoreVertIcon style={{fontSize:"small"}}/></TableCell>
                                </TableRow>
                                </>
                            ))}
                            
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer component={Paper} className="table-mobile" style={{border:"none", boxShadow: "none"}}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{fontWeight:"bold"}}>
                                    <TableCell align="center" >
                                        
                                    </TableCell>
                                    <TableCell style={{fontWeight:"bold"}}>NAME</TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>PRICE</TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>
                                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                        <span>24H{" "}</span>
                                        <ArrowDownwardIcon style={{color:"#0052FE"}}/>

                                        </div>
                                       
                                        </TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {cryptoData.map((crypto,index) => (
                                    <>
                                <TableRow className='table-content'
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    onClick={()=>sendData(index)}
                                    >
                                    <TableCell align="center" >
                                    <GradeOutlinedIcon style={{fontSize:"15px",color:"gray"}} />
                                    </TableCell>
                                    
                                    <TableCell align="right" style={{fontWeight:"bold"}}>
                                        <div className="image-text">
                                            <img src={crypto.image} style={{height:"25px", width:"25px",marginRight:"0.5rem"}}/>
                                            <span style={{textTransform: "capitalize",marginRight:"0.3rem"}}>{crypto.id}{" "}</span><span style={{textTransform: "uppercase", color:"gray"}}>{" "}{crypto.symbol}</span>
                                        </div>
                                        
                                    </TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>${crypto.current_price.toLocaleString(undefined, {maximumFractionDigits:2})}</TableCell>
                                    <TableCell align="center" style={{fontWeight:"bold"}}>
                                        {
                                            crypto.price_change_percentage_24h>0 ? (<div style={{color:"#EA3943",display:"flex",alignItems:"center"}}>
                                            <ArrowDropDownIcon/>
                                            <span>{crypto.price_change_percentage_24h.toFixed(2)}%</span>
                                            </div>):(<div style={{color:"#EA3943",display:"flex",alignItems:"center"}}>
                                                <ArrowDropDownIcon/>
                                                <span>{crypto.price_change_percentage_24h.toFixed(2)*-1}%</span>
                                            </div>)
                                        }

                                    </TableCell>
                                    
                                </TableRow>
                                
                                </>
                            ))}
                            
                        </TableBody>
                    </Table>
                </TableContainer>
                {

                    cryptoData.length &&
                
                <ModalBox open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}
                                index={index} cryptoData={cryptoData}/>

                }
    
        </>
    )
}

export default ShowData;
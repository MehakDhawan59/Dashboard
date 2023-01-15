import Backdrop from '@mui/material/Backdrop';
import Box,{Grid} from '@mui/material';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import './ModalBox.css';
const ModalBox=({open,setOpen, handleOpen, index, cryptoData,handleClose})=>{

    
        return(

            <Dialog open={open} onClose={handleClose} 
            sx={{
                "& .MuiDialog-container": {
                  "& .MuiPaper-root": {
                    width: "90%"
                  },
                },
                borderRadius:"8px"
              }}

              
            >
              <Grid container direction="row" justifyContent="space-between">
                  <DialogTitle>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <img src ={cryptoData[index].image} style={{height:"25px", width:"25px",marginRight:"0.5rem"}}/>
                        <span style={{textTransform:"capitalize"}}>{cryptoData[index].id}</span>
                    </div>
                        
                  </DialogTitle>
                  <IconButton aria-label="close"onClick={handleClose}>
                      <ClearIcon />
                      </IconButton>
                      
              </Grid>
            <DialogContent sx={{padding:"1rem"}}>
                <div className="content">
                    {/* price */ }
                    <div style={{display:"flex", flexDirection:"column", marginBottom:"1rem"}}>
                    <div style={{display:"flex",  marginBottom:"0.3rem", justifyContent:"space-between"}}>
                            <div style={{fontWeight:"bold"}}>PRICE</div>
                            <div style={{fontWeight:"bold"}}>24H</div>
                            <div style={{fontWeight:"bold"}}>7D</div>
                    </div>

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>${cryptoData[index].current_price.toLocaleString(undefined, {maximumFractionDigits:2})}</div>
                        
                        {
                            cryptoData[index].price_change_percentage_24h>0 ? (<div style={{color:"#EA3943",display:"flex",alignItems:"center"}}>
                            <ArrowDropDownIcon/>
                            <span>${cryptoData[index].price_change_percentage_24h.toFixed(2)}%</span>
                            </div>):(<div style={{color:"#EA3943",display:"flex",alignItems:"center"}}>
                            <ArrowDropDownIcon/>
                            <span>${cryptoData[index].price_change_percentage_24h.toFixed(2)*-1}%</span>
                            </div>)
                        }

                        {
                            cryptoData[index].market_cap_change_percentage_24h>0 ? (<div style={{color:"#16C784",display:"flex",alignItems:"center"}}>
                            <ArrowDropUpIcon/>
                            <span>${cryptoData[index].market_cap_change_percentage_24h.toFixed(2)}%</span>
                            </div>):(<div style={{color:"#16C784",display:"flex",alignItems:"center"}}>
                            <ArrowDropUpIcon/>
                            <span>${cryptoData[index].market_cap_change_percentage_24h.toFixed(2)*-1}%</span>
                            </div>)
                        }   
                    </div>
                    </div>

                    {/**market cap */}
                    <div style={{display:"flex", flexDirection:"column", marginBottom:"1rem", justifyContent:"center"}}>
                        <div style={{fontWeight:"bold", marginBottom:"0.3rem"}}>
                            MARKET CAP
                        </div>
                        <div>
                            ${cryptoData[index].market_cap.toLocaleString(undefined, {maximumFractionDigits:2})}
                        </div>

                    </div>

                     {/**volume */}
                     <div style={{display:"flex", flexDirection:"column",  marginBottom:"1rem", justifyContent:"center"}}>
                        <div style={{fontWeight:"bold", marginBottom:"0.3rem"}}>
                            VOLUME 24H
                        </div>
                        <div>
                            ${cryptoData[index].total_volume.toLocaleString(undefined, {maximumFractionDigits:2})}
                            <span style={{color:"gray", textTransform:"uppercase"}}>{"("}932071{" "}{cryptoData[index].symbol}{")"}</span>
                        </div>

                    </div>

                     {/**volume */}
                     <div style={{display:"flex", flexDirection:"column",  marginBottom:"1rem", justifyContent:"center"}}>
                        <div style={{fontWeight:"bold", marginBottom:"0.3rem"}}>
                            CIRCULATING SUPPLY
                        </div>
                        <div style={{marginBottom:"0.3rem"}}>
                            {cryptoData[index].circulating_supply.toLocaleString(undefined, {maximumFractionDigits:0})}
                        </div>
                        <div>
                        <LinearProgress 
                                        variant="determinate" value={80} style={{width: '50%', height: '8px',backgroundColor:"#EFF2F5", borderRadius:"0.5rem"}} sx={{
                                            '& .MuiLinearProgress-bar1Determinate': {
                                                backgroundColor: '#CFD6E4',
                                            },
                                            '& .MuiLinearProgress-bar2Determinate': {
                                                backgroundColor: '#fafafa',
                                            }} }/>
                        </div>

                    </div>

                </div>
            </DialogContent>   
          </Dialog>

        )
}

export default ModalBox;


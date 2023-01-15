import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Pagination.css";
import {CircularProgress,Grid,InputAdornment,TextField,Box, Button} from "@mui/material";

const Pagination = ({numberOfPages, setPageNumber, prevPage, nextPage, pageNumbers}) =>{

    

   return (
    <>
            <Grid container direction="row" justifyContent="center" margin="1rem">
                <button onClick={() => setPageNumber(1)} style={{margin:"0.5rem"}}>{"<<"}</button>
                <button onClick={prevPage} style={{margin:"0.5rem"}}>{"<"}</button>
                {pageNumbers.map((number) => (
                        <button key ={number}onClick={() => setPageNumber(number)} style={{margin:"0.5rem"}}>{number}</button>
                ))}
                <button onClick={nextPage} style={{margin:"0.5rem"}}>{">"}</button>
                <button onClick={() => setPageNumber(numberOfPages)} style={{margin:"0.5rem"}}>{">>"}</button>
            </Grid>

            </>
 );
}

export default Pagination;
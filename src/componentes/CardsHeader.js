import React, {  useEffect, useState} from 'react';
import {Card, Typography, CardContent, CardActions} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';







function CardsHeader(props){
   
    

    const useStyles= makeStyles(()=>({
        root:{
            textAlign: 'center',
            background: props.color,
            // margin: 5,
            marginTop: 5         
        },
        texto:{
            fontSize: 18,
            color: props.font
        },
        titulo:{
            fontWeight: 'bold',
            fontSize: 22,
            color: props.font
        },
       
        })); /*creamos los estilos dentro de la clase para que sea reutulizable*/ 
    
    const classes = useStyles();
    
    return(
       /*creacion de las tarjetas. a los iconos los traemos del Dashboard.js mediante los props, por eso se importan ahí*/
        <Card className={classes.root}>
        <CardContent>
            {props.icono} 
            <Typography className={classes.titulo}>
            {props.titulo}
            </Typography>

            <Typography className={classes.texto}>
            {props.texto}
            </Typography>

            
        </CardContent>
    </Card>
);
    
};

export default CardsHeader;
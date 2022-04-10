import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/img/notebook-mano.jpg';

const useStyles = makeStyles(()  => ({ //creacion de estilos PASO I
    root:{
        flexGrow: 1 //comenzamos con estra propiedad 
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '20%'
    }
}));


function Navbar(props){
    
    const classes = useStyles();
    
    return(
       
        <div className={classes.root}> 
            <AppBar position ="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            AndreaScript
                        </Typography>
                    <IconButton color="inherit">
                         <img src={logo} width="80px" height="60px" className={classes.imagen} alt="Imagen de una compu"/>
                
                    </IconButton>
                </Toolbar>
            </AppBar>
        
           
        </div>
    )
};

export default Navbar;
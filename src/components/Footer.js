import React from 'react';
import Typography from '@material-ui/core/Typography';
import { AppBar, Container, Toolbar } from '@material-ui/core';

export const Footer = () => {
    return(
        
        <AppBar position="static" color="primary">
            <Container >
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                        Designed By Mirza Iqbal
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    
    );
}
import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import {githubIcon as ghIcon} from '../assets/githubIcon.svg'

const techStackLables = ['JavaScript', 'TypeScript', 'React', 'Node'];

const Profile = () => {
  return (
    <Container sx={{display: 'flex', flexDirection: 'column'}}>
        <Box 
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'cetner',
            height: '100%'
            
        }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h1" >
                    Alejandro Chanocua
                </Typography>
                <Typography >
                    Hi 👋🏼 I'm a Front-end developer based out of California 📍
                </Typography>
                <div>
                    
                </div>
                
                
            </Box>
        </Box>
    </Container>
    
  )
}

export default Profile
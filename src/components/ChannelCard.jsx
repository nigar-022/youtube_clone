import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle, Checklist } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants'

function ChannelCard({channel}) {
  console.log(channel)
  return (
   <Box sx={{boxShadow:'none', borderRadius:'20px', display:'flex', justifyContent:'center', alignItems: 'center', width: {xs: '356px', md: '320px'}, height: {xs: '326px', margin: 'auto'}}}> 
    <Link to={`/channel/${channel.id.channelId}`}>

      <CardContent sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', textAlign: 'center',  color: '#fff'}}>
        <CardMedia image={channel.snippet.thumbnails.high.url || demoProfilePicture}
        alt = {channel.snippet.tittle}
        sx={{borderRadius: '50%', height: '180px', widht:'180px', mb: 2, border: '1px solid #e3e3e3'}}
        />
        <Typography variant='h6'>
          {channel.snippet.title}
          <CheckCircle sx={{fontSize: 14, color: 'grey', ml:'5px'}}/>
        </Typography>
        {channel?.statistics?.subscriberCount && (
          <Typography>{parseInt(channel.statistics.subscriberCount).toLocaleString()} Subscribers</Typography>
        )}

      </CardContent>
    </Link>
   </Box>
  )
}

export default ChannelCard
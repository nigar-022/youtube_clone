import { Box, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import {Sidebar, Videos} from '../components/index'

import { fetchAPIData } from '../utils/fetchFromAPI';

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos,setVideos] = useState([])

  useEffect(() => {
    fetchAPIData(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items)
    })

  },[selectedCategory])

  return (
    <Stack
      sx={{ flexDirection: { sx: 'column', md: 'row' } }}
    >
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar 
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{ color: '#fff', mt: 1.5 }}>
          Copyright 2023 JSM Media
        </Typography>

      </Box>

      <Box p={2} sx={{overflowY:'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#F31503'}}>videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

import { Navbar, ChannelDetails, VideoDetail, SearchFeed, Feed } from './components'

// import Feed from './components/Feed';
// import Navbar from './components/Navbar';
// import ChannelDetails from './components/ChannelDetails';
// import SearchFeed from './components/SearchFeed';
// import VideoDetail from './components/VideoDetail';

function App() {

  return (

    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;

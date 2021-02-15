import React from 'react'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import VideoList from './components/VideoList'
import { Box } from '@material-ui/core'

const Home = () => {

    return (
        <>
            <Topbar />
            <Box display='flex'>
                <Navbar />
                <VideoList />
            </Box>
        </>
    )
}

export default Home

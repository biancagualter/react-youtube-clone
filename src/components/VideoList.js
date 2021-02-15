import React from 'react'
import { Toolbar, Box, Typography  } from '@material-ui/core'
// import useStyles from '../styles/index'

const VideoList = () => {
    // const classes = useStyles()
    return (
        <Box p={4}>
            <Toolbar />
            <Typography variant='h5' color='textPrimary' style={{ fontWeight: 600 }}>
                Recomendados
            </Typography>
        </Box>
    )
}

export default VideoList

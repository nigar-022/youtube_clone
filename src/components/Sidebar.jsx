import { Stack } from '@mui/material'
import React from 'react'

import { categories } from '../utils/constants.js'


export default function Sidebar({selectedCategory,setSelectedCategory}) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        width: {md: 'max-content'},
        flexDirection: { md: 'column' }
      }}
    >

      {
        categories.map((category) => (
          <button
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && '#FC1503' ,
            color: 'white'
          }}
          key={category.name}
          >
            <span 
            style = {{color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'
            }}>{category.icon}</span>
            <span
            style = {{ opacity: category.name === selectedCategory ? '1' : '0.5'}}>{category.name}</span>
          </button>
        ))
      }
    </Stack>
  )
}

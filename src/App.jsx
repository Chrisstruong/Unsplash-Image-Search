import { useState } from 'react'
import ImageList from './components/ImageList'
import SearchField from './components/SearchField'
import ImageContextProvider from './contexts/ImageContextProvider'


function App() {

  return (
   <ImageContextProvider>
    <div>
      <SearchField />
      <ImageList />
    </div>
   </ImageContextProvider>
   

  )
}

export default App

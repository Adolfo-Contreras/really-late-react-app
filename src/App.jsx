import Typography from '@mui/material/Typography'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import { Button } from '@mui/material'
import { getAllNews, getTopNews } from './apiQuery'

function App() {
  return (
    <main>
    <Navbar/>
    <div className=' m-8'>
      <Typography variant="h3" color="initial">Welcome to <span className='logoColor'>No/\/Sense</span> <span className='logoColor'>News</span> App</Typography>
      <Carousel/>
      <Button onClick={()=>getTopNews()}>top</Button>
      <Button onClick={()=>getAllNews()}>all</Button>
    </div>
    </main>
  )
}

export default App

import styles from '@/styles/Home.module.css'
import { useContext } from 'react'
import Header from '@/componemts/Header'
import Search from '@/componemts/Search'
import SearchOutcome from '@/componemts/SearchOutcome'

function Home(props) {

  return (
    <div>
      <hr style={{ backgroundColor: 'rgba(235, 235, 235, 1)' ,border:'0px',height:'1px'}} />
      <Search data={props.initialData}/>
      <SearchOutcome data={props.initialData}/>
    </div>
  )



  
}

export async function getStaticProps() {
  const response = await fetch('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')

  if (!response.ok) {
    throw new Error('Fetch fail')
  }

  const data = await response.json()
  return {
    props: {
      initialData: data.map((item) => ({
        sarea: item.sarea,
        sna: item.sna,
        sbi: item.sbi,
        bemp: item.bemp
      }))
    },
  };
}

export default Home


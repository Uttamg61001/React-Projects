import { Grid, GridItem } from '@chakra-ui/react'
import DashboardLayout from '../../Component/DashboardLayout'
import Portfolio from './components/Portfolio'
import Pricesection from './components/Pricesection'
import Transaction from './components/Transaction'
import InfoCard from './components/InfoCard'
const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid 
      gridTemplateColumns= {{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }} gap="6"
        >
          <GridItem colSpan={{
            base: 1,
            xl: 2,
          }}><Portfolio/>
      </GridItem>
      <GridItem colSpan={1}><Pricesection/></GridItem>
      <GridItem colSpan={1}><Transaction/></GridItem>
      <GridItem colSpan={1}><InfoCard imgUrl="Visual.svg" 
      
      tagText="Loan" inverted={false}/></GridItem>
      <GridItem colSpan={1}><InfoCard imgUrl="Dark.svg" tagText="Contact" inverted={true}
      /></GridItem>
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard

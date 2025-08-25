import React from 'react'
import StatsGrid from './StatsGrid'
import ChartSection from './ChartSection'
import TableSection from './TableSection'

const Dashboard = () => {
  return (
    <div className='space-y-6 '>
      <StatsGrid />


      <ChartSection />

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
            <TableSection/>

        </div>

      </div>
    </div>
  )
}

export default Dashboard

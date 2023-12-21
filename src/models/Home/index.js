import React from 'react'
import ImageSlider from '../../component/ImageSlider'
import ClientsOur from '../../component/ClientsOur'
import ManageCom from '../../component/ManageCom'
import Unseen from '../../component/Unseen'
import Design from '../../component/Design'
import Helping from '../../component/Helping'
import Masking from '../../component/Masking'

const Home = () => {
  return (
    <div>
      <ImageSlider/>
      <ClientsOur/>
      <ManageCom/>
      <Unseen/>
      <Helping/>
      <Design/>
      <Masking/>
    </div>
  )
}

export default Home

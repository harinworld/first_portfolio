import AboutMe from '@/components/about/AboutMe'
import Meta from '@/components/Meta'
import React from 'react'

const about = () => {
  return (
    <>
        <Meta title='About Me' name='name' description='description' />
        <AboutMe/>
    </>
  )
}

export default about
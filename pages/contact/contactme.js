import ContactMe from '@/components/contact/ContactMe'
import Meta from '@/components/Meta'
import React from 'react'

const about = () => {
  return (
    <>
        <Meta title='Contact Me' name='name' description='description' />
        <ContactMe/>
    </>
  )
}

export default about
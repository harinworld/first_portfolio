import PDF from '@/components/work/ProjectWork'
import Meta from '@/components/Meta'
import React from 'react'

function resume() {
  return (
    <>
      <Meta title='RESUME PDF' name='name' description='description' />
      <PDF/>
    </>
  )
}

export default resume
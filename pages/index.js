import Portfolio from '@/components/main/Portfolio'
import Meta from '@/components/Meta'
import { motion } from 'framer-motion'



export default function Home() {

  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100
  };

  return (
    <>
      <Meta title='JM Portfolio' name='name' description='description' />
        <Portfolio/>
    </>
  )
}

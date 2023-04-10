import Context from '@/components/context/Context'
import '@/styles/globals.scss'
import { motion, AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {


  return (
    <Context>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial='initialState'
          animate='animateState'
          exit='exitState'
          transition={{
            duration: 0.5,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
        >
          <Component {...pageProps} key={router.route}/>
        </motion.div>
      </AnimatePresence>
    </Context>
  )
}


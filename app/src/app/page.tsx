import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from './components/navbar/navbar'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '700']
 })

export default function Home() {
  return (
    <main className={inter.className}>
      <div className={styles.main}>
        <Navbar />
      </div>
    </main>
  )
}

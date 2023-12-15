import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="https://github.com/lucasmaciel1996/xml-to-json" >
        <h1>XML TO JSON</h1>
      </Link>

      <section className={styles.section}>

        <Image src={'https://github.com/lucasmaciel1996.png'} width={100} height={100} alt='' />

        <h4>
          Lucas Maciel
          <Link href="https://github.com/lucasmaciel1996">
            GitHub
          </Link>
        </h4>
      </section>
    </main >
  )
}

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <article className='mainWrap'>
      <header>
        <div className="headerWrap">
          <Link href="/" className="logo hidden">두로그</Link>
          <Link href="/todo" className="logo hidden">TODO</Link>
        </div>
      </header>
    </article>
  )
}

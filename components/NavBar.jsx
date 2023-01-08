import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <strong>
              <Image src={'/home.png'} alt='home' width={50} height={50} />
            </strong>
          </li>
        </ul>
        <ul>
          <li>
            <Link href='/news'>News</Link>
          </li>
          <li>
            <Link href='/trending'>What`s hot 🔥</Link>
          </li>
          <li>
            <Link href='/github'>Placeholder</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

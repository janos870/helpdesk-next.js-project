import Link from 'next/link'
import Image from 'next/image'
import Logo from './forum.png'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Dojo Helpdesk logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
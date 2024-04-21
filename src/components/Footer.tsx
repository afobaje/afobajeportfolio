import Link from 'next/link'

export default function Footer() {
  const links = [
    {
      link: 'mailto:ikukoyidave@gmail.com',
      label: 'Email'
    },
    {
      link: 'https://linkedin.com/in/ikukoyi-david',
      label: 'Linkedin'
    },
    {
      link: 'https://afobaje.hashnode.dev',
      label: 'Blog'
    }
  ]
  return (
    <footer className='w-full bg-milky-white min-h-[50vh] md:min-h-[100dvh]'>
      <div className='flex px-10 md:px-20 flex-col'>
        <div className='text-4xl md:text-8xl font-extrabold gap-4 md:gap-8 flex flex-col'>
          <p>Send a message!</p>
          <p>Let us collaborate</p>
        </div>
        <p className='text-2xl mt-3 inline-flex flex-col md:flex-row gap-2'><span>&copy;{new Date().getFullYear()}</span><span>Afobaje.</span> <span>All rights reserved.</span></p>

        <div className="links flex flex-col gap-2 mt-5">
          {
            links.map((link: any, index: number) => <Link key={index} className='hover:underline underline-offset-2 ' href={link.link}>{link.label}</Link>)
          }
          {/* <Link className='hover:underline underline-offset-2 ' href='mailto:ikukoyidave@gmail.com'>Email</Link>
                <Link className='hover:underline underline-offset-2 ' href='https://linkedin.com/in/ikukoyi-david'>Linkedin</Link>
                <Link className='hover:underline underline-offset-2' href='https://afobaje.hashnode.dev'>Blog</Link> */}
        </div>
      </div>
    </footer>
  )
}

import {motion} from "framer-motion"

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
    <motion.nav className='navbar-blogs'>
    </motion.nav>

    {children}
    </>
  );
}

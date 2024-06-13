import React from 'react'
import LoginDialog from './LoginDialog'

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
  return (
    <section className='navbar'>
        <img src='/mainLogo.png' className='nav-logo'/>
        <button className='login-btn' onClick={() => setOpen(true)}>Login / Sign up</button>
        {<LoginDialog open={open} setOpen={setOpen}/>}
    </section>
  )
}

export default Navbar
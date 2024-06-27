import React from 'react'
import LoginDialog from './LoginDialog'
import RegisterDialog from './RegisterDialog';
import ProfileAvator from './ProfileAvator';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);
  return (
    <section className='navbar sticky-top'>
        <img src='/mainLogo.png' className='nav-logo'/>
        {true ? <button className='login-btn' onClick={() => setOpen(true)}>Login / Sign up</button> :<ProfileAvator/>}
        {<LoginDialog open={open} setOpen={setOpen} setOpenRegister={setOpenRegister}/>}
        {<RegisterDialog open={openRegister} setOpen={setOpenRegister} setOpenLogin={setOpen} openLogin={open} />}
    </section>
  )
}

export default Navbar
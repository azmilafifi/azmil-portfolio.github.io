import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a href="https://linkedin.com/in/azmilafifi"><BsLinkedin></BsLinkedin></a>
          <a href="https://github.com/azmilafifi"><AiOutlineGithub></AiOutlineGithub></a>
    </div>
  )
}

export default HeaderSocials
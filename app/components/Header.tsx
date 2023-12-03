'use client'

import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {

    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <header className="header box-gray">
            <div className="container">
                <h1><Link href="/">SuperwindUI</Link></h1>
                <nav>
                    <ul className={`menu ${isActive ? 'isactive' : ''}`}>
                        <li className="/docs"><Link href="/docs">docs</Link></li>
                        <li className="/blog">blog</li>
                        <li><FontAwesomeIcon icon={faGithub} /></li>
                        <li><Link href="/https://www.npmjs.com/package/superwindui"><FontAwesomeIcon icon={faNpm} /></Link></li>
                    </ul>
                    <div className='ham' onClick={() => setIsActive(!isActive)}>
                        <img src="/ham.svg" alt="" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
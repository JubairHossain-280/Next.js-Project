import React from 'react'
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { BiHomeAlt } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";



function Home() {
    return (
        <div className='m-2'>
            <details open>
                <summary title='Toggle Sidebar'>
                    <TbLayoutSidebarRightCollapse />
                </summary>
                <ul>
                    <li><span><BiHomeAlt className='icon' /> Home</span></li>
                    <li><span><BsInfoCircle className='icon' /> About</span></li>
                    <li><span><FaLaptopCode className='icon' /> Skills</span></li>
                    <li><span><GrArticle className='icon' /> Blog</span></li>
                    <li><span><FaCode className='icon' /> Services</span></li>
                    <li><span><RiContactsLine className='icon' /> Contact</span></li>
                </ul>
                <ul style={{ position: 'absolute', bottom: 0 }}>
                    <li><span ><LuLogOut className='icon' /> Logout</span></li>
                </ul>
            </details>
        </div>
    )
}

export default Home
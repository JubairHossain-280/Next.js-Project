import React, { useState } from 'react'
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import Link from 'next/link';


function SideNavToggle(props) {
    const [open, setOpen] = useState(true);


    const sideNavsStyle = 'flex items-center gap-[10px] m-[5px] py-[5px] px-[10px] cursor-pointer rounded-[8px] hover:bg-black hover:text-white duration-100 ease-in-out';

    return (
        <>
            <aside className='p-2 h-screen' aria-label='Sidebar Navigation'>
                <details open={open} className={`${open ? 'h-full bg-[#0e0e0e]' : 'h-[50px]'} flex flex-col w-[220px] text-[gray] list-none shadow-2xl shadow-slate-700 overflow-hidden duration-200 ease-in-out rounded-[12px]`}>
                    <summary title='Toggle Sidebar' className='inline-block list-none text-[28px] my-[10px] mr-[15px] ml-[10px] cursor-pointer'
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(!open);
                        }
                        }>
                        <TbLayoutSidebarRightCollapse />
                    </summary>
                    <nav className='flex flex-col flex-1 gap-24 h-[calc(100vh-70px)]'>
                        <ul className='overflow-y-auto overflow-x-hidden sidebar-container'>
                            {
                                props.sideNavs.map((nav, index) => (
                                    <Link href={nav.link} key={index}><li className={`${sideNavsStyle}`}><span>{nav.icon} {nav.sub}</span></li></Link>
                                ))
                            }
                        </ul>
                        <button onClick={props.onLogout} className={`${sideNavsStyle} mt-auto`}><span ><LuLogOut className='icon' /> Logout</span></button>
                    </nav>
                </details>
            </aside >
        </>
    )
}

export default SideNavToggle
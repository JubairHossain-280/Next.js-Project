'use client'

import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import SideNavToggle from '@/components/SideNavToggle'
import { BiHomeAlt } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { ClipLoader } from 'react-spinners';


function Page() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [router, status]);

    if (status === 'loading') {
        return (
            <div className='flex justify-center items-center h-screen'>
                <ClipLoader color='cyan' size={50} />
            </div>
        );
    }

    const sideNavs = [
        {
            sub: 'Home',
            icon: <BiHomeAlt className='icon' />,
            link: '/'
        },
        {
            sub: 'About',
            icon: <BsInfoCircle className='icon' />,
            link: '/'
        },
        {
            sub: 'Skills',
            icon: <FaLaptopCode className='icon' />,
            link: '/'
        },
        {
            sub: 'Blog',
            icon: <GrArticle className='icon' />,
            link: '/'
        },
        {
            sub: 'Services',
            icon: <FaCode className='icon' />,
            link: '/'
        },
        {
            sub: 'Contact',
            icon: <RiContactsLine className='icon' />,
            link: '/'
        },
    ]

    // Logout logic here
    const handleLogout = () => {
        signOut({callbackUrl: '/login'})
    };

    return (
        <div className='flex h-screen'>
            <SideNavToggle sideNavs={sideNavs} onLogout={handleLogout} />
            <div className='flex-1 flex justify-center items-center h-full'>
                <h1 className='text-4xl font-semibold text-center'>Welcome to Dashboard {session?.user?.name}</h1>
            </div>
        </div>
    )
}

export default Page
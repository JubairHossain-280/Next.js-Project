'use client'

import Login from '@/components/Login'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

function page() {
    const {data: status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/dashboard');
        }
    }, [router, status]);

    return (
        <div>
            <Login />
        </div>
    )
}

export default page
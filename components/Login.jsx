import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';


function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [showMsg, setShowMsg] = useState({});

    // state variables for form values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const getPasswordStrength = (password) => {
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*]/.test(password);

        if (password.length >= 8 && hasLetters && hasNumbers && hasSpecial) {
            return setShowMsg({ msg: "Password Strength: Strong", type: "success" });
        } else if (password.length >= 6 && hasLetters && hasNumbers) {
            return setShowMsg({ msg: "Password Strength: Medium", type: "warning" });
        } else if (password.length < 6) {
            return setShowMsg({ msg: "Password Strength: Too Weak", type: "error" });
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // validation
        if (!email || !password) {
            toast.warning('Please fill all the fields!');
            return;
        }
        // reset
        setEmail('');
        setPassword('');
        setShowMsg({});
        toast.success(`Login Successful!`);
    }

    return (
        <div className='flex h-screen'>
            <div className='login-container flex-1'>
                <form action="" className='login-form' onSubmit={handleSubmit}>
                    <h2 className='title text-2xl font-bold'>Login</h2>
                    <fieldset>
                        <legend>Email <span>*</span></legend>
                        <input type="email" name="email" id="" autoFocus autoComplete='on'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>Password <span>*</span></legend>
                        <input type={showPassword ? 'text' : 'password'} name="password" id=""
                            autoComplete='off'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                getPasswordStrength(e.target.value);
                            }
                            } />
                        <span className="password-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                        </span>
                    </fieldset>
                    {password && (
                        <p className={`show-msg ${showMsg.type}`}>{showMsg.msg}</p>
                    )}
                    <button type="submit" className='login-btn text-black'>Login</button>
                    <p className='title'>OR</p>
                    <button
                        type='button'
                        onClick={() => signIn('google', { prompt: 'select_account' })}
                        className='flex justify-center items-center gap-2 px-4 py-2 border rounded cursor-pointer'
                    >
                        <FcGoogle size={20} /> Sign in with Google
                    </button>
                </form>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </div>
    )
}

export default Login
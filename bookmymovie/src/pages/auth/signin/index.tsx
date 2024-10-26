"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '@/components/navbar/navbar';
import authStyles from '../auth.module.css';
import Link from 'next/link';
import { toast } from 'react-toastify';
// import { getCookie , setCookie} from 'cookies-next';
// Define an interface for the form data
interface FormData {
    email: string;
    password: string;
}
export default function Signin() {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors: Record<string, string> = {};
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        }
        if (!formData.password) {
            validationErrors.password = 'Password is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    }
    return(
        <div className={authStyles.authout}>
        <div className={authStyles.authin}>
            <div className={authStyles.left}>
                <Image src="/logo.png"  width={320} height={280} alt="" className='img' />
            </div>
            <div className={authStyles.right}>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onSubmit={handleSubmit}
                >
                    <div className={authStyles.forminput_cont}>
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className={authStyles.formerror}>{errors.email}</span>}
                    </div>
                    <div className={authStyles.forminput_cont}>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <span className={authStyles.formerror}>{errors.password}</span>
                        )}
                    </div>

                    <button type="submit" className={authStyles.main_button}>
                        Login
                    </button>

                    <p className={authStyles.authlink}>
                        Don&apos;t have an account? <Link href="/auth/signup">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
)
}

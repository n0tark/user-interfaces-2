'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center mt-12">
            <div className="w-full max-w-md">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-indigo-500 rounded p-10 mb-4"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="gender"
                        >
                            Gender
                        </label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">
                                McDonnell Douglas AH-64 Apache
                            </option>
                        </select>
                    </div>

                    <div className="mb-8">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="birthdate"
                        >
                            Date of Birth
                        </label>
                        <input
                            id="birthdate"
                            type="date"
                            placeholder="Date of Birth"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-green-700 transition-color duration-500 text-white font-bold py-2 px-6 ms-auto me-auto rounded"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

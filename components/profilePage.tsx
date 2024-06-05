import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Link from 'next/link';
const Profile = () => {
    return (
        <div className="max-w-md mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-4">
                Your Profile
            </h1>
            <p className="mb-4 text-center">Welcome to your profile page.</p>

            <div className="border border-indigo-500 rounded p-10">
                <div className="flex gap-2">
                    <AccountBoxIcon />
                    <h2 className="text-lg font-semibold mb-2">
                        Personal Information
                    </h2>
                </div>
                <p>
                    Name: <span className="ms-2">John Smith</span>
                </p>
                <p>
                    Email:
                    <Link href="/" className="text-blue-400 inline-block ms-4">
                        tardis@gmail.com
                    </Link>
                </p>
                <p>
                    Phone:
                    <Link href="/" className="text-blue-400 ms-2">
                        95475949
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Profile;

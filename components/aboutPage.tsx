'use client';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto text-center px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">
                About{' '}
                <span className="underline text-sky-400">ContactSphere</span>
            </h1>
            <div className="border border-indigo-300 p-4 rounded">
                <p className="mb-4">
                    ContactSphere is a web application built for managing
                    contacts, including storing, deleting, and editing them. We
                    are dedicated to ensuring data protection and privacy.
                </p>
                <p>
                    ContactSphere is an innovative web application crafted to
                    seamlessly connect people by managing a comprehensive
                    database of contacts. Our platform is designed to facilitate
                    the storing, deleting, and editing of contact information,
                    all while prioritizing the utmost data protection and
                    privacy. With a mobile-friendly interface, ContactSphere
                    guarantees an exceptional user experience across a variety
                    of devices, ensuring you stay connected effortlessly,
                    anytime and anywhere.
                </p>
            </div>
        </div>
    );
};

export default About;

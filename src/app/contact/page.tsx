"use client";

import { useState } from 'react';

export default function ContactPage() {
    const [messageSent, setMessageSent] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { firstName, lastName, email, message } = formData;
        let hasErrors = false;

        if (!firstName) {
            setErrors((prevErrors) => ({ ...prevErrors, firstName: 'First name is required' }));
            hasErrors = true;
        }

        if (!lastName) {
            setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Last name is required' }));
            hasErrors = true;
        }

        if (!email) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
            hasErrors = true;
        }

        if (!message) {
            setErrors((prevErrors) => ({ ...prevErrors, message: 'Message is required' }));
            hasErrors = true;
        }

        if (!hasErrors) {
            setMessageSent(true);
            setFormData({ firstName: '', lastName: '', email: '', message: '' });

            setTimeout(() => {
                setMessageSent(false);
            }, 3000);
        }


    };

    return (
        <div className="bg-darkBlue text-white min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8 items-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-orange-500 mb-4 italic">Let&apos;s Connect</h2>
                    <p className="text-lg mb-8 text-gray-500">Get in touch with us today</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-darkBlueLight p-8 rounded-xl border border-gray-700">
                        <h3 className="text-xl font-bold mb-4">Contact Us Today</h3>
                        <p className="mb-4">Enter your details</p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    placeholder="Enter Your First Name"
                                    className="w-full p-2 bg-transparent border border-gray-500 rounded-lg"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                                <input
                                    type="text"
                                    placeholder="Enter Your Last Name"
                                    className="w-full p-2 bg-transparent border border-gray-500 rounded-lg"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                            </div>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full p-2 bg-transparent border border-gray-500 rounded-lg"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                            <textarea
                                placeholder="Enter Message here"
                                className="w-full p-2 bg-transparent border border-gray-500 rounded-lg h-32"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className="text-red-500">{errors.message}</span>}
                            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                                Submit
                            </button>
                        </form>
                        {messageSent && (
                            <div className="mt-4 bg-green-500 text-white p-4 rounded-lg">
                                Message sent successfully!
                            </div>
                        )}
                    </div>
                    <div className="bg-darkBlueLight p-8 rounded-xl border border-gray-700">
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <p className="mb-4 text-gray-500">
                            We&apos;d love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Get in touch with us through the contact form, email, social media or by clicking the floating WhatsApp button on the screen. We strive to respond within 24 hours on business days.
                        </p>

                        <h4 className="text-l">Email Support</h4>
                        <p className="text-gray-500 mb-2">
                            Email us and well get to you within 24 hours
                        </p>
                        <p className="text-gray-500">
                            support@africatechcity.com
                        </p>
                        <p className="mb-2 text-gray-500">
                            yowusu@africatechcity.com
                        </p>

                        <h4 className="text-l mb-2">Whatsapp</h4>
                        <p className="text-gray-500">
                            Our WhatsApp contact is always active
                        </p>
                        <p className="mb-2 text-gray-500">
                            (+233) 246 531 380
                        </p>

                        <h4 className="text-l">Address</h4>
                        <p className="text-gray-500 mb-2">
                            Locate Us At:
                        </p>
                        <p className="mb-2 text-gray-500">
                            Africa Techcity <br />
                            Kumasi City Mall <br />
                            133 Lake Road <br />
                            Kumasi, Ghana
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
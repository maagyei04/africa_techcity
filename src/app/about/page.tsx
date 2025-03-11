"use client";

import Image from 'next/image';
import { useState } from 'react';

interface TeamMember {
    name: string;
    position: string;
    image: string;
    company: string;
    location: string;
    bio: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Mr. Thomas Nash',
        position: 'Board Member',
        image: '/images/f7.png',
        company: 'Africa TechCity',
        location: 'Washington DC',
        bio: 'Thomas W. Nash is the Chairman and CEO of Xalles Holdings Inc., a publicly listed Fintech holding company. He has expertise in the Financial Supply Chain and payment services. Mr. Nash has provided strategic business advice to more than 200 firms worldwide from small firms to large organizations such as U.S. Bank, MasterCard, and Citibank. He also led the implementation of financial systems deployment within the U.S. Government&apos;s Department of Defense and Department of Homeland Security. Mr. Nash has also advised the Governments of Brazil, China, Hungary, Romania, and others. Mr. Nash has helped launch successful startup ventures in the payment, eCommerce and IT fields.'
    },
    {
        name: 'Mr. Yaw Owusu',
        position: 'Managing Director',
        image: '/images/f6.png',
        company: 'Africa TechCity',
        location: 'Kumasi, Ghana',
        bio: 'Yaw Owusu founded Africa Techcities to provide offshore outsourcing services and develop high-end technology infrastructure in top-performing African economies. Mr. Owusu has appeared on BBC (United Kingdom), SABC TV (South Africa) and CCTV (China) to discuss developing smart city innovations in Africa. He was featured in the February 2016 edition of Forbes Afrique. Owusu worked for General Electric and IBM Global Services in Washington, DC before joining Goldman Sachs in New York. He studied in the EMBA program at Columbia Business School, 2001-2002 and majored in Mathematics and Economics at Albright College, Reading, Pennsylvania. He earned a certificate in Planning, Developing and Managing Technology Parks in 2007 from the Shanghai International Business Incubator.'
    },
    {
        name: 'Mr. Joseph Adjei',
        position: 'Advisor',
        image: '/images/f5.png',
        company: 'Africa TechCity',
        location: 'Washington DC',
        bio: 'Mr. Joseph Adjei is a renowned advisor and thought leader in the technology and education sectors. With a wealth of experience spanning several decades, he provides invaluable guidance and insights to the Africa Techcity team. Mr. Adjei&apos;s expertise in emerging technologies, educational initiatives, and global trends has been instrumental in shaping the company&apos;s strategic vision and ensuring its continued success.'
    },
];

export default function AboutPage() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const handleMemberClick = (member: TeamMember) => {
        setSelectedMember(member);
    };

    const closeModal = () => {
        setSelectedMember(null);
    };

    return (
        <div className="bg-darkBlue text-white">
            <main className="py-20">
                <div className="max-w-6xl mx-auto px-4 md:px-4 flex flex-col md:flex-row justify-between items-center space-x-8">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl font-bold mb-4">Discover Our Journey:</h2>
                        <h3 className="text-3xl font-bold text-orange-500 mb-4">Innovation and Impact at Africa Techcity</h3>
                        <p className="text-gray-400 mb-8">
                            Our values of integrity, collaboration, and innovation guide us in every project we undertake, ensuring that we deliver exceptional results while fostering a supportive community.
                        </p>
                        <p className="text-gray-400 mb-8">
                            Africa Techcity is a coworking innovation hub that specializes in (i) software training (ii),
                            technology and business outsourcing, servicing clients primarily in West Africa and North
                            America.
                        </p>
                        <p className="text-gray-400 mb-8">
                            Harvard Business Review has identified outsourcing as one of the most important management
                            ideas and practices of this century. According to the California-based Grand View Research, the
                            global business process outsourcing (BPO) market was valued at $245.91 billion in 2021, and is
                            projected to reach $435.89 billion by 2028.
                        </p>
                        <p className="text-gray-400 mb-8">
                            Ghana is one of the top-performing African economies in the World Bank&apos;s ease of doing
                            business index. Management consulting firm AT Kearney (Chicago) recently ranked Ghana
                            among the most competitive outsourcing destinations in the world. Well ahead of its African
                            neighbors, including Nigeria and South Africa, Ghana&apos;s economy is projected to grow at
                            3.4%–5.0% in 2023-2028.
                        </p>
                    </div>

                    <div className="md:w-1/3">
                        <Image
                            src="/images/afo.jpeg"
                            alt="Hero Image"
                            width={350}
                            height={350}
                            className="rounded-lg w-full h-full"
                        />
                    </div>
                </div>
            </main>

            <section className="py-10 bg-darkBlueLight">
                <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-3">
                    <div className="bg-orange-500 p-6 items-center justify-center align-center flex flex-col">
                        <h4 className="text-xl font-bold mb-2 text-[#0B2238]">Our Mission</h4>
                        <p className='text-[#0B2238] text-center'>At Africa Techcity, our mission is to drive innovation and foster growth in West Africa&apos;s tech landscape. We aim to empower individuals and businesses with the skills and tools necessary to thrive in the digital age</p>
                    </div>
                    <div className="bg-transparent border border-orange-500 p-6 items-center justify-center align-center flex flex-col">
                        <h4 className="text-xl text-orange-500 font-bold mb-2">Our Vision</h4>
                        <p className='text-orange-500 text-center'>Our vision is to establish Africa Techcity as a leading hub for technological excellence, fostering an ecosystem that drives innovation, empowers individuals, and propels the growth of West Africa&apos;s digital economy.</p>
                    </div>
                    <div className="bg-orange-500 p-6">
                        <Image
                            src="/images/afceo.jpeg"
                            alt="Hero Image"
                            width={450}
                            height={450}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
                    <h3 className="text-4xl font-bold mb-4">Seamlessly integration from</h3>
                    <h2 className="text-4xl font-bold text-orange-500 mb-8">Design to Development</h2>
                    <p className="text-gray-400 mb-8">
                        Africa Techcity directly with the tools you use everyday. We fit your flow so you can stay in yours.
                    </p>
                    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                        <div className="flex flex-col items-start">
                            <Image src="/images/about3.png" alt="Respect" width={350} height={350} className="w-full h-auto" />
                            <h4 className="font-bold mt-2">Respect</h4>
                            <p className="text-gray-400 text-left">We value honest and open communication, both internally and with our clients</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <Image src="/images/about2.png" alt="Innovation" width={350} height={350} className="w-full h-auto" />
                            <h4 className="font-bold mt-2">Innovation</h4>
                            <p className="text-gray-400 text-left">We challenge ourselves to push the envelope, constantly seeking new and better ways to solve problems</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <Image src="/images/about1.png" alt="Customer-Centricity" width={350} height={350} className="w-full h-auto" />
                            <h4 className="font-bold mt-2">Customer-Centricity</h4>
                            <p className="text-gray-400 text-left">We are committed to delivering outstanding results that address our customers&apos; needs</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-darkBlueLight">
                <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
                    <h3 className="text-3xl font-bold mb-4 text-orange-500">Meet Our Founders</h3>
                    <p className="text-gray-400 mb-2">
                        Comprised of dedicated professionals with diverse backgrounds in technology, entrepreneurship, and education...
                    </p>
                    <p className="text-gray-400 mb-8">
                        Click on a founder&apos;s image to learn more about their background and experience.
                    </p>
                    <div className="bg-darkBlue text-white overflow-x-auto scrollbar-hide flex justify-center">
                        <div className="flex space-x-4 py-5 carousel">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white text-darkBlue p-4 rounded-lg shadow-md shrink-0 cursor-pointer"
                                    onClick={() => handleMemberClick(member)}
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={200}
                                        height={200}
                                        className="rounded-t-lg mx-auto"
                                    />
                                    <div className="p-4">
                                        <h4 className="font-bold text-black">{member.name}</h4>
                                        <p className='text-gray-500'>{member.position}</p>
                                        <p className='text-gray-500'>{member.company}</p>
                                        <p className='text-gray-500'>{member.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {selectedMember && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-8 max-w-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
                            <button
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={closeModal}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-700 mb-4">{selectedMember.bio}</p>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-gray-500">{selectedMember.position}</p>
                                <p className="text-gray-500">{selectedMember.company}</p>
                                <p className="text-gray-500">{selectedMember.location}</p>
                            </div>
                            <Image
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                width={150}
                                height={150}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
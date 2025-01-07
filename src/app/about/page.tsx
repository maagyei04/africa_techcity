import Image from 'next/image';

const teamMembers = [
    {
        name: 'Mr Yaw Owusu',
        position: 'Managing Director',
        image: '/images/f1.png',
    },
    {
        name: 'Mr Kassoum Coulibaly',
        position: 'Strategic Advisor',
        image: '/images/f2.png',
    },
    {
        name: 'Mr Thomas Nash',
        position: 'Board Member',
        image: '/images/f3.png',
    },
    {
        name: 'Mr Papa Owusu',
        position: 'Board Member',
        image: '/images/f4.png',
    },
];

export default function AboutPage() {
    return (
        <div className="bg-darkBlue text-white">
            <main className="py-20">
                <div className="max-w-6xl mx-auto px-4 md:px-4 flex flex-col md:flex-row justify-between items-center space-x-8">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl font-bold mb-4">Discover Our Journey:</h2>
                        <h3 className="text-3xl font-bold text-orange-500 mb-4">Innovation and Impact at AfricaTechcity</h3>
                        <p className="text-gray-400 mb-8">
                            Our values of integrity, collaboration, and innovation guide us in every project we undertake, ensuring that we deliver exceptional results while fostering a supportive community.
                        </p>
                    </div>

                    <div className="md:w-1/3">
                        <Image
                            src="/images/a1.png"
                            alt="Hero Image"
                            width={350}
                            height={350}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </main>

            <section className="py-10 bg-darkBlueLight">
                <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-3">
                    <div className="bg-orange-500 p-6 items-center justify-center align-center flex flex-col">
                        <h4 className="text-xl font-bold mb-2 text-[#0B2238]">Our Mission</h4>
                        <p className='text-[#0B2238] text-center'>At AfricaTechcity, our mission is to drive innovation and foster growth in West Africas tech landscape. We aim to empower individuals and businesses with the skills and tools necessary to thrive in the digital age</p>
                    </div>
                    <div className="bg-transparent border border-orange-500 p-6 items-center justify-center align-center flex flex-col">
                        <h4 className="text-xl text-orange-500 font-bold mb-2">Our Vission</h4>
                        <p className='text-orange-500 text-center'>At AfricaTechcity, our mission is to drive innovation and foster growth in West Africas tech landscape. We aim to empower individuals and businesses with the skills and tools necessary to thrive in the digital age</p>
                    </div>
                    <div className="bg-orange-500 p-6">
                        <Image
                            src="/images/h2.png"
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
                        AfricaTechcity directly with the tools you use everyday. We fit your flow so you can stay in yours.
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
                            <p className="text-gray-400 text-left">We are committed to delivering outstanding results that address our customers needs</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-darkBlueLight">
                <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
                    <h3 className="text-3xl font-bold mb-4 text-orange-500">Meet Our Founders</h3>
                    <p className="text-gray-400 mb-8">
                        Comprised of dedicated professionals with diverse backgrounds in technology, entrepreneurship, and education...
                    </p>
                    <div className="bg-darkBlue text-white">
                        <section className="py-5">
                            <div className="max-w-6xl mx-auto px-4 md:px-8 text-center overflow-hidden">
                                <div className="carousel flex justify-center space-x-4">
                                    {teamMembers.map((member, index) => (
                                        <div key={index} className="bg-white text-darkBlue p-4 rounded-lg shadow-md shrink-0">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={200}
                                                height={200}
                                                className="rounded-t-lg"
                                            />
                                            <div className="p-4">
                                                <h4 className="font-bold text-black">{member.name}</h4>
                                                <p className='text-gray-500'>{member.position}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
import Image from 'next/image';

const services = [
    {
        icon: 'software',
        title: 'Coworking Space',
        description: [
            'Share furnished office space, complete with broadband access, laptops &amp; other tech gadgets.',
            'Daily, weekly and monthly usage options.',
        ]
    },
    {
        icon: 'coworking',
        title: 'Software Training',
        description: [
            'Technology training for companies and students, with special focus on:',
            'Microsoft Office',
            'Python Programming',
            'Full Stack Development',
            'SQL (Oracle Database) and AWS Terraform'
        ]
    },
    {
        icon: 'outsourcing',
        title: 'Outsourcing: Innovation Services for Local and Global companies',
        description: [
            'Database Development',
            'Business Communication and Technical Writing',
            'Customer Service',
            'Digital Marketing &amp; Sales',
        ]
    },
    {
        icon: 'outsourcing',
        title: 'Study in the USA/Canada',
        description: [
            'Smart Preparatory courses for SAT, GMAT, GRE.',
            'For admission to universities in the USA, Canada and other countries.',
        ]
    },
];

export default function ServicePage() {
    return (
        <div className="bg-darkBlue text-white">
            <main className="py-10 md:py-20">
                <div className="max-w-6xl mx-auto px-4 md:px-4 flex flex-col md:flex-row justify-between items-center space-x-8">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl font-bold mb-4 text-orange-500">Empowering Your</h2>
                        <h3 className="text-3xl font-bold text-orange-500 mb-4">Vision with Innovative Solutions</h3>
                        <p className="text-gray-400 mb-8">
                            The Africa Techcities provides Co-Working Space, Software Training and Business Services.
                        </p>
                        <p className="text-gray-400 mb-8">
                            Our commitment to excellence is demonstrated through our range of innovative services, tailored to support businesses and individuals in the tech & education landscape
                        </p>
                    </div>

                    <div className="md:w-1/3">
                        <Image
                            src="/images/s1.png"
                            alt="Hero Image"
                            width={350}
                            height={350}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </main>

            <div className="flex justify-center">
                <span className="text-6xl text-orange-500">&#8675;</span>
            </div>

            <section className="py-10">
                <div className="flex flex-col md:flex-row gap-8 p-8 items-center bg-white rounded-lg max-w-6xl mx-auto">
                    <div className="flex flex-col">
                        <p className="text-lg font-bold text-black">
                            <span className="text-orange-500">Unlocking</span> Potential Through <span className="text-blue-500">Technology</span> and Expertise
                        </p>
                        <p className="text-lg font-bold mt-2 text-gray-500">
                            Explore how AfricaTechcity can help you achieve your goals:
                        </p>
                        {services.map((service, index) => (
                            <div key={index} className="flex items-center mt-4">
                                <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full hidden md:block">
                                    <Image src="/images/flash.png" alt="flash logo" width={20} height={20} />
                                </div>
                                <div className="flex flex-col ml-2">
                                    <p className="text-md font-semibold text-black">{service.title}</p>
                                    <div className="bg-[#0B2238] text-white p-4 rounded-lg">
                                        {Array.isArray(service.description) ? (
                                            <ul className="list-disc list-inside text-sm">
                                                {service.description.map((desc: string, descIndex: number) => (
                                                    <li key={descIndex} className="mb-2">{desc}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-lg">{service.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Image
                        src="/images/services.png"
                        alt="Person"
                        width={600}
                        height={800}
                        className="rounded-lg"
                    />
                </div>
            </section>
        </div>
    );
}
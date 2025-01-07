import Image from 'next/image';

const services = [
    {
        icon: 'software',
        title: 'Software Training',
        description: 'Equip yourself or your team with the latest industry skills through our practical and interactive software training programs',
    },
    {
        icon: 'coworking',
        title: 'Coworking Spaces',
        description: 'Whether you need a quiet workspace or a place to brainstorm with like-minded professionals, our spaces are designed to inspire and support your work.',
    },
    {
        icon: 'programming',
        title: 'Programming & Database Development',
        description: 'From designing robust databases to developing customized software solutions, our programming and database development services',
    },
    {
        icon: 'outsourcing',
        title: 'Outsourcing Services',
        description: 'We provide skilled professionals and resources to help you meet project deadlines, manage workflows, and enhance operational efficiency without compromising on quality.',
    },
];

export default function ServicePage() {
    return (
        <div className="bg-darkBlue text-white">
            <main className="py-20">
                <div className="max-w-6xl mx-auto px-4 md:px-4 flex flex-col md:flex-row justify-between items-center space-x-8">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl font-bold mb-4 text-orange-500">Empowering Your</h2>
                        <h3 className="text-3xl font-bold text-orange-500 mb-4">Vision with Innovative Tech Solutions</h3>
                        <p className="text-gray-400 mb-8">
                            Our commitment to excellence is demonstrated through our range of innovative services, tailored to support businesses and individuals in the tech landscape
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
                                <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
                                    <Image src="/images/flash.png" alt="flash logo" width={20} height={20} />
                                </div>
                                <div className="flex flex-col ml-2">
                                    <p className="text-md font-semibold text-black">{service.title}</p>
                                    <p className="text-sm text-gray-500">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Image
                        src="/images/s2.png"
                        alt="Person"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
            </section>
        </div>
    );
}
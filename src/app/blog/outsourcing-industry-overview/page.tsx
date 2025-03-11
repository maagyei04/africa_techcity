"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function BlogPreview() {
    const [openSections, setOpenSections] = useState<number[]>([]);

    const toggleSection = (index: number) => {
        setOpenSections((prevOpenSections) =>
            prevOpenSections.includes(index)
                ? prevOpenSections.filter((i) => i !== index)
                : [...prevOpenSections, index]
        );
    };

    return (
        <div className="bg-darkBlue text-white py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Outsourcing Industry Overview</h1>
                    <p className="text-gray-400 mb-4">By Mr Yaw Owusu</p>
                    <Image
                        src="/images/oi.png"
                        alt="Blog Preview"
                        width={800}
                        height={400}
                        className="rounded-lg"
                    />
                </div>

                <div className="space-y-4">
                    <div className="bg-darkBlueLight p-4 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(0)}
                        >
                            <h2 className="text-2xl font-bold">Introduction</h2>
                            <span className={`transition-transform ${openSections.includes(0) ? 'rotate-90' : ''}`}>
                                &rsaquo;
                            </span>
                        </div>
                        {openSections.includes(0) && (
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    The outsourcing industry has evolved significantly over the past few decades, becoming an integral part of modern business operations. Originally emerging as a cost-cutting strategy, outsourcing has since transformed into a strategic approach for companies to access specialized expertise, enhance operational efficiency, and focus on core competencies.

                                    The roots of outsourcing can be traced back to the 1960s when companies began contracting out non-core functions like payroll processing and data entry. However, it wasn&apos;t until the late 1980s and early 1990s that outsourcing gained widespread adoption, driven by advancements in technology and globalization.

                                    Today, outsourcing encompasses a wide range of services, from IT and software development to customer support, accounting, and marketing. It has become a crucial tool for businesses of all sizes, enabling them to tap into global talent pools, leverage economies of scale, and remain agile in an ever-changing market landscape.

                                    The significance of outsourcing in today&apos;s business landscape cannot be overstated. It allows companies to focus on their core competencies while delegating non-essential tasks to specialized service providers. This not only improves operational efficiency but also enables businesses to access expertise and resources that may be unavailable or costly to maintain in-house.

                                    Furthermore, outsourcing has facilitated global collaboration and enabled companies to expand their reach and tap into new markets. By leveraging the skills and resources of service providers in different regions, businesses can gain a competitive edge and adapt to changing market demands more effectively.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="bg-darkBlueLight p-4 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(1)}
                        >
                            <h2 className="text-2xl font-bold">Current Trends</h2>
                            <span className={`transition-transform ${openSections.includes(1) ? 'rotate-90' : ''}`}>
                                &rsaquo;
                            </span>
                        </div>
                        {openSections.includes(1) && (
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    Outsourcing has become an integral part of business management on a global scale since the late
                                    1980s. Currently, 71% of financial service executives outsource or offshore some of their services.
                                    About 51% of technology executives say they outsource application and software maintenance, and
                                    40% outsource their data centers. 37% of small businesses currently outsource a business process.
                                    Among this number, 24% choose to outsource primarily to increase efficiency, while 18% are
                                    looking to receive assistance from an expert. 78% of businesses feel positive about their
                                    outsourcing partners.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="bg-darkBlueLight p-4 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(2)}
                        >
                            <h2 className="text-2xl font-bold">BPO Clients by Region</h2>
                            <span className={`transition-transform ${openSections.includes(2) ? 'rotate-90' : ''}`}>
                                &rsaquo;
                            </span>
                        </div>
                        {openSections.includes(2) && (
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    Most outsourcing transactions originate from clients in the United States, Canada, Brazil and other
                                    parts of the Western Hemisphere.

                                    Refer to the image above.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="bg-darkBlueLight p-4 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(3)}
                        >
                            <h2 className="text-2xl font-bold">Outsourcing After COVID-19</h2>
                            <span className={`transition-transform ${openSections.includes(3) ? 'rotate-90' : ''}`}>
                                &rsaquo;
                            </span>
                        </div>
                        {openSections.includes(3) && (
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    The growing practice of telecommuting from workers&apos; and executives&apos; homes and temporary
                                    residence, including hotels, resorts, camps, etc. According to researchers at MIT, almost 50% of
                                    the American workforce reports working remotely at least once a week. As working remotely
                                    becomes more trendy, companies will begin to expand their search for skilled labor beyond their
                                    local, state or national boundaries. Why would a company limit its business to a smaller native
                                    talent pool?
                                    Dynamic firms may question the business wisdom of paying $30/hour to $125/hour or more for
                                    copy editing/proofreading, programming and software development, etc in Washington DC, New
                                    York or San Francisco when they might get the same work done at equivalent efficiency or better
                                    in Accra and Kumasi (Ghana), Manila (Philippines) or Bangalore (India) for 30% to 80% less?
                                    The potential savings to American companies willing to outsource outside the country is further
                                    enhanced by the near-zero expenditure on health and other basic benefits involved in offshoring.
                                    The governments of Ghana, India, Philippines and other emerging markets provide national health
                                    insurance to its citizens, hence businesses in those countries and their American and other foreign
                                    clients do not have to worry about the cost of staff healthcare benefits. Whilst the upsurge in both
                                    onshore and offshore outsourcing over the last three decades has slowed in the last few years, the
                                    industry is set to enjoy robust growth in the post COVID-19 world.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
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
                    <h1 className="text-4xl font-bold mb-4">Startup Success Stories: Lessons Learned</h1>
                    <p className="text-gray-400 mb-4">By Mr Agyei Michael Addai</p>
                    <Image
                        src="/images/a2.jpg"
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
                                    Successful startup stories offer a treasure trove of invaluable lessons and insights for aspiring entrepreneurs. By studying the journeys of those who have navigated the challenges and triumphed in building thriving businesses, we can gain a deeper understanding of the key ingredients for success.

                                    These stories serve as powerful sources of inspiration, reminding us that even the most daunting obstacles can be overcome with determination, resilience, and an unwavering commitment to one&apos;s vision. They showcase the power of perseverance, adaptability, and innovation &ndash; qualities that are essential for any entrepreneur seeking to make their mark in a competitive and ever-changing business landscape.

                                    Moreover, successful startup stories offer practical lessons on various aspects of entrepreneurship, from ideation and product development to marketing, fundraising, and scaling. By learning from the experiences of those who have walked the path before us, we can avoid common pitfalls, adopt proven strategies, and gain a deeper appreciation for the nuances of building a successful venture.

                                    Ultimately, studying successful startup stories is not just about gaining knowledge; it&apos;s about cultivating the mindset and resilience required to weather the storms and seize opportunities. By immersing ourselves in these narratives, we can draw inspiration, learn from the mistakes and triumphs of others, and forge our own paths to entrepreneurial success.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="bg-darkBlueLight p-4 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(1)}
                        >
                            <h2 className="text-2xl font-bold">Perseverance and Resilience</h2>
                            <span className={`transition-transform ${openSections.includes(1) ? 'rotate-90' : ''}`}>
                                &rsaquo;
                            </span>
                        </div>
                        {openSections.includes(1) && (
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    Perseverance and resilience are indispensable qualities for any successful startup. The journey of building a thriving business is often fraught with challenges, setbacks, and obstacles that can test the resolve of even the most determined entrepreneurs. However, those who possess an unwavering spirit and the ability to bounce back from adversity are the ones who ultimately triumph.

                                    Successful startups understand that failure is an inevitable part of the process, and they embrace it as an opportunity to learn and grow. They recognize that every setback, every rejection, and every obstacle is a chance to refine their strategies, pivot their approach, and emerge stronger than before. It is this resilience that allows them to weather the storms and persevere through the toughest of times.

                                    Moreover, perseverance is the driving force that keeps successful startups focused on their goals, even when the path ahead seems uncertain or daunting. They understand that building a successful business is a marathon, not a sprint, and they are willing to put in the hard work, dedication, and long hours required to turn their vision into reality. This unwavering commitment and perseverance enable them to overcome seemingly insurmountable obstacles and push through periods of doubt or discouragement.

                                    Successful startups also recognize the importance of learning from their failures and using those lessons to fuel their perseverance. They understand that every setback is an opportunity to gain valuable insights, refine their strategies, and emerge stronger and more resilient. By embracing a growth mindset and a willingness to adapt and pivot, they can navigate the ever-changing landscape of entrepreneurship and position themselves for long-term success.

                                    In essence, perseverance and resilience are the bedrock upon which successful startups are built. They are the qualities that enable entrepreneurs to weather the storms, learn from their failures, and ultimately emerge victorious in their pursuit of building a thriving and sustainable business.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="bg-darkBlueLight p-4 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(2)}
                        >
                            <h2 className="text-2xl font-bold">Adaptability and Innovation</h2>
                            <span className={`transition-transform ${openSections.includes(2) ? 'rotate-90' : ''}`}>
                                &rsaquo;
                            </span>
                        </div>
                        {openSections.includes(2) && (
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    Adaptability and innovation are essential qualities for startups to thrive in today&apos;s rapidly evolving business landscape. Successful startups understand that market conditions and customer needs are constantly changing, and they must be agile and responsive to these shifts. By embracing adaptability, they can pivot their strategies, products, or services to align with emerging trends and customer demands, ensuring their continued relevance and competitiveness.

                                    Innovation is the lifeblood of successful startups. They recognize that simply replicating existing solutions is not enough to stand out in a crowded market. Instead, they continuously seek to develop novel ideas, disruptive technologies, or innovative business models that can provide unique value to their customers. By fostering a culture of innovation, startups can stay ahead of the competition and create new market opportunities.

                                    Successful startups have demonstrated their ability to adapt and innovate in various ways. Some have pivoted their core offerings to better meet customer needs, while others have introduced groundbreaking products or services that have disrupted entire industries. They have embraced emerging technologies, leveraged data-driven insights, and fostered a mindset of continuous improvement to stay ahead of the curve.

                                    By embracing adaptability and innovation, successful startups have not only survived but thrived in the face of changing market conditions and fierce competition. They have proven that being agile, responsive, and forward-thinking are key ingredients for long-term success in the dynamic startup ecosystem.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="bg-darkBlueLight p-4 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(3)}
                        >
                            <h2 className="text-2xl font-bold">Building a Strong Team</h2>
                            <span className={`transition-transform ${openSections.includes(3) ? 'rotate-90' : ''}`}>
                                &rsaquo;
                            </span>
                        </div>
                        {openSections.includes(3) && (
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    Building a strong and dedicated team is crucial for the success of any startup. Successful startups understand that their team members are their most valuable assets, and they leverage the collective expertise, passion, and diverse perspectives of their team to achieve their goals.

                                    A strong team is not just about assembling a group of talented individuals; it&apos;s about fostering a collaborative and supportive environment where everyone&apos;s contributions are valued and encouraged. Successful startups recognize that each team member brings unique skills, experiences, and perspectives to the table, and they actively seek to leverage these strengths to drive innovation and problem-solving.

                                    Moreover, successful startups cultivate a culture of passion and dedication within their teams. They inspire their team members to embrace the company&apos;s vision and mission, fostering a sense of ownership and commitment. This passion and dedication fuel the team&apos;s motivation and resilience, enabling them to navigate through the inevitable challenges and setbacks that come with building a successful startup.

                                    By building a strong and dedicated team, successful startups create a synergistic environment where ideas can flourish, challenges can be tackled collaboratively, and collective efforts can propel the company towards its goals. The collective expertise and passion of the team members become a driving force for innovation, adaptability, and sustained growth, ultimately contributing to the startup&apos;s long-term success.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="bg-darkBlueLight p-4 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(4)}
                        >
                            <h2 className="text-2xl font-bold">Conclusion</h2>
                            <span className={`transition-transform ${openSections.includes(4) ? 'rotate-90' : ''}`}>
                                &rsaquo;
                            </span>
                        </div>
                        {openSections.includes(4) && (
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    Successful startups have demonstrated the importance of adaptability, innovation, and building a strong team. They have embraced change, pivoted their strategies, and continuously innovated to meet evolving market demands and customer needs. Additionally, they have recognized the value of assembling a dedicated and talented team, leveraging diverse expertise and fostering a collaborative environment. Aspiring entrepreneurs should take inspiration from these success stories and apply these lessons to their own ventures, remaining agile, fostering innovation, and cultivating a passionate and skilled team. By embracing these principles, they can increase their chances of overcoming challenges and achieving long-term success in the dynamic and competitive startup landscape.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
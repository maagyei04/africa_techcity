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
                            <h3 className="text-xl font-bold">Section 1</h3>
                            <span className={`transition-transform ${openSections.includes(0) ? 'rotate-90' : ''}`}>
                                &rsaquo;
                            </span>
                        </div>
                        {openSections.includes(0) && (
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
                                    ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl eget nisl.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="bg-darkBlueLight p-4 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(1)}
                        >
                            <h3 className="text-xl font-bold">Section 2</h3>
                            <span className={`transition-transform ${openSections.includes(1) ? 'rotate-90' : ''}`}>
                                &rsaquo;
                            </span>
                        </div>
                        {openSections.includes(1) && (
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl
                                    nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Add more sections as needed */}
                </div>
            </div>
        </div>
    );
};
"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
    const articles = [
        {
            category: 'Education',
            title: 'Outsourcing Industry Overview',
            author: 'Mr Yaw Owusu',
            image: '/images/oi.png',
            page: '/blog/outsourcing-industry-overview',
        },
        {
            category: 'Technology',
            title: 'The Future of AI and Machine Learning',
            author: 'Mr Agyei Michael Addai',
            image: '/images/aip.jpg',
            page: '/blog/future-of-ai-and-machine-learning',
        },
        {
            category: 'Entrepreneurship',
            title: 'Startup Success Stories: Lessons Learned',
            author: 'Mr Agyei Michael Addai',
            image: '/images/a2.jpg',
            page: '/blog/startup-success-stories-lessons-learned',
        },
        {
            category: 'Business',
            title: 'Outsourcing Strategies for Small Businesses',
            author: 'Mr Yaw Owusu',
            image: '/images/as.jpg',
            page: '/blog/outsourcing-strategies-for-small-businesses',
        },
    ];

    return (
        <div className="bg-darkBlue text-white min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
                <h2 className="text-4xl font-bold mb-4">Read Latest Posts</h2>
                <p className="text-md mb-8 text-gray-500">
                    Our blog is dedicated to empowering entrepreneurs with actionable advice, success stories, and resources to help you grow your business and make a lasting impact.
                </p>
                {articles.length > 0 ? (
                    <div className="grid md:grid-cols-4 gap-8">
                        {articles.map((article, index) => (
                            <Link key={index} href={article.page} className="relative rounded-lg overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                                        <p className="text-sm">{article.author}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="bg-darkBlueLight p-4 rounded-lg shadow-md col-span-4">
                        <p className="text-gray-400 text-lg">No posts yet!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
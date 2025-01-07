// import Image from 'next/image';

export default function BlogPage() {
    // const articles = [
    //     {
    //         category: 'Education',
    //         title: 'The Power of Project-Based Learning: 3 Important Factors of Productivity',
    //         author: 'Prof Akwesi Osei',
    //         image: '/images/article1.png',
    //     },
    //     {
    //         category: 'Education',
    //         title: 'The Power of Project-Based Learning: 3 Important Factors of Productivity',
    //         author: 'Prof Akwesi Osei',
    //         image: '/images/article2.png',
    //     },
    //     {
    //         category: 'Education',
    //         title: 'The Power of Project-Based Learning: 3 Important Factors of Productivity',
    //         author: 'Prof Akwesi Osei',
    //         image: '/images/article3.png',
    //     },
    //     {
    //         category: 'Education',
    //         title: 'The Power of Project-Based Learning: 3 Important Factors of Productivity',
    //         author: 'Prof Akwesi Osei',
    //         image: '/images/article4.png',
    //     },
    // ];

    return (
        <div className="bg-darkBlue text-white min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
                <h2 className="text-4xl font-bold mb-4">Read Latest Posts</h2>
                <p className="text-md mb-8 text-gray-500">
                    Our blog is dedicated to empowering entrepreneurs with actionable advice, success stories, and resources to help you grow your business and make a lasting impact.
                </p>
                <h3 className="text-3xl font-bold py-20 mb-8">Popular Articles</h3>
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="bg-darkBlueLight p-4 rounded-lg shadow-md col-span-4">
                        <p className="text-gray-400 text-lg">No posts yet!</p>
                    </div>
                    {/* {articles.map((article, index) => (
                            <div key={index} className="bg-darkBlueLight p-4 rounded-lg shadow-md">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={300}
                                    height={200}
                                    className="rounded-t-lg"
                                />
                                <div className="p-4">
                                    <p className="text-orange-500 font-bold">{article.category}</p>
                                    <h4 className="font-bold mt-2">{article.title}</h4>
                                    <p className="text-gray-300 mt-1">{article.author}</p>
                                </div>
                            </div>
                        ))} */}
                </div>
            </div>
        </div>
    );
}
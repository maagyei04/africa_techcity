"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-darkBlue text-white px-5 md:px-20">
      <main className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4 max-w-3xl mx-auto">Collaborate, <span className="text-orange-500">Create</span>, and Build with AfricaTechcity</h2>
        <p className="max-w-4xl mx-auto mb-8 text-gray-400">Join a community where creativity meets purpose. At AfricaTechcity, we provide the resources, guidance, and collaborative spaces that empower you to turn ideas into impact</p>
        <Link href="/services" className="bg-orange-500 text-white px-6 py-3 rounded-3xl">Explore Our Services</Link>
      </main>

      {/*photos section*/}
      <section className="py-5 overflow-hidden">
        <div className="carousel flex space-x-4">
          <div className="shrink-0">
            <Image
              src="/images/h1.png"
              alt="Image 1"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="shrink-0">
            <Image
              src="/images/h2.png"
              alt="Image 2"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="shrink-0">
            <Image
              src="/images/h3.png"
              alt="Image 3"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="shrink-0">
            <Image
              src="/images/h4.png"
              alt="Image 4"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-10 bg-darkBlueLight">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="max-w-4xl mx-auto mb-8">
              Discover how AfricaTechcity brings together the best resources and expertise to drive digital success. We are at the forefront of innovation, offering cutting-edge solutions tailored to your needs. From web and mobile development to AI-driven tools, our team is dedicated to turning your ideas into reality.
            </p>
            <p className="max-w-4xl mx-auto mb-8">
              Our collaborative approach ensures that your business thrives in the fast-paced digital world. With a focus on delivering value and measurable results, we empower businesses to streamline operations, enhance customer experiences, and scale effortlessly.
            </p>
            <p className="max-w-4xl mx-auto mb-8">
              At AfricaTechcity, we dont just build technology; we create opportunities for growth, foster creativity, and drive progress in every project we undertake. Join us as we pave the way for the future of technology and digital transformation!
            </p>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-center mb-8">Explore More: <span className="text-orange-500">Innovating Solutions, Empowering Growth</span></h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8">
          <div className="text-darkBlue p-6 rounded-xl shadow-md border border-white mb-8 md:mb-0 bg-[#0E304FFF]">
            <h4 className="font-bold mb-2"><Image src="/images/flash.png" alt="flash logo" width={20} height={20} /><span className="text-orange-500">Empowering</span> Your Vision</h4>
            <p className='text-gray-400'>At AfricaTechcity, we believe in turning ideas into impactful digital solutions. Our team is dedicated to helping you achieve your goals with industry-leading technology and strategies. </p>
          </div>
          <div className="text-darkBlue p-6 rounded-xl shadow-md border border-white mb-8 md:mb-0 bg-[#0E304FFF]">
            <Image src="/images/flash.png" alt="flash logo" width={20} height={20} />
            <h4 className="font-bold mb-2">Creating <span className="text-orange-500">Collaborative</span> Workspaces</h4>
            <p className='text-gray-400'>Our coworking spaces foster creativity and innovation, offering flexible, high-tech work environments</p>
          </div>
          <div className="text-darkBlue p-6 rounded-xl shadow-md border border-white mb-8 md:mb-0 bg-[#0E304FFF]">
            <Image src="/images/flash.png" alt="flash logo" width={20} height={20} />
            <h4 className="font-bold mb-2">Empower Your Skills with <span className="text-orange-500">Software Training</span></h4>
            <p className='text-gray-400'>At AfricaTechcity, we provide comprehensive software training programs designed to equip you </p>
          </div>
        </div>
      </section>

      {/*last section*/}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Discover More :</h3>
            <h2 className="text-4xl font-bold text-orange-500 mb-8">WHY CHOOSE <Image src="/images/logo.png" alt="Logo" width={250} height={250} />?</h2>
          </div>

          <div className="md:w-1/2 flex flex-col md:space-y-4">
            <div className="flex items-start space-x-4 mb-4">
              <Image src="/images/verify.png" alt="icon" width={24} height={24} />
              <p className="text-gray-300">
                AfricaTechcity is a leading choice for businesses in West Africa and beyond, providing exceptional value through innovative technology solutions and deep industry expertise.
              </p>
            </div>
            <div className="flex items-start space-x-4 mb-4">
              <Image src="/images/verify.png" alt="icon" width={24} height={24} />
              <p className="text-gray-300">
                Our commitment to empowering clients with tailored software training, robust programming and database solutions, and flexible outsourcing options sets us apart.
              </p>
            </div>
            <div className="flex items-start space-x-4 mb-4">
              <Image src="/images/verify.png" alt="icon" width={24} height={24} />
              <p className="text-gray-300">
                Choosing AfricaTechcity means choosing a partner dedicated to your growth, operational efficiency, and strategic success in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
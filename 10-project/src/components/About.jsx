import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React development is fueled by a community of passionate developers who ardently 
                        contribute to its growth and innovation. Driven by a shared enthusiasm for building 
                        dynamic and efficient user interfaces, these developers immerse themselves in the React ecosystem, 
                        constantly pushing the boundaries of what can be achieved.
                        </p>
                        <p className="mt-4 text-gray-600">
                        This collective dedication not only ensures the framework's continuous improvement but also 
                        fosters a supportive environment where knowledge is shared, 
                        challenges are overcome, and the love for React development propels the community forward.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
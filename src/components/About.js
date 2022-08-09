// About
import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    <i>"Hello World!"</i> ♥︎ <br/> <br/> My name is, <br/> Megan Beekman.
                    <br/> 
                    <br className="hidden lg:inline-block" />
                </h1>
                <p className="mb-8 leading-relaxed">
                    I am a woman in Web Development. ⌨ &#9792;
                Although I'm relatively new to the industry,<br></br> I have always aspired and strived for greatness in everything I do in life. I am a hard-worker. <br></br>
                And I will work hard all throughout this career, and continue to master my skills along the way. Coding / Web Development, has proven to entail much more than I had ever expected... But.. momma didn't raise a quitter! ᕦ(ò_óˇ) 
                </p>
                <div className="flex justify-center">
                    <a
                    href="#contact"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    <br/>"Call Me.. <br/> Beep Me.. <br/>Reach Me!" <br/> 📣
                    </a>
                    <a
                    href="#projects"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    <br/> Check Out <br/> My Projects : 🪄
                    </a>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img src={require('../assets/headshot-cropped.JPG')} />
                </div>
            </div>
        </section>
    );
}
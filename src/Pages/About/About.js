import { PowerGlitch } from 'powerglitch';
import { about } from "../../assets";
import { useEffect } from 'react';

function About() {

    useEffect(() => {
        PowerGlitch.glitch(
            '.glitch',
            {
                playMode: 'always',
                hideOverflow: true,
                timing: {
                    duration: 5000,
                    iterations: Infinity,
                    easing: 'ease-in-out',
                },
                glitchTimeSpan: {
                    start: 0.4,
                    end: 0.7,
                },
                shake: {
                    velocity: 10,
                    amplitudeX: 0.1,
                    amplitudeY: 0,
                },
                slice: {
                    count: 4,
                    velocity: 10,
                    minHeight: 0.02,
                    maxHeight: 0.40,
                    hueRotate: true,
                },
            }
        );
    }, []);

    return (
        <div className="h-full bg-slate-50 p-8 text-slate-700 font-Montserrat overflow-hidden">
            <div className="flex flex-col justify-center items-center py-10 px-6 sm:px-12 md:px-20 lg:px-40 xl:px-52 2xl:px-96">
                <p className="text-2xl mb-4 font-semibold font-Montserrat text-slate-900">ABOUT US</p>
                <div className="w-[4rem] border-b-2 border-b-slate-900 mb-8" />
                <div className="space-y-8 text-lg">
                    <section>
                        <p className="text-xl font-semibold text-slate-900">Futurist: Fashion Beyond Tomorrow</p>
                        <p className="mt-2">
                            Welcome to Futurist, your destination for fashion that transcends the boundaries of time. Inspired by the limitless potential of tomorrow, Futurist is dedicated to bringing the aesthetics of the future to your wardrobe today. Our journey began with a vision: to create a world where high-tech innovation and style merge seamlessly, empowering people everywhere to express themselves through cutting-edge fashion.
                        </p>
                    </section>

                    <section>
                        <p className="text-xl font-semibold text-slate-900">Our Mission</p>
                        <p className="mt-2">
                            At Futurist, we believe that fashion is more than clothing—it’s an evolution of self, a bold statement, a glimpse into the future. Our mission is to redefine everyday wear by blending advanced materials, visionary designs, and a futuristic spirit into each piece. We are committed to making avant-garde, forward-thinking fashion accessible for everyone, regardless of background or style. Futurist isn’t just a brand; it’s a lifestyle designed for those ready to lead the way into the unknown.
                        </p>
                    </section>

                    <section>
                        <p className="text-xl font-semibold text-slate-900">Innovation & Style</p>
                        <p className="mt-2">
                            Our team is driven by innovation, drawing inspiration from sci-fi, cyberpunk, and tech cultures to push the boundaries of traditional fashion. We collaborate with designers, technologists, and material scientists to craft clothing that not only looks futuristic but also performs at the highest standards. From smart jackets that adapt to your environment to sleek, tech-inspired accessories, every item in our collection embodies the ethos of a high-tech, high-style future.
                        </p>
                    </section>

                    <section>
                        <p className="text-xl font-semibold text-slate-900">Join the Movement</p>
                        <p className="mt-2">
                            Futurist is more than a brand; it’s a community of visionaries who see fashion as a way to shape the world of tomorrow. By wearing Futurist, you’re not just keeping up with trends—you’re setting them. Join us as we look forward and redefine what’s possible in fashion, one innovative piece at a time.
                        </p>
                    </section>

                    <p className="mt-8 italic">Warm regards, <br /> The Futurist Team</p>

                    <div>
                        <div
                            className="w-full aspect-[4/3] bg-cover bg-center flex-shrink-0 glitch"
                            style={{ backgroundImage: `url(${about})` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

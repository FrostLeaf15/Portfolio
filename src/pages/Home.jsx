import Project from "./Project"
import About from "./About"
import Contact from "./Contact"

function Home() {
    return (
        <div>
        <section className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#0f3460] text-white flex items-center justify-center px-6">
            <div className="max-w-3xl text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Hai, saya <span className="text-green-400 font-semibold">Muh. Hilmi Abdul Aziz</span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    Saya adalah <span className="text-green-400 font-semibold">Frontend Developer</span>
                </p>

                <div className="pt-4">
                    <a
                    href="/project"
                    className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-lg font-medium transition-all duration-200"
                    >
                        View My Projects
                    </a>
                </div>
            </div>
        </section>
        <About />
        <Project />
        <Contact />
        </div>
    );
}

export default Home;
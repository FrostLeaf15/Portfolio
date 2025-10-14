function About() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#0f3460] to-[#16213e] text-gray-200 flex items-center justify-center px-6 py-12">
            <div className="max-w-4xl font-bold text-center text-white mb-5">
                <h2 className="text-4xl font-bold text-center text-green-400 mb-8">
                    Tentang Saya
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                        Halo! Saya adalah <span className="text-green-400 font-semibold">Muh. Hilmi Abdul Aziz</span>, seorang <span className="text-green-400 font-semibold">Frontend Developer</span> yang memiliki pengalaman dalam membuat website yang fungsional, estetis, dan interaktif.
                    </p>
                    <p>
                        Saya berfokus dalam membuat responsif, aplikasi berkinerja tinggi menggunakan tools modern seperti <span className="text-green-400 font-semibold">React</span> dan <span className="text-green-400 font-semibold">Laravel</span>. Saya senang mengubah ide menjadi kenyataan, produk digital yang mudah digunakan.
                    </p>
                    <p>
                        Ketika saya tidak bekerja, saya senang belajar teknologi baru, menjelajahi tren desain UI, dan terkadang membantu yang lain untuk memahami Web Development yang baik.
                    </p>
                </div>

                <div className="pt-10">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        Keahlian
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                        {[
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "React",
                            "Laravel",
                            "Tailwind CSS",
                            "Git",
                            "MySQL"
                        ].map((skill) => (
                            <div
                            key={skill}
                            className="bg-[#1a1a2e] p-3 rounded-lg hover:bg-[#0f3460] transition-all duration-200"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
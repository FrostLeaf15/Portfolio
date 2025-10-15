function Project() {
    const projects = [
        {
            title: "First Portofolio Website",
            desc: "Portofolio pribadi yang dibuat menggunakan React dan Tailwind CSS yang menampilkan project dan keahlian saya.",
            tech: ["React", "Tailwind CSS"],
            img: "./src/assets/img/portfolio.png",
            link: "#",
        },
        {
            title: "Sistem Informasi Sekolah",
            desc: "Aplikasi web yang dibuat menggunankan Laravel dan MySQL untuk mengelola data siswa, kelulusan, dan jadwal kelas.",
            tech: ["Laravel", "MySQL", "Bootstrap"],
            img: "./src/assets/img/webschool.png",
            link: "#",
        },
        {
            title: "Todo List App",
            desc: "Aplikasi manajemen tugas sederhana dan bersih menggunakan integrasi localStorage.",
            tech: ["React", "JavaScript"],
            img: "https://via.pleacholder.com/400x250",
            link: "#",
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#16213e] to-[#0f3460]  text-gray-200 flex items-center justify-center px-6 py-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-400 mb-12">
                    Project Saya
                </h2>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                            <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                            />

                            <div className="p-6 text-left">
                                <h3 className="text-2xl font-semibold text-green-400 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    {project.desc}
                                </p>

                                <div>
                                    {project.tech.map((t) => (
                                        <span
                                        key={t}
                                        className="text-sm ng-[#0f3460] text-gray-200 px-3 py-1 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div>
                                    <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreference"
                                    className="inline-block px-4 py-2 mt-4 bg-green-500 hover:bg-green-600 rounded-lg text-white font-medium transition-all duration-200"
                                    >
                                        Lihat Porject
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
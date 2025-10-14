function Contact() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#0f3460] to-[#16213e] text-gray-200 flex items-center justify-center px-6 py-12">
            <div className="text-4xl font-bold text-center text-green-400 mb-10">
                <h2 className="text-4xl font-bold text-center mb-10">
                    Kontak Saya
                </h2>

                <form className="space-y-6">
                    <div>
                        <label className="block text-2xl font-medium text-gray-300 mb-2">
                            Nama
                        </label>
                        <input
                            type="text"
                            placeholder="Masukkan nama anda...."
                            className="w-full px-4 py-3 rounded-lg bg-[#0f1a2b] text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block text-2xl font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Masukkan email anda...."
                            className="w-full px-4 py-3 rounded-lg bg-[#0f1a2b] text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block text-2xl font-medium text-gray-300 mb-2">
                            Pesan
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Tulis pesan anda...."
                            className="w-full px-4 py-3 rounded-lg bg-[#0f1a2b] text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        ></textarea>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default Contact;
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="bg-gray-900 text-gray-300 py-6"
            initial={{ opacity: 0, y:30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-3 md:mb-0 text-center md:text-left">
                    <h2 className="text-lg font-semibold text-white">MyPortfolio</h2>
                    <p className="text-sm text-gray-400">@2025 All Rights Reserved</p>
                </div>

                <div className="flex space-x-6">
                    <motion.a
                        href="https://github.com/frostleaf15"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <i className="fab fa-github text-2xl hover:text-white transition"></i>
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/muh-hilmi-abdul-aziz-798381325/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <i className="fab fa-linkedin text-2xl hover:text-white transition"></i>
                    </motion.a>
                    <motion.a
                        href="mailto:muhhilmiabdulaziz.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <i className="fab fa-envelope text-2xl hover:text-white transition"></i>
                    </motion.a>
                </div>
            </div>
        </motion.footer>
    );
}
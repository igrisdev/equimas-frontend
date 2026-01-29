"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Info = () => {
    return (
        <section className="py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-white mb-6 uppercase tracking-wider"
                >
                    Fabricación sobre Medida
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12"
                >
                    Asadores, Parrillas, Accesorios, etc
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://wa.me/573018077982"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
                    >
                        <MessageCircle size={24} />
                        Contáctanos en WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

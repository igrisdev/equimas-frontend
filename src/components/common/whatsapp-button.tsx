"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="hidden md:block rounded-lg bg-white px-4 py-2 text-sm font-bold text-green-600 shadow-xl border border-green-100"
                    >
                        ¿Necesitas ayuda? ¡Háblanos!
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.a
                href="https://wa.me/573218520566"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-2xl transition-colors hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300"
                aria-label="Contactar por WhatsApp"
            >
                <IconBrandWhatsapp size={40} stroke={1.5} />
            </motion.a>
        </div>
    );
};

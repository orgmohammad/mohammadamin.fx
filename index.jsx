import { motion } from "framer-motion";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 bg-gradient-to-b from-black via-zinc-900 to-gray-950 text-white overflow-hidden">
      {/* متن معرفی */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          محمد امین اسماعیلی
        </h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300">
          بنیان‌گذار سبک معاملاتی <span className="text-indigo-400">PXR</span>  
          — ترکیبی از Smart Money، ICT و Liquidity Insight برای ایجاد روشی ساده و قدرتمند در درک بازار.
        </p>

        {/* دکمه‌های انیمیشنی لینک‌ها */}
        <div className="flex gap-4 justify-center md:justify-start">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://instagram.com/mohammadamin.fx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-indigo-600 px-5 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-pink-500/30 transition"
          >
            <FaInstagram className="text-2xl" />
            Instagram
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://t.me/mohammadaminfxx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-sky-400/30 transition"
          >
            <FaTelegramPlane className="text-2xl" />
            Telegram
          </motion.a>
        </div>
      </motion.div>

      {/* تصویر شخصی */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-10 md:mb-0"
      >
        <img
          src="/photo_2025-10-22_10-57-52.jpg"
          alt="Mohamad Amin Esmaeili"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-[0_0_40px_-10px_rgba(109,40,217,0.7)] border border-gray-700"
        />
        <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-indigo-600/30 blur-3xl rounded-full animate-pulse"></div>
      </motion.div>
    </section>
  );
}

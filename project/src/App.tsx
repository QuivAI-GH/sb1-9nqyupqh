import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Retool, Vercel, Remote, Arc, Raycast } from './logos';
import { Sparkles } from './components/ui/sparkles';
import { FeatureCard } from './components/ui/feature-card';
import { BlogCard } from './components/ui/blog-card';

export default function App() {
  return (
    <>
      {/* Services Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transforming businesses through cutting-edge AI solutions and innovative technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              image="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              title="Marketing Automation"
              description="AI-powered marketing automation to streamline your campaigns and boost engagement."
              delay={0.1}
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a"
              title="Custom Chatbots"
              description="Intelligent virtual assistants that provide 24/7 customer support."
              delay={0.2}
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              title="Website Development"
              description="Modern, responsive websites built with cutting-edge technologies."
              delay={0.3}
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              title="AI Analytics"
              description="Data-driven insights to optimize your business performance."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative py-24 bg-[#040404]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              Insights
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest trends in AI and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              image="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              title="The Future of AI in Business"
              excerpt="Explore how artificial intelligence is reshaping the business landscape."
              date="March 1, 2025"
              delay={0.1}
            />
            <BlogCard
              image="https://images.unsplash.com/photo-1639322537228-f710d846310a"
              title="Maximizing ROI with AI"
              excerpt="Learn how to leverage AI to improve your business outcomes."
              date="February 28, 2025"
              delay={0.2}
            />
            <BlogCard
              image="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              title="AI Security Best Practices"
              excerpt="Essential security measures for AI implementation in your business."
              date="February 25, 2025"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Tech Powers Section */}
      <section className="relative py-24 bg-[#040404] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mx-auto mt-8 w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-3xl text-foreground mb-14"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                The tech that powers us
              </span>
            </motion.div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-zinc-400">
              <Retool />
              <Vercel />
              <Remote />
              <Arc />
              <Raycast />
            </div>
          </div>

          <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
            <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 bg-[#040404]" />
            <Sparkles
              density={1200}
              className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
              color="#ffffff"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-[#040404]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              A Trusted Partner in AI
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See what our clients have to say
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">4.9</span>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                <span className="ml-2 text-gray-400">on Clutch</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">5.0</span>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-rose-400 fill-rose-400" />
                <span className="ml-2 text-gray-400">on G2</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative p-2"
            >
              <div className="relative bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 rounded-lg p-6">
                <Quote className="w-8 h-8 text-indigo-400 mb-4" />
                <p className="text-gray-400 mb-6">
                  "Their AI capabilities, combined with their Nearshore delivery model, has been a game-changer for our software development practice."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    alt="Taryn Owen"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Taryn Owen</h4>
                    <p className="text-gray-400 text-sm">President & CEO, TrueBlue</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-2"
            >
              <div className="relative bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 rounded-lg p-6">
                <Quote className="w-8 h-8 text-indigo-400 mb-4" />
                <p className="text-gray-400 mb-6">
                  "It is the jumpstart we needed to help us identify and start building POCs for Gen AI use cases across our business."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Matthew Shorts"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Matthew Shorts</h4>
                    <p className="text-gray-400 text-sm">Chief Product & Technology Officer, Cox2M</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative p-2"
            >
              <div className="relative bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 rounded-lg p-6">
                <Quote className="w-8 h-8 text-indigo-400 mb-4" />
                <p className="text-gray-400 mb-6">
                  "You delivered exactly what you said you would in exactly the budget and in exactly the timeline."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt="Tom Spahn"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Tom Spahn</h4>
                    <p className="text-gray-400 text-sm">Managing Partner, DesignIntelligence</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative p-2"
            >
              <div className="relative bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 rounded-lg p-6">
                <Quote className="w-8 h-8 text-indigo-400 mb-4" />
                <p className="text-gray-400 mb-6">
                  "With Quiv AI, we improved our velocity by almost 300% while reducing bugs to near zero."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef"
                    alt="AJ Alix"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">AJ Alix</h4>
                    <p className="text-gray-400 text-sm">Head of Product & Strategy, COX</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 bg-[#040404]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business with AI? Get in touch with us today.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Tell us about your project"
                />
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
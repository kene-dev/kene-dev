import { motion } from "motion/react";
import { GraduationCap, Video, MessageSquare, BookOpen, Clock, Award, Check, Zap, Crown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const mentorshipFeatures = [
  {
    icon: Video,
    title: "1-on-1 Video Sessions",
    description: "Personalized guidance through video calls tailored to your learning goals and pace.",
  },
  {
    icon: MessageSquare,
    title: "Ongoing Support",
    description: "24/7 access to chat support for questions and code reviews between sessions.",
  },
  {
    icon: BookOpen,
    title: "Custom Learning Path",
    description: "Structured curriculum designed specifically for your skill level and career objectives.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions at times that work best for you, with evening and weekend availability.",
  },
  {
    icon: Award,
    title: "Real-World Projects",
    description: "Work on practical projects that build your portfolio and prepare you for job interviews.",
  },
  {
    icon: GraduationCap,
    title: "Career Guidance",
    description: "Get advice on job search, resume building, and navigating the tech industry as a beginner.",
  },
];

const pricingTiers = [
  {
    name: "Basic",
    price: "₦25,000",
    period: "/month",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    description: "Perfect for beginners starting their web development journey",
    features: [
      "2 one-on-one sessions per month (1 hour each)",
      "Learning resource library",
      "Email support (48-hour response)",
      "Basic project code reviews",
      "Monthly progress tracking",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard",
    price: "₦50,000",
    period: "/month",
    icon: Zap,
    color: "from-indigo-600 to-purple-600",
    description: "Most popular choice for serious learners",
    features: [
      "4 one-on-one sessions per month (1 hour each)",
      "Priority chat support (24-hour response)",
      "Advanced code reviews & feedback",
      "Career roadmap planning",
      "Access to recorded session library",
      "Portfolio review",
    ],
    cta: "Start Learning",
    popular: true,
  },
  {
    name: "Premium",
    price: "₦100,000",
    period: "/month",
    icon: Crown,
    color: "from-purple-600 to-pink-600",
    description: "Complete mentorship package for rapid career growth",
    features: [
      "8 one-on-one sessions per month (1 hour each)",
      "Priority support with same-day response",
      "Comprehensive project portfolio building",
      "Mock interviews with feedback",
      "Salary negotiation coaching",
      "Internship placement assistance & referrals",
      "Quarterly career progress check-ins",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

export function Mentorship() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    message: "",
    selectedTier: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Mentorship inquiry:", formData);
    alert("Thank you for your interest! I'll get back to you within 24 hours with payment details (Paystack/Flutterwave).");
    setFormData({ name: "", email: "", experience: "", message: "", selectedTier: "" });
  };

  const handleTierSelect = (tierName: string) => {
    setFormData({ ...formData, selectedTier: tierName });
    const element = document.getElementById("mentorship-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="mentorship" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 mb-4">
            <GraduationCap className="w-5 h-5" />
            <span className="font-medium">For Aspiring Developers (Ages 18-35)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mentorship Program
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm passionate about helping young Nigerians break into web development. Whether you're just
            starting or looking to level up, I offer personalized mentorship to accelerate your
            learning journey and launch your tech career.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${tier.popular ? "ring-2 ring-indigo-600 scale-105" : "border border-gray-200"
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleTierSelect(tier.name)}
                  className={`w-full ${tier.popular
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                >
                  {tier.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>


        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mentorshipFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* What You'll Learn Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You'll Learn
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "HTML, CSS, and JavaScript fundamentals",
              "Modern React and component-based architecture",
              "TypeScript for type-safe applications",
              "Backend development with Node.js and Express",
              "Database design and SQL/NoSQL databases",
              "Git, GitHub, and version control workflows",
              "Deployment and hosting on modern platforms",
              "Best practices, testing, and code quality",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          id="mentorship-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-8 text-center">
            Fill out the form below and I'll get back to you within 24 hours with payment details and next steps.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                required
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-gray-700 mb-2">
                Current Experience Level
              </label>
              <Input
                id="experience"
                type="text"
                required
                placeholder="e.g., Complete beginner, some HTML/CSS, etc."
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="tier" className="block text-gray-700 mb-2">
                Preferred Tier
              </label>
              <select
                id="tier"
                required
                value={formData.selectedTier}
                onChange={(e) => setFormData({ ...formData, selectedTier: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="">Select a tier</option>
                <option value="Basic">Basic - ₦25,000/month</option>
                <option value="Standard">Standard - ₦50,000/month (Most Popular)</option>
                <option value="Premium">Premium - ₦100,000/month</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Tell Me About Your Goals
              </label>
              <Textarea
                id="message"
                required
                placeholder="What do you hope to achieve with mentorship? What are your learning goals?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full min-h-[120px]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
            >
              Apply for Mentorship
            </Button>

            <p className="text-sm text-gray-600 text-center">
              By applying, you agree to receive communication about the mentorship program. Payment details will be sent via email.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
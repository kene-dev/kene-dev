import { Send, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:gerryndulue@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Share a little about it and let’s start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-reveal className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let’s make it useful.</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Tell me what you are building, what is getting in the way, and what you hope to change. I’ll get back to you with a clear next step.
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-gray-300 pt-6 text-sm text-gray-600">
              <Mail className="w-5 h-5" />
              <a href="mailto:gerryndulue@gmail.com" className="hover:text-gray-900">gerryndulue@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Phone className="w-5 h-5" />
              <a href="tel:+2349160341467" className="hover:text-gray-900">+234 916 034 1467</a>
            </div>
          </div>

          {/* Contact Form */}
          <div data-reveal className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <Input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="What are you working on?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  required
                  placeholder="A few details about the project, timeline, or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gray-900 hover:bg-gray-700 text-white"
              >
                <Send className="w-5 h-5 mr-2" />
                Prepare email
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

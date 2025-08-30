import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhfathin.0607@gmail.com",
      href: "mailto:muhfathin.0607@gmail.com"
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      value: "linkedin.com/in/muhfathin",
      href: "https://linkedin.com/in/muhfathin"
    },
    {
      icon: ExternalLink,
      label: "Behance",
      value: "behance.net/muhfathin",
      href: "https://behance.net/muhfathin"
    }
  ];

  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] bg-hero-bg flex items-center justify-center px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="space-y-7 mb-14">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-clash leading-[90%] text-text-primary">
              Let's <span className="text-blue-primary">Connect</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-2xl font-medium font-clash text-text-secondary max-w-[850px] mx-auto leading-normal">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
            
            <p className="text-lg md:text-xl font-medium font-clash text-text-muted max-w-[850px] mx-auto">
              I'm always open to new opportunities and interesting conversations about design.
            </p>
          </div>

          <Button
            onClick={() => window.location.href = "mailto:muhfathin.0607@gmail.com"}
            className="bg-blue-primary hover:bg-blue-primary/90 text-white px-6 py-4 h-auto rounded-full text-lg md:text-xl font-medium font-clash transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-3 mx-auto"
          >
            Send Message
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 lg:py-20 px-6 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold font-clash text-text-primary text-center mb-12">
            Get In <span className="text-blue-primary">Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-card-bg rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-primary/10 rounded-full flex items-center justify-center group-hover:bg-blue-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-clash text-text-primary mb-2">
                    {item.label}
                  </h3>
                  <p className="text-lg font-medium font-clash text-text-secondary group-hover:text-blue-primary transition-colors">
                    {item.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-20 px-6 lg:px-20 bg-hero-bg">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold font-clash text-text-primary text-center mb-12">
            Send Me a <span className="text-blue-primary">Message</span>
          </h2>
          
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            // In a real app, this would handle form submission
            alert("Form submission would be implemented here with a backend service");
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium font-clash text-text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text-primary font-clash focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium font-clash text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text-primary font-clash focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-lg font-medium font-clash text-text-primary mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text-primary font-clash focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                placeholder="Project Discussion"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg font-medium font-clash text-text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text-primary font-clash focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent resize-vertical"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-blue-primary hover:bg-blue-primary/90 text-white px-6 py-4 h-auto rounded-full text-lg font-medium font-clash transition-all duration-200 hover:shadow-lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

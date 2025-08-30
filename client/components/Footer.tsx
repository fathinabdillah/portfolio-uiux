export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'short' });

  const socialLinks = [
    {
      name: "muhfathin.0607@gmail.com",
      url: "mailto:muhfathin.0607@gmail.com"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/muhfathin"
    },
    {
      name: "Behance",
      url: "https://behance.net/muhfathin"
    }
  ];

  return (
    <footer className="bg-footer-bg text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Copyright */}
          <div className="text-xl font-medium font-clash">
            @{currentMonth} {currentYear} Muh. Fathin
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {socialLinks.map((link, index) => (
              <div key={link.name} className="flex items-center gap-4 md:gap-6">
                <a
                  href={link.url}
                  className="text-xl font-medium font-clash hover:text-blue-primary transition-colors"
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.name}
                </a>
                {index < socialLinks.length - 1 && (
                  <span className="text-xl font-medium font-clash hidden md:block">
                    |
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

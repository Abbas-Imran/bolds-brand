import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-white relative">
      {" "}
      {/* Increased padding to accommodate banner */}
      {/* Top Banner - Positioned to overlap exactly 50% */}
      {/* Main Footer Content */}
      <div className="bg-white rounded-[40px] relative z-0 mx-4">
        {" "}
        {/* Added horizontal padding */}
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* About Us */}
            <div>
              <h3 className="mb-4 text-xl font-medium text-[#707070]">
                About us
              </h3>
              <p className="text-sm leading-relaxed text-black">
                Vision Traders, your trusted partner in delivering excellence
                and innovation. Founded and led by Ayaz Waheed
              </p>
            </div>

            {/* Information */}
            <div>
              <h3 className="mb-4 text-xl font-medium text-[#707070]">
                Information
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Profile",
                  "About us",
                  "Contact",
                  "Address",
                  "Return Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="mb-4 text-xl font-medium text-[#707070]">
                Follow us
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B2B2B2] hover:bg-gray-300 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="mb-4 text-xl font-medium text-gray-600">
                Get In Touch
              </h3>
              <address className="not-italic text-sm leading-relaxed text-gray-500">
                Plot No. L-10, Sector 11-F,
                <br />
                New Karachi, Karachi,
                <br />
                Pakistan
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

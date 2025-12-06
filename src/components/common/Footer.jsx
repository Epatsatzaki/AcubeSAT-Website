import * as simpleIcons from "simple-icons";

const Footer = () => {

  const footerLogos = [
    { name: "ESA", link: "https://www.esa.int", image: "/images/ESA-logos/ESA.png",
      size: "max-h-[110px] w-auto" 
    },
    { name: "Fly Your Satellite", link: "https://www.esa.int/Education/CubeSats_-_Fly_Your_Satellite", image: "/images/ESA-logos/FYS.png",
      size: "max-h-[100px] w-auto"
    },
    { name: "AUTH", link: "https://www.auth.gr", image: "/images/Fundraising/AUTH.png",
      size: "max-h-[100px] w-auto"

 
    },
    { name: "SpaceDot", link: "https://spacedot.gr", image: "/images/SpaceDot-logos/SpaceDot.png",
      size: "max-h-[80px] w-auto"
    },
  ];

  const socialMedia = [
    { name: "Facebook", link: "...", icon: simpleIcons.siFacebook },
    { name: "Instagram", link: "...", icon: simpleIcons.siInstagram },
    { name: "LinkedIn", link: "...", icon: simpleIcons.siLinkedin },
    { name: "YouTube", link: "...", icon: simpleIcons.siYoutube },
    { name: "GitLab", link: "...", icon: simpleIcons.siGitlab },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Top section with copyright, text, and social */}
        <div className="flex justify-between items-center flex-col md:flex-row mb-8">
          {/* Copyright */}
          <div className="mb-6 md:mb-0">
            <a 
              className="text-xl font-semibold hover:text-white no-underline text-gray-300 p-2 block" 
              href="https://acubesat.spacedot.gr"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; {new Date().getFullYear()} AcubeSAT
            </a>
          </div>

          {/* ESA and hosting info */}
          <div className="text-sm text-gray-300 text-center mb-6 md:mb-0 max-w-2xl">
            The AcubeSAT project is carried out with the support of the
            <a 
              className="hover:text-white text-gray-300 ml-1" 
              href="https://www.esa.int/Education/CubeSats_-_Fly_Your_Satellite/New_CubeSat_missions_selected_for_the_third_cycle_of_Fly_Your_Satellite"
              target="_blank"
              rel="noopener noreferrer"
            >
              Education Office of the European Space Agency, under the educational Fly Your Satellite! programme.
            </a>
            <br className="mt-1" />
            Hosted by <a 
              href="https://www.lancom.gr/" 
              className="text-gray-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LANCOM
            </a>
          </div>
        </div>

        {/* Logo section */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {footerLogos.map((logo, index) => (
            <a 
              key={index}
              className="footer-logo hover:opacity-80 transition-opacity"
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                alt={`${logo.name} logo`} 
                className={`${logo.size} w-auto object-contain`}
                src={logo.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iNjAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7bG9nby5uYW1lfSBMb2dvPC90ZXh0Pjwvc3ZnPg==";
                }}
              />
            </a>
          ))}
        </div>

        {/* Contact info */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <a 
                href="mailto:info@spacedot.gr"
                className="text-gray-300 hover:text-white"
              >
                info@spacedot.gr
              </a>

            </div>

            {/* Social media icons */}
            <div className="flex space-x-4 mb-6 md:mb-0">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;

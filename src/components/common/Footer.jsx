const Footer = () => {
  // Define your logo data here
  const footerLogos = [
    { name: "ESA", link: "https://www.esa.int", image: "location of esa logo" },
    { name: "Fly Your Satellite", link: "https://www.esa.int/Education/CubeSats_-_Fly_Your_Satellite", image: "location of fys logo" },
    { name: "University", link: "https://example.com", image: "location of university logo" }, // Replace with actual university link
    { name: "SpaceDot", link: "https://spacedot.gr", image: "location of spacedot logo" },
  ];

  // Social media data
  const socialMedia = [
    { name: "Facebook", link: "https://facebook.com/yourpage", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
    { name: "Instagram", link: "https://instagram.com/yourpage", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { name: "LinkedIn", link: "https://linkedin.com/company/yourcompany", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    { name: "YouTube", link: "https://youtube.com/yourchannel", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
    { name: "GitLab", link: "https://youtube.com/yourchannel", icon: "M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0l-2.664 8.189H7.044L4.38 1.263C4.242.84 3.65.84 3.513 1.263L.845 9.452.001 13.587c-.161.499.136 1.033.636 1.195l11.393 4.004a.72.72 0 00.236.042.72.72 0 00.236-.042l11.393-4.004c.5-.162.798-.696.636-1.195zm-2.332 2.031l-9.8 3.448-9.8-3.448.647-2.015 2.537-7.902h4.835l2.232 6.923a.724.724 0 001.354 0l2.232-6.923h4.835l2.537 7.902.647 2.015z" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Top section with copyright, text, and social */}
        <div className="flex justify-between items-center flex-col md:flex-row mb-8">
          {/* Copyright - AcubeSAT 2025 with link */}
          <div className="mb-6 md:mb-0">
            <a 
              className="text-xl font-semibold hover:text-white no-underline text-gray-300 p-2 block" 
              href="https://acubesat.spacedot.gr" // Replace with your actual AcubeSAT link
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

        {/* Logo section - 4 logos in a row */}
        <div className="flex flex-wrap justify-center items-center border-t border-gray-700 pt-8 gap-8">
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
                className="h-12 w-auto object-contain max-w-[150px]" // Adjust height and max-width as needed
                src={logo.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iNjAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7bG9nby5uYW1lfSBMb2dvPC90ZXh0Pjwvc3ZnPg==";
                }}
              />
            </a>
          ))}
        </div>

        {/* Contact info*/}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300">info@spacedot.gr</p>
            </div>
            {/* Social media links as icons */}
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
                  <path d={social.icon} />
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
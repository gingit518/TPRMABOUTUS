export default function AboutPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-8">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center h-16">
          <a href="#" className="font-bold text-xl text-gray-800 no-underline">
            RiskQ TPRM Exchange
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-gray-700 no-underline text-[0.95rem] hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 no-underline text-[0.95rem] hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#" className="text-gray-700 no-underline text-[0.95rem] hover:text-blue-600 transition-colors">Marketplace</a>
            <a href="#" className="text-gray-700 no-underline text-[0.95rem] hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 no-underline text-[0.95rem] hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 no-underline text-[0.95rem] hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-transparent text-blue-600 px-4 py-2.5 rounded-md text-[0.95rem] cursor-pointer hover:text-blue-700 transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2.5 rounded-md text-[0.95rem] cursor-pointer hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-8 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Built by Industry Leaders, Trusted by Enterprises
          </h1>
          <p className="text-xl text-gray-500 max-w-[700px] leading-relaxed">
            RiskQ TPRM Exchange was founded by Ariel Evans—an Amazon best-selling author, CISA/CDPSE certified professional, and serial entrepreneur with two successful exits (BMC and Kleiner Perkins) with over 20 years of cybersecurity and third-party risk management experience.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-500">Years Industry Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-500">Verified Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-500">Enterprise Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$900M</div>
              <div className="text-gray-500">Total Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Leadership Team</h2>
          <p className="text-center text-gray-500 mb-12 max-w-[700px] mx-auto">
            Industry veterans with decades of combined experience in cybersecurity, risk management, and enterprise programs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-10 transition-all hover:shadow-lg">
              <img 
                src="/ariel-evans.jpeg" 
                alt="Ariel Evans" 
                className="w-full h-[250px] object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Ariel Evans</h3>
              <div className="text-blue-600 text-sm font-semibold mb-2">Founder & CEO</div>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">CISA</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">CDPSE</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Amazon Best Seller</span>
              </div>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                Serial Entrepreneur with two successful exits: BMC and Kleiner Perkins • Author of &quot;Navigating Supply Chain Cyber Risk&quot; (Taylor & Francis) • Former CISO and risk management leader at Fortune 500 organizations
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-10 transition-all hover:shadow-lg">
              <img 
                src="/norman-levine.jpg" 
                alt="Norman Levine" 
                className="w-full h-[250px] object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Norman Levine</h3>
              <div className="text-blue-600 text-sm font-semibold mb-2">COO & Program Director</div>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Operations Leader</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Program Management</span>
              </div>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                Leads operational excellence and program delivery at RiskQ TPRM Exchange • Extensive experience in enterprise program management and risk operations • Expert in scaling security assessment programs and building high-performing analyst teams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">{"Founder's Story"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">From Practitioner to Thought Leader</h3>
              <p className="text-gray-500 mb-4 leading-relaxed">
                After spending over two decades managing cybersecurity and third-party risk programs at Fortune 500 organizations, I witnessed the same problem repeatedly: vendor security assessments were too slow, too expensive, and too inconsistent.
              </p>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Enterprises wasted months chasing vendors for documentation. Vendors filled out the same questionnaires dozens of times. Security teams burned out from repetitive manual reviews. The process was broken—and no one was fixing it.
              </p>
              <p className="text-gray-500 leading-relaxed">
                In 2024, I published &quot;Navigating Supply Chain Cyber Risk&quot; with Taylor & Francis to document best practices and frameworks I developed over my career. But a book wasn&apos;t enough—I needed to build the solution.
              </p>
            </div>
            <div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Amazon Best Seller</h3>
                <p className="text-gray-500 mb-2"><strong>&quot;Navigating Supply Chain Cyber Risk&quot;</strong></p>
                <p className="text-gray-500 mb-2">Taylor & Francis, 2024</p>
                <p className="text-gray-500 mb-4">
                  A comprehensive framework for managing third-party cyber risk, based on 20+ years of real-world experience securing complex supply chains.
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                  View on Amazon
                </button>
              </div>
            </div>
          </div>

          <div className="bg-amber-100 p-8 rounded-lg border-l-4 border-blue-600 mt-12">
            <p className="italic text-gray-700 mb-4">
              {"That's why I founded RiskQ TPRM Exchange—the industry's first marketplace connecting enterprises with pre-validated vendor security profiles, backed by certified analyst reviews and continuous monitoring. Today, as an advisory board member at Pace University and Seton Hall University, I'm shaping the next generation of cybersecurity professionals while running a platform that saves enterprises millions and gives vendors a better way to showcase their security excellence."}
            </p>
            <p className="font-semibold text-gray-800">— Ariel Evans, Founder & CEO, RiskQ TPRM Exchange</p>
          </div>
        </div>
      </section>

      {/* Why RiskQ Has Unmatched Credibility */}
      <section className="bg-blue-50 py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Why RiskQ Has Unmatched Credibility</h2>
          <p className="text-center text-gray-500 mb-12 max-w-[700px] mx-auto">
            {"Our founder's credentials, academic contributions, and published research set RiskQ apart from competitors."}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Amazon Best Seller</h4>
              <ul className="text-gray-500 text-[0.95rem] space-y-2">
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> &quot;Navigating Supply Chain Cyber Risk&quot; (Taylor & Francis, 2024)</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> Available on Amazon and major academic publishers</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> Comprehensive guide to third-party cyber risk management</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> Adopted by universities and enterprise security teams</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Professional Certifications</h4>
              <ul className="text-gray-500 text-[0.95rem] space-y-2">
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> CISA (Certified Information Systems Auditor)</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> CDPSE (Certified Data Privacy Solutions Engineer)</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> 20+ years of hands-on cybersecurity and risk management experience</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> Former CISO and risk management leader at Fortune 500 organizations</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Proven Track Record</h4>
              <ul className="text-gray-500 text-[0.95rem] space-y-2">
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> Serial Entrepreneur with two successful exits: BMC and Kleiner Perkins</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> Built and scaled cybersecurity programs across financial services, healthcare, and technology</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> Former leadership roles at Fortune 500 organizations</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold flex-shrink-0">✓</span> Track record of delivering enterprise-grade security solutions at scale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Our Mission</h2>
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-xl text-gray-500 mb-8">
              {"To transform third-party risk management by creating the world's first marketplace that connects enterprises with verified vendors, making security assessments faster, more affordable, and more reliable."}
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Our Journey</h2>
          <p className="text-center text-gray-500 mb-12">
            {"Two decades of experience culminating in the industry's first TPRM marketplace."}
          </p>
          
          <div className="max-w-[900px]">
            <div className="flex gap-8 mb-8 pb-8 border-b border-gray-200">
              <div className="text-blue-600 font-semibold min-w-[120px] flex-shrink-0">2004-2024</div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">20+ Years Industry Leadership</h4>
                <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                  Built and led cybersecurity and risk management programs at Fortune 500 companies across financial services, healthcare, and technology sectors.
                </p>
              </div>
            </div>
            <div className="flex gap-8 mb-8 pb-8 border-b border-gray-200">
              <div className="text-blue-600 font-semibold min-w-[120px] flex-shrink-0">2022-2024</div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">Academic & Advisory Roles</h4>
                <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                  Joined advisory boards at Pace University and Seton Hall University to shape cybersecurity curriculum and bridge academia with industry practice.
                </p>
              </div>
            </div>
            <div className="flex gap-8 mb-8 pb-8 border-b border-gray-200">
              <div className="text-blue-600 font-semibold min-w-[120px] flex-shrink-0">2024</div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">Published Author</h4>
                <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                  {"Released 'Navigating Supply Chain Cyber Risk' with Taylor & Francis—a comprehensive framework for managing third-party cyber risk."}
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="text-blue-600 font-semibold min-w-[120px] flex-shrink-0">2024</div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">RiskQ TPRM Exchange Founded</h4>
                <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                  {"Launched the industry's first TPRM marketplace to solve the costly, time-consuming vendor security assessment problem."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Our Core Values</h2>
          <p className="text-center text-gray-500 mb-12">
            The principles that guide everything we do at RiskQ TPRM Exchange.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Trust & Transparency</h4>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                We believe in verified security data and transparent vendor profiles. No hidden information, no surprises—just reliable intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Collaborative Ecosystem</h4>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                We bring enterprises and vendors together in a mutually beneficial marketplace that reduces friction and builds lasting relationships.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Continuous Innovation</h4>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                {"We're constantly improving our platform with new features, integrations, and capabilities to stay ahead of evolving security challenges."}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Quality & Excellence</h4>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                Every security review is conducted by certified analysts. Every vendor profile is verified. We never compromise on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RiskQ */}
      <section className="bg-blue-50 py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Why Choose RiskQ?</h2>
          <p className="text-center text-gray-500 mb-12">
            Credentials and experience that competitors cannot replicate.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h4 className="text-gray-800 font-semibold mb-3">Serial Entrepreneur with Proven Exits</h4>
              <p className="text-gray-500">
                Our founder has successfully built and exited companies acquired by BMC Software and Kleiner Perkins—bringing startup agility with Fortune 500 experience.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h4 className="text-gray-800 font-semibold mb-3">Founded by an Amazon Best-Selling Author</h4>
              <p className="text-gray-500">
                Our founder literally wrote the book on supply chain cyber risk—published by Taylor & Francis and an Amazon best seller.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h4 className="text-gray-800 font-semibold mb-3">20+ Years of Real-World Experience</h4>
              <p className="text-gray-500">
                {"Not a startup founder learning on the job—a seasoned CISO and risk management leader who's built and secured programs at Fortune 500 companies."}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h4 className="text-gray-800 font-semibold mb-3">CISA & CDPSE Certified</h4>
              <p className="text-gray-500">
                Industry-recognized certifications demonstrating deep expertise in information systems auditing and data privacy engineering.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h4 className="text-gray-800 font-semibold mb-3">{"Industry's First TPRM Marketplace"}</h4>
              <p className="text-gray-500">
                We pioneered the concept of a vendor security marketplace—saving enterprises an average of $85,000 annually while reducing assessment time by 70%.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h4 className="text-gray-800 font-semibold mb-3">Work with Industry Leaders</h4>
              <p className="text-gray-500">
                Join 500+ enterprises and vendors who trust RiskQ TPRM Exchange—built by experts, trusted by industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Ready to Transform Your Vendor Risk Management?</h2>
          <p className="text-gray-500 mb-8 text-lg">
            Join 500+ enterprises and vendors who trust RiskQ TPRM Exchange
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-base hover:bg-blue-700 transition-colors">
              Request Demo
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-md text-base hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">RiskQ TPRM Exchange</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300 text-sm">
              © 2024 RiskQ TPRM Exchange. All rights reserved. | Built by industry leaders, trusted by enterprises.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

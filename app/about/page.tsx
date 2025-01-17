import Image from "next/image";
import Link from "next/link";
import TeamMembers from "@/components/TeamMembers";

const AboutPage = () => {
  return (
    <main className="relative overflow-hidden dark:bg-gray-900">
      {/* Breadcrumb Section */}
      <section className="bg-gray-50 dark:bg-gray-800 mt-8">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-6xl font-bold text-gray-900 dark:text-white">About Us</h2>
            <nav className="flex font-bold space-x-2 text-gray-600 dark:text-gray-300">
              <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
              <span>/</span>
              <span>About</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=520&h=550"
                alt="Team collaboration in modern office"
                width={520}
                height={550}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 dark:text-white">
                Welcome to Smart Focus
              </h2>
              <div className="space-y-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                <p>
                  We are revolutionizing tech education with accessible, hands-on learning experiences. 
                  Our mission is to empower individuals from all backgrounds to excel in the dynamic 
                  world of cloud computing and beyond.
                </p>
                <p>
                  Founded with a passion for making tech education inclusive and practical, SmartFocus 
                  has grown into a global leader in AWS training and certification. From novices taking 
                  their first steps in the cloud to experienced professionals advancing their expertise, 
                  we're committed to equipping our learners with the tools they need to succeed.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full border-2 border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-300"
                >
                  Connect with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-black text-white dark:bg-gray-800 py-20 px-4 lg:py-24 mx-4 rounded-3xl">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-8xl font-bold mb-6">Our Core Values</h2>
            <div className="h-1 w-full bg-gray-800 dark:bg-gray-700 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Practical Learning",
                icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=30&h=30",
                description: "Emphasizing real-world application through guided labs and collaborative projects"
              },
              {
                title: "Community",
                icon: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=30&h=30",
                description: "Building a supportive environment with Discord community and live Q&A sessions"
              },
              {
                title: "Excellence",
                icon: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=30&h=30",
                description: "Delivering high-quality training resources with expert mentors and AWS Sandbox accounts"
              },
              {
                title: "Accessibility",
                icon: "https://images.unsplash.com/photo-1507207611509-ec012433ff52?auto=format&fit=crop&w=30&h=30",
                description: "Making tech education barrier-free and available to everyone, everywhere"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group relative pt-6 transition-all duration-300"
              >
                <div className="absolute -top-[3px] left-0 h-1 w-full scale-x-0 bg-red-500 transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={value.icon}
                    alt={`${value.title} icon`}
                    width={30}
                    height={30}
                    className="w-8 h-8 rounded-full"
                  />
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-lg text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 lg:py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <h2 className="text-6xl font-bold mb-6 dark:text-white">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To create a world where high-quality tech education is accessible to everyone, everywhere.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <h2 className="text-6xl font-bold mb-6 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To provide engaging, hands-on training in cloud computing and complementary fields, helping individuals and organizations thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-8xl font-bold mb-12 text-center dark:text-white">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Comprehensive Programs</h3>
              <p className="text-gray-600 dark:text-gray-300">From AWS certifications to coding and data science, we offer training programs for every career stage.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Collaborative Hackathons</h3>
              <p className="text-gray-600 dark:text-gray-300">Build portfolios, explore AWS services, and collaborate with peers in dynamic, real-world scenarios.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Global Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">Free, online programs accessible globally to anyone with an internet connection.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Proven Track Record</h3>
              <p className="text-gray-600 dark:text-gray-300">90% program completion rate and 50% AWS certification success rate within 60 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SmartFocus Section */}
      <section className="py-16 lg:py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-6xl font-bold mb-12 text-center dark:text-white">Why Choose SmartFocus?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Our Approach to Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We emphasize real-world application through our guided labs and collaborative projects. 
                Our learners gain hands-on experience with AWS services and tools, ensuring practical 
                skills development.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                As we explore physical learning hubs and expand our offerings, including soft skills 
                and data science training, SmartFocus continues to evolve to meet the needs of modern learners.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Join Us on This Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Whether you're an aspiring cloud practitioner, a seasoned professional, or a business 
                looking to upskill your team, SmartFocus is here to guide you every step of the way.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Together, we'll navigate the ever-changing tech landscape and achieve your career goals. 
                At SmartFocus, your success is our focus.
              </p>
              <div className="mt-8">
                <Link
                  href="/register"
                  className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full border-2 border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-300"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <TeamMembers />
    </main>
  );
};

export default AboutPage;
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=376&h=400",
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    name: "James Wilson",
    role: "Machine Learning Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=376&h=400",
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Data Science Expert",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=376&h=400",
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  }
];

const SocialIcon = ({ icon: Icon, href, label }) => (
  <Link
    href={href}
    rel="noopener noreferrer"
    className="group relative flex h-8 w-8 items-center justify-center rounded-full bg-black transition-colors hover:bg-red-500"
    aria-label={label}
  >
    <Icon className="h-4 w-4 text-white" />
  </Link>
);

const TeamMembers = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-6xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">Expert professionals behind our success</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group rounded-3xl bg-gray-50 p-5 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-[1/1] overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={376}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="mt-5">
                <h3 className="text-2xl font-bold hover:text-red-500 transition-colors">
                  {member.name}
                </h3>
                <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <span className="text-lg text-gray-600">{member.role}</span>
                  <div className="flex gap-3">
                    <SocialIcon icon={Facebook} href={member.socials.facebook} label="Facebook" />
                    <SocialIcon icon={Twitter} href={member.socials.twitter} label="Twitter" />
                    <SocialIcon icon={Linkedin} href={member.socials.linkedin} label="LinkedIn" />
                    <SocialIcon icon={Instagram} href={member.socials.instagram} label="Instagram" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
import React from "react";

const About = () => {
  const team = [
    {
      name: "Anganya",
      role: "Founder & CEO",
      image: "/images/icon1.jpg", 
      bio: "A visionary leader with over 15 years in construction and project management.",
    },
    {
      name: "Grace Njeri",
      role: "Head of Operations",
      image: "/images/icon2.jpg",
      bio: "Passionate about efficiency, client satisfaction, and ensuring timely delivery.",
    },
    {
      name: "David Otieno",
      role: "Lead Engineer",
      image: "/images/icon2.jpg",
      bio: "Expert in structural design and sustainable building solutions.",
    },
    {
      name: "Mary Wambui",
      role: "Architect & Designer",
      image: "/images/icon2.jpg",
      bio: "Specializes in innovative, eco-friendly, and client-centered designs.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-24 bg-white">
        <span className="bg-accent-100 text-accent-600 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
          About Kambove Enterprises
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Building Excellence for{" "}
          <span className="text-primary-700">Over 20 Years</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
          We are a business specialised in construction and supply of
          construction materials like aluminum doors and windows, concrete
          blocks, paving blocks and brick tiles, serving contractors and
          builders across Africa.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Text Content - Takes 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary-700 mb-6">
                Our Story
              </h2>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                At Kambove Enterprises, we are at the beginning of an exciting journey in the construction and building materials industry. Although we are a new player, our vision is clear, to provide quality products and dependable services that set a strong foundation for growth and trust.

We understand that construction is more than just bricks and mortar; it is about creating spaces that serve communities, support businesses, and improve everyday living. That is why we are committed to sourcing and supplying durable, affordable, and reliable building materials while also offering construction services that meet the highest standards.

Our mission is to build lasting relationships with our clients, partners, and communities by consistently delivering value, integrity, and innovation in everything we do. As we take these first steps, we look forward to growing together with those who believe in our vision and being part of projects that truly make a difference.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Over the years, we have successfully completed hundreds of projects,
                  from residential homes to commercial buildings, always maintaining
                  our commitment to quality, integrity, and customer satisfaction.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Today, we continue to innovate and adapt to the changing needs of
                  our clients while staying true to our core values of excellence
                  and reliability.
                </p>
              </div>
            </div>
            
            {/* Image - Takes 1 column */}
            <div className="lg:col-span-1">
              <div className="relative">
                <img
                  src="/images/about_pic.jpg"
                  alt="Our construction team"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-700/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-700 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-8 rounded-xl">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold text-primary-700 mb-3">
                Quality First
              </h3>
              <p className="text-slate-600">
                We never compromise on quality. Every project is executed with
                precision and attention to detail.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-xl">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold text-primary-700 mb-3">
                Integrity
              </h3>
              <p className="text-slate-600">
                We conduct business with honesty, transparency, and ethical
                practices in all our dealings.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-xl">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold text-primary-700 mb-3">
                Innovation
              </h3>
              <p className="text-slate-600">
                We embrace new technologies and methods to deliver better
                results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-700 mb-4">
              Meet Our Team
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our experienced team of professionals is dedicated to bringing
              your vision to life with expertise and passion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-primary-700 mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Numbers that speak to our commitment and success in the industry.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">500+</div>
              <div className="text-primary-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">20+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">100%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">50+</div>
              <div className="text-primary-100">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

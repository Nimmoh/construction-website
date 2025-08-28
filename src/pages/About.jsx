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
        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
          About Kambove Enterprises
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Building Excellence for{" "}
          <span className="text-green-700">Over 20 Years</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          We are a business specialised in construction and supply of
          construction materials like aluminum doors and windows, concrete
          blocks, paving blocks and brick tiles, serving contractors and
          builders across Africa.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Kambove Enterprises was founded with a singular vision: to revolutionize the construction and supply industry. Our founders saw a need for a partner that could provide both top-tier materials and exceptional service, all while embracing modern design and sustainable practices.

          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we serve thousands of contractors, builders, and construction
            companies, from small residential projects to large commercial
            developments. Our commitment to modern design, quality, and customer
            service has made us a trusted partner in the construction industry.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="/images/about_pic.jpg"
            alt="Our Work"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-white rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To transform ideas into tangible solutions through quality
              craftsmanship, sustainable practices, and innovative designs.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be a trusted leader in construction across Africa, inspiring
              progress and empowering communities through infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Integrity", "Innovation", "Sustainability", "Customer Focus"].map(
              (val, i) => (
                <div
                  key={i}
                  className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-orange-500">{val}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="italic text-xl text-gray-600 leading-relaxed">
            “kambove Enterprises turned our vision into reality with professionalism and precision. 
            We couldn’t be happier with the results.”
          </blockquote>
          <p className="mt-4 text-green-700 font-semibold">— Happy Client, Nairobi</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-green-700 mb-12">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 shadow"
                />
                <h3 className="text-lg font-bold text-orange-500">{member.name}</h3>
                <p className="text-green-700 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
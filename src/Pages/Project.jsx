import React from "react";

const projects = [
  {
    title: "The Horizon Villa",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&q=80&w=1080",
    description:
      "A stunning hilltop retreat with panoramic views and minimalist design, fully managed for long-term leasing.",
  },
  {
    title: "Urban Courtyard",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&q=80&w=1080",
    description:
      "A modern multi-family dwelling optimized for space, sustainability, and tenant comfort.",
  },
  {
    title: "Seaside Sanctuary",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&q=80&w=1080",
    description:
      "A beachfront masterpiece combining architectural elegance with smart automation systems.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Featured <span className="text-amber-500">Projects</span>
        </h2>
        <p className="text-gray-600 text-lg mb-14 max-w-3xl mx-auto">
          Explore some of our latest work, blending form and function with timeless aesthetics and expert management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
            >
              <div className="overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

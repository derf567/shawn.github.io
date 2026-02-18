const Experience = () => {
  const experiences = [
    {
      title: "Bidding Officer",
      company: "10-02 Enterprises, Co. Inc.",
      period: "2023 - 2025",
      description: "Detail-oriented and reliable professional with experience in construction documentation, bidding processes, and project coordination. Skilled in preparing quotations, assisting engineers, and ensuring compliance with client requirements. Dedicated to efficiency, teamwork, and achieving project deadlines."
    },
    {
      title: "Bidding Officer",
      company: "Monolithic Construction and Concrete Products, Inc.",
      period: "2014 - 2023",
      description: "Detail-oriented and reliable professional with experience in construction documentation, bidding processes, and project coordination. Skilled in preparing quotations, assisting engineers, and ensuring compliance with client requirements. Dedicated to efficiency, teamwork, and achieving project deadlines."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Work Experience</h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative pl-8 border-l-4 border-teal-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                <p className="text-teal-600 font-semibold mb-2">{exp.company}</p>
                <p className="text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">About Me</h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            I am a dedicated and reliable worker with experience in the construction industry, 
            particularly in project bidding and documentation. I can handle paperwork, quotations, 
            and coordination efficiently. I value teamwork, accuracy, and meeting deadlines to 
            ensure smooth project operations.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-teal-500 text-4xl mb-3">📋</div>
              <h3 className="font-semibold text-xl mb-2">Documentation</h3>
              <p className="text-gray-600">Expert in construction documentation and bidding processes</p>
            </div>
            
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-teal-500 text-4xl mb-3">🤝</div>
              <h3 className="font-semibold text-xl mb-2">Coordination</h3>
              <p className="text-gray-600">Skilled in project coordination and team collaboration</p>
            </div>
            
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-teal-500 text-4xl mb-3">⏱️</div>
              <h3 className="font-semibold text-xl mb-2">Efficiency</h3>
              <p className="text-gray-600">Committed to accuracy and meeting project deadlines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

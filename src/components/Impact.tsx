const Impact = () => {
  const metrics = [
    { number: "2,000+", label: "Youth to be mentored", description: "Target beneficiaries over 3-5 years" },
    { number: "6", label: "Core Programs", description: "Comprehensive support initiatives" },
    { number: "12-25", label: "Age Range", description: "Years of youth we serve" },
    { number: "100%", label: "Community Focus", description: "Locally-driven solutions" }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact Goals
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Measurable outcomes that drive sustainable change in Kakuma and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {metric.number}
              </div>
              <div className="text-lg font-semibold text-white/90 mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-white/80">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Core Objectives
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Equip youth with essential life skills and leadership capacity",
              "Provide mentorship and psychosocial support for displaced youth",
              "Promote education access, digital literacy, and innovation",
              "Foster peaceful coexistence through youth-led initiatives",
              "Reduce youth unemployment through vocational training",
              "Build stronger communities through collaborative programs"
            ].map((objective, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3"></div>
                <p className="text-white/90 text-left">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
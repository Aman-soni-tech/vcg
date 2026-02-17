export function About({ onBackClick }: { onBackClick: () => void }) {
  return (
    <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-white px-4 md:px-0">
      <div className="container-custom">
        {/* Back Button */}
        <button
          onClick={onBackClick}
          className="mb-6 md:mb-8 flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold transition-colors text-sm md:text-base"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        {/* Main About Card */}
        <div className="mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            About Vidhya Code Gurukul
          </h2>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                At <span className="font-semibold text-primary-700">Vidhya Code Gurukul</span>, we blend the discipline and values of the traditional Gurukul system with modern technology education. Our mission is to develop well-rounded individuals who are not only skilled in coding but also confident in communication and strong in character.
              </p>

              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                We provide a complete 360-degree learning experience through a combination of technical training, soft skills development, and personal growth sessions. Our approach focuses on practical, hands-on learning where students work on real-world projects, attend live coding sessions, and receive continuous mentorship.
              </p>

              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                We believe true success comes from both technical knowledge and the right mindset. That's why our programs include communication training, personality development, and Karm Gyan sessions to build discipline, ethics, and confidence.
              </p>

              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                Based in <span className="font-semibold text-primary-700">Indore</span>, we are committed to empowering future-ready professionals across India.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 stagger-children">
          {/* Mission Card */}
          <div className="p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-medium transition-all duration-300 group bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="p-2 md:p-3 bg-gradient-primary rounded-lg text-white w-fit group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
              To provide practical, career-focused coding education while developing confidence, discipline, and communication skills.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-medium transition-all duration-300 group bg-gradient-to-br from-purple-50 to-white">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="p-2 md:p-3 bg-gradient-accent rounded-lg text-white w-fit group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
              To become a trusted learning institute that shapes skilled and confident technology professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

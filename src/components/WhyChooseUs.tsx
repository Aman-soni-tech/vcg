import { Play, Lightbulb, Users, Heart, TrendingUp, Monitor } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Play,
      title: 'Live Coding Sessions',
      description: 'Interactive real-time coding sessions with experienced mentors',
    },
    {
      icon: Lightbulb,
      title: 'Real-World Projects',
      description: 'Build actual projects used in industry to strengthen your portfolio',
    },
    {
      icon: Users,
      title: 'Small Batch Sizes',
      description: 'Personalized attention with maximum 15 students per batch',
    },
    {
      icon: Heart,
      title: 'Personal Mentorship',
      description: 'One-on-one guidance from industry professionals throughout your journey',
    },
    {
      icon: TrendingUp,
      title: 'Career Guidance',
      description: 'Resume building, interview prep, and placement support',
    },
    {
      icon: Monitor,
      title: 'Online & Offline Classes',
      description: 'Flexible learning with both in-person and virtual options',
    },
  ];

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gray-900 mb-4">Why Choose Vidhya Code Gurukul</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best coding education experience with comprehensive support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-medium transition-all duration-300 group">
                <div className="p-3 bg-gradient-primary rounded-lg text-white w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

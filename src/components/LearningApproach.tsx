import { Zap, Users, MessageSquare } from 'lucide-react';

export function LearningApproach() {
  const approaches = [
    {
      icon: Zap,
      title: 'Practical Learning',
      description: 'Learn by doing with hands-on projects and real-world coding scenarios',
    },
    {
      icon: Users,
      title: 'Personal Mentorship',
      description: 'Receive continuous guidance and feedback from industry-experienced mentors',
    },
    {
      icon: MessageSquare,
      title: 'Communication & Personality',
      description: 'Develop soft skills for long-term success in tech and beyond',
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-gray-900 mb-4">Our Learning Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            We focus on learning by doing. Students participate in live coding sessions, build real projects, and receive continuous mentorship. Along with technical skills, we train communication, discipline, and mindset for long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 stagger-children">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <div
                key={index}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                  <div className="p-4 bg-gradient-accent rounded-xl text-white w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{approach.title}</h3>

                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

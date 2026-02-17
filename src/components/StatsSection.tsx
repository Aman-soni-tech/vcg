import { Users, Code, Zap } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '15',
      label: 'Students Trained',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Code,
      value: '15+',
      label: 'Expert Mentors',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Zap,
      value: '100%',
      label: 'Live Mentorship',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-r from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center animate-fade-in w-full sm:w-auto" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`${stat.color} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md`}>
                  <Icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-gray-600 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

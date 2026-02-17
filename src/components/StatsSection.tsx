import { Users, TrendingUp, Code, Zap } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Students Trained',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Placement Rate',
      color: 'bg-green-100 text-green-600',
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
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

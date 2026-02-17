import { AlertCircle, BookOpen, Clock, Phone, Users, CheckCircle } from 'lucide-react';

export function Rules() {
  const rules = [
    {
      icon: BookOpen,
      title: 'Weekly Tests & 60% Minimum',
      description: 'Mandatory weekly assessments. Score of 60% or above is compulsory. No exceptions.',
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-300',
    },
    {
      icon: CheckCircle,
      title: '100% Attendance Required',
      description: 'Full attendance is non-negotiable. Miss classes = Remove from batch. Zero tolerance policy.',
      color: 'bg-orange-100 text-orange-600',
      borderColor: 'border-orange-300',
    },
    {
      icon: Clock,
      title: 'Time & Discipline',
      description: 'Arrive on time, every time. Punctuality is a fundamental rule. Discipline builds success.',
      color: 'bg-yellow-100 text-yellow-600',
      borderColor: 'border-yellow-300',
    },
    {
      icon: AlertCircle,
      title: 'No Holidays Allowed',
      description: 'No breaks, no holidays. You committed to this journey. See it through without interruptions.',
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-300',
    },
    {
      icon: Phone,
      title: 'No Phones During Class',
      description: 'Phones are strictly prohibited. Complete focus on learning. No distractions, no exceptions.',
      color: 'bg-purple-100 text-purple-600',
      borderColor: 'border-purple-300',
    },
    {
      icon: Users,
      title: 'Respect Everyone',
      description: 'Treat younger and elder with equal respect. Mutual respect is the foundation of our community.',
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-300',
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-bold">
              ⚡ RULES & POLICIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rules You Must Follow
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No compromise. No excuses. These rules are designed to transform you into a disciplined professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl border-2 ${rule.borderColor} bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className={`${rule.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {rule.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {rule.description}
                  </p>

                  {/* Accent line */}
                  <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-orange-600 transition-all duration-300 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 text-center border-2 border-red-400">
          <h3 className="text-2xl font-bold text-white mb-2">🔥 This is Your Reality Check</h3>
          <p className="text-red-100 text-lg">
            Break these rules = Instant removal from the batch. We're building champions, not part-timers. Are you ready?
          </p>
        </div>
      </div>
    </section>
  );
}

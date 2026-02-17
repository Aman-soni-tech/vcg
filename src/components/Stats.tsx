import { useState, useEffect } from 'react';
import { getStats, Stat } from '../lib/supabase';

function StatCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const increment = Math.ceil(value / 30);
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted, value]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
      }
    });

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  return (
    <div id={`stat-${label}`} className="text-center">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
        {count}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

export function Stats() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (error) {
        console.error('Error loading stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 bg-white/10 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-700 to-primary-900">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <StatCounter value={stat.value} label={stat.label} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

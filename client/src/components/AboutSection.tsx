/**
 * NYA AboutSection — NSA-style three-column card layout
 * Vision, Mission, Community with icons
 */
import { Target, Heart, Users } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      icon: Target,
      title: "Vision",
      description: "To be a transformative platform empowering young people across Nandi County to lead, innovate, and drive positive change in their communities.",
      color: "oklch(0.38 0.09 195)",
    },
    {
      icon: Heart,
      title: "Mission",
      description: "To advocate, support, and inspire youth through education, mentorship, leadership development, and collective action for sustainable community impact.",
      color: "oklch(0.75 0.16 75)",
    },
    {
      icon: Users,
      title: "Community",
      description: "Serving students and youth from secondary schools, TVETs, polytechnics, colleges, and universities across Nandi County.",
      color: "oklch(0.65 0.18 300)",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "oklch(0.12 0.005 285)",
            }}
          >
            Who We Are
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Uniting young voices across Nandi County for leadership, empowerment, and collective action.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: `${card.color}15` }}
                >
                  <Icon size={32} style={{ color: card.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "oklch(0.12 0.005 285)",
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Organization Info */}
        <div className="bg-white rounded-2xl p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  color: "oklch(0.75 0.16 75)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                8+
              </div>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Focus Areas
              </p>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  color: "oklch(0.38 0.09 195)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                60+
              </div>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Schools Target
              </p>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  color: "oklch(0.65 0.18 300)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                2025
              </div>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Founded
              </p>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  color: "oklch(0.38 0.09 195)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                1000+
              </div>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Members
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

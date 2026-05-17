/**
 * NYA ActivitiesSection — NSA-style two-column image cards
 * Dark overlays with white text, rounded corners
 */
import { ArrowRight } from "lucide-react";

const MENTORSHIP_IMG = "/manus-storage/extracted_image_2_759fd824.png";
const LEADERSHIP_IMG = "/manus-storage/extracted_image_3_43a49aae.png";

export default function ActivitiesSection() {
  const activities = [
    {
      title: "Community Service",
      description: "Making a difference through CSR activities",
      image: MENTORSHIP_IMG,
    },
    {
      title: "Leadership Development",
      description: "Building tomorrow's leaders today",
      image: LEADERSHIP_IMG,
    },
  ];

  return (
    <section id="activities" className="py-24 bg-white overflow-hidden">
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
            What We Do
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            From educational support to community service, we're making a real difference in the lives of students and communities across Nandi County.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Dark Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {activity.title}
                </h3>
                <p
                  className="text-white/90 text-sm"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg font-bold text-base transition-all duration-200 hover:brightness-110 inline-flex items-center gap-2"
            style={{
              background: "oklch(0.38 0.09 195)",
              color: "white",
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: "0 4px 20px oklch(0.38 0.09 195 / 0.3)",
            }}
          >
            View All Activities
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

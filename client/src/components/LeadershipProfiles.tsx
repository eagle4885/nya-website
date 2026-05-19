/**
 * NYA LeadershipProfiles — MOYASA-style professional profile cards
 * 3-column layout with professional headshots and titles
 */

const LEADERSHIP_TEAM = [
  {
    id: 1,
    name: "James Kipchoge",
    title: "Chairperson",
    image: "/manus-storage/extracted_image_4_8c3d4f2e.png",
  },
  {
    id: 2,
    name: "Sarah Koech",
    title: "Vice Chairperson",
    image: "/manus-storage/extracted_image_5_a1b2c3d4.png",
  },
  {
    id: 3,
    name: "David Kiplagat",
    title: "Secretary General",
    image: "/manus-storage/extracted_image_6_f5e6d7c8.png",
  },
  {
    id: 4,
    name: "Grace Mutai",
    title: "Treasurer",
    image: "/manus-storage/extracted_image_7_9a8b7c6d.png",
  },
  {
    id: 5,
    name: "Peter Rotich",
    title: "Communications Officer",
    image: "/manus-storage/extracted_image_8_2d3e4f5a.png",
  },
  {
    id: 6,
    name: "Mary Kipchoge",
    title: "Programs Director",
    image: "/manus-storage/extracted_image_9_6b7c8d9e.png",
  },
];

export default function LeadershipProfiles() {
  return (
    <section
      id="leadership"
      className="py-20"
      style={{ background: "oklch(0.92 0.01 240)" }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "oklch(0.12 0.005 285)",
            }}
          >
            Leadership
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Meet the dedicated team driving the Nandi Youth Assembly forward
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Photo Container */}
              <div className="mb-6 w-full max-w-xs overflow-hidden rounded-lg shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name */}
              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "oklch(0.12 0.005 285)",
                }}
              >
                {member.name}
              </h3>

              {/* Title */}
              <p
                className="text-lg mb-4"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "oklch(0.38 0.09 195)",
                  fontStyle: "italic",
                }}
              >
                {member.title}
              </p>

              {/* Divider */}
              <div
                className="w-12 h-1 rounded-full mb-4"
                style={{ background: "oklch(0.75 0.16 75)" }}
              />

              {/* Bio/Description */}
              <p
                className="text-sm leading-relaxed text-gray-600"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Passionate about youth empowerment and community development. Leading initiatives to create lasting impact in Nandi County.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  GraduationCap,
  Brain,
  BookOpen,
  FileText,
  BarChart3,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Teacher",
    description: "24×7 AI Teacher for instant doubt solving.",
  },
  {
    icon: BookOpen,
    title: "Smart Notes",
    description: "Easy chapter-wise notes for quick revision.",
  },
  {
    icon: FileText,
    title: "Mock Tests",
    description: "Board pattern tests with instant results.",
  },
  {
    icon: GraduationCap,
    title: "Commerce Courses",
    description: "GSEB, CBSE, B.Com and Professional Courses.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor learning and improve weak topics.",
  },
  {
    icon: Trophy,
    title: "Board Preparation",
    description: "Expected Questions and Exam Strategy.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Why Choose StudyCommerce?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything a Commerce student needs in one platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >

                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">

                  <Icon className="text-blue-600" size={30} />

                </div>

                <h3 className="text-2xl font-semibold mt-6">

                  {feature.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-7">

                  {feature.description}

                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
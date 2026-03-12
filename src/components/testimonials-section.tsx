import { TestimonialCard } from "./testimonial-card";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Lucas delivers clean, well-documented code and demonstrates a strong understanding of full-stack development. His contributions significantly improved our project's maintainability.",
    author: "Team Lead",
    role: "Project Manager",
    company: "Tech Company",
  },
  {
    quote:
      "Collaborative, reliable, and always eager to learn. Lucas brings enthusiasm to every project and produces high-quality results.",
    author: "Senior Developer",
    role: "Technical Lead",
    company: "Development Team",
  },
];

export function TestimonialsSection({
  testimonials = defaultTestimonials,
  title = "What People Say",
  subtitle = "Feedback from colleagues and team members",
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-foreground/70 dark:text-foreground/80">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

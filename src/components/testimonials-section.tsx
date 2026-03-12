import { useTranslation } from "react-i18next";
import { TestimonialCard } from "./testimonial-card";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function TestimonialsSection({
  testimonials,
  title,
  subtitle,
}: TestimonialsSectionProps) {
  const [t] = useTranslation("translation");

  const defaultTestimonials: Testimonial[] = [
    {
      quote: t("Testimonials.default_1_quote"),
      author: t("Testimonials.default_1_author"),
      role: t("Testimonials.default_1_role"),
      company: t("Testimonials.default_1_company"),
    },
    {
      quote: t("Testimonials.default_2_quote"),
      author: t("Testimonials.default_2_author"),
      role: t("Testimonials.default_2_role"),
      company: t("Testimonials.default_2_company"),
    },
  ];

  const resolvedTestimonials = testimonials ?? defaultTestimonials;
  const resolvedTitle = title ?? t("Testimonials.title");
  const resolvedSubtitle = subtitle ?? t("Testimonials.subtitle");

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-foreground mb-4">
            {resolvedTitle}
          </h2>
          <p className="text-lg text-foreground/70 dark:text-foreground/80">
            {resolvedSubtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resolvedTestimonials.map((testimonial, idx) => (
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

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Users, Target, Shield, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Landing = () => {
  const features = [
    {
      icon: Target,
      title: "Personalized Matching",
      description: "Our AI-powered algorithm matches you with psychologists based on your specific needs, preferences, and company culture."
    },
    {
      icon: Users,
      title: "Corporate Focused",
      description: "Specialized in workplace mental health with psychologists who understand corporate environments and challenges."
    },
    {
      icon: Shield,
      title: "Confidential & Secure",
      description: "Complete privacy protection with HIPAA-compliant processes and secure communication channels."
    },
    {
      icon: Brain,
      title: "Expert Network",
      description: "Curated network of licensed professionals specializing in workplace stress, career development, and mental wellness."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director, Tech Corp",
      content: "MindMatch transformed our employee wellness program. The matching process is incredibly accurate.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content: "Found the perfect therapist for my work-life balance issues. The process was seamless and private.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Marketing Manager",
      content: "Finally, a mental health solution that understands the corporate world. Highly recommend.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Connect with the
                  <span className="text-transparent bg-gradient-hero bg-clip-text"> Perfect</span> Psychologist
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Intelligent matching system that connects corporate professionals with specialized psychologists based on your unique needs and preferences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="gradient" size="lg" className="text-lg px-8 py-6">
                  <Link to="/survey">
                    Start Matching
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/psychologists">
                    Browse Psychologists
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-success" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-success" />
                  <span>500+ Professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-success" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Professional consultation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Matching in progress...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why Choose MindMatch?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technology with human expertise to provide the most effective mental health matching platform for corporate environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="space-y-4 p-0">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              What Our Users Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="space-y-4 p-0">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">&quot;{testimonial.content}&quot;</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of professionals who have found the right mental health support through our intelligent matching system.
            </p>
            <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6">
              <Link to="/survey">
                Take the Survey Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
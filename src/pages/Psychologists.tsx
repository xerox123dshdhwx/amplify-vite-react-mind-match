import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, MessageCircle, Calendar, Filter } from "lucide-react";
import { useState } from "react";

const psychologists = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Workplace Stress & Anxiety",
    rating: 4.9,
    reviewCount: 127,
    experience: "12 years",
    location: "New York, NY",
    avatar: "/placeholder.svg",
    matchPercentage: 95,
    price: "$150/session",
    availability: "Available this week",
    bio: "Specialized in corporate mental health with extensive experience in Fortune 500 companies. Expert in stress management, anxiety disorders, and work-life balance.",
    tags: ["Anxiety", "Corporate Stress", "CBT", "Mindfulness"],
    languages: ["English", "Spanish"],
    sessionTypes: ["In-person", "Video", "Phone"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Executive Coaching & Leadership",
    rating: 4.8,
    reviewCount: 89,
    experience: "8 years",
    location: "San Francisco, CA",
    avatar: "/placeholder.svg",
    matchPercentage: 92,
    price: "$200/session",
    availability: "Available next week",
    bio: "Combines psychology with business acumen. Specializes in leadership development, career transitions, and high-performance mindset coaching.",
    tags: ["Leadership", "Career Development", "Performance", "Burnout"],
    languages: ["English", "Mandarin"],
    sessionTypes: ["Video", "In-person"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Work-Life Balance & Relationships",
    rating: 4.9,
    reviewCount: 156,
    experience: "15 years",
    location: "Chicago, IL",
    avatar: "/placeholder.svg",
    matchPercentage: 88,
    price: "$140/session",
    availability: "Available today",
    bio: "Expert in helping professionals navigate relationships while maintaining demanding careers. Specializes in communication, boundaries, and emotional intelligence.",
    tags: ["Relationships", "Communication", "Boundaries", "EQ"],
    languages: ["English", "Spanish", "Portuguese"],
    sessionTypes: ["Video", "Phone", "In-person"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Crisis Management & Trauma",
    rating: 4.7,
    reviewCount: 73,
    experience: "10 years",
    location: "Austin, TX",
    avatar: "/placeholder.svg",
    matchPercentage: 85,
    price: "$160/session",
    availability: "Available this week",
    bio: "Specialized in workplace trauma, crisis intervention, and PTSD. Experienced with first responders and high-stress corporate environments.",
    tags: ["Trauma", "PTSD", "Crisis", "First Responders"],
    languages: ["English"],
    sessionTypes: ["Video", "In-person", "Emergency"]
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Cognitive Behavioral Therapy",
    rating: 4.9,
    reviewCount: 201,
    experience: "18 years",
    location: "Boston, MA",
    avatar: "/placeholder.svg",
    matchPercentage: 90,
    price: "$135/session",
    availability: "Available next week",
    bio: "Leading expert in CBT with focus on anxiety, depression, and negative thought patterns. Highly effective approach for busy professionals.",
    tags: ["CBT", "Depression", "Anxiety", "Thought Patterns"],
    languages: ["English", "French"],
    sessionTypes: ["Video", "Phone", "In-person"]
  }
];

export const Psychologists = () => {
  const [sortBy, setSortBy] = useState("match");

  const sortedPsychologists = [...psychologists].sort((a, b) => {
    switch (sortBy) {
      case "match":
        return b.matchPercentage - a.matchPercentage;
      case "rating":
        return b.rating - a.rating;
      case "price":
        return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Your Matched Psychologists</h1>
            <p className="text-xl text-muted-foreground">
              Based on your survey responses, here are your top matches
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={sortBy === "match" ? "default" : "outline"}
              onClick={() => setSortBy("match")}
              size="sm"
            >
              <Filter className="mr-2 h-4 w-4" />
              Best Match
            </Button>
            <Button
              variant={sortBy === "rating" ? "default" : "outline"}
              onClick={() => setSortBy("rating")}
              size="sm"
            >
              Highest Rated
            </Button>
            <Button
              variant={sortBy === "price" ? "default" : "outline"}
              onClick={() => setSortBy("price")}
              size="sm"
            >
              Price: Low to High
            </Button>
          </div>
        </div>

        {/* Psychologist Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sortedPsychologists.map((psychologist) => (
            <Card key={psychologist.id} className="hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={psychologist.avatar} alt={psychologist.name} />
                      <AvatarFallback>{psychologist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <CardTitle className="text-xl text-foreground">{psychologist.name}</CardTitle>
                      <p className="text-primary font-medium">{psychologist.specialty}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          {psychologist.rating} ({psychologist.reviewCount})
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {psychologist.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      {psychologist.matchPercentage}% Match
                    </Badge>
                    <p className="text-lg font-semibold text-foreground">{psychologist.price}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{psychologist.bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {psychologist.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {psychologist.location}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {psychologist.availability}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-muted-foreground">
                      Languages: {psychologist.languages.join(", ")}
                    </div>
                    <div className="text-muted-foreground">
                      Formats: {psychologist.sessionTypes.join(", ")}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Session
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-primary text-white">
            <CardContent className="space-y-4 p-0">
              <h3 className="text-2xl font-bold">Don't see the perfect match?</h3>
              <p className="text-white/90">
                Our matching algorithm learns from your preferences. Take the survey again or contact our team for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary">
                  Retake Survey
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
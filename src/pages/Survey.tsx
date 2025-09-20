import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const surveyQuestions = [
  {
    id: 1,
    category: "Work Environment",
    question: "What best describes your current work situation?",
    options: [
      "High-stress corporate environment",
      "Remote work challenges", 
      "Team management responsibilities",
      "Career transition period",
      "Work-life balance issues"
    ]
  },
  {
    id: 2,
    category: "Primary Concerns",
    question: "What is your main area of concern?",
    options: [
      "Anxiety and stress management",
      "Depression and mood issues",
      "Relationship and communication",
      "Career development and goals",
      "Burnout and overwhelm"
    ]
  },
  {
    id: 3,
    category: "Communication Style",
    question: "Which communication approach do you prefer?",
    options: [
      "Direct and solution-focused",
      "Supportive and empathetic",
      "Analytical and evidence-based",
      "Creative and exploratory",
      "Structured and goal-oriented"
    ]
  },
  {
    id: 4,
    category: "Session Preferences", 
    question: "What session format works best for you?",
    options: [
      "In-person meetings",
      "Video calls",
      "Phone sessions",
      "Flexible scheduling",
      "Weekend availability"
    ]
  },
  {
    id: 5,
    category: "Experience Level",
    question: "What level of specialization do you need?",
    options: [
      "General counseling and support",
      "Specialized workplace therapy",
      "Executive coaching integration",
      "Crisis intervention experience",
      "Long-term therapeutic relationship"
    ]
  }
];

export const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const progress = ((currentQuestion + 1) / surveyQuestions.length) * 100;

  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [surveyQuestions[currentQuestion].id]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentAnswer = answers[surveyQuestions[currentQuestion]?.id];

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-8 border-success">
            <CardContent className="space-y-6 p-0">
              <div className="mx-auto w-16 h-16 bg-success rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-foreground">
                  Survey Complete!
                </h1>
                <p className="text-xl text-muted-foreground">
                  Thank you for completing the matching survey. Our AI algorithm is now processing your responses to find the perfect psychologists for your needs.
                </p>
              </div>

              <div className="bg-accent p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-foreground">What happens next?</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• AI analysis of your preferences and needs</li>
                  <li>• Matching with 3-5 specialized psychologists</li>
                  <li>• Personalized recommendations delivered</li>
                  <li>• Direct booking available with matched professionals</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/psychologists">
                    View Your Matches
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/">
                    Return Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Progress Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {surveyQuestions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="space-y-2">
              <div className="text-sm text-primary font-medium">
                {surveyQuestions[currentQuestion].category}
              </div>
              <CardTitle className="text-2xl text-foreground">
                {surveyQuestions[currentQuestion].question}
              </CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <RadioGroup
              value={currentAnswer || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {surveyQuestions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <RadioGroupItem 
                    value={option} 
                    id={`option-${index}`}
                    className="border-2"
                  />
                  <Label 
                    htmlFor={`option-${index}`}
                    className="flex-1 text-base cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <Button
            variant="hero"
            onClick={handleNext}
            disabled={!currentAnswer}
          >
            {currentQuestion === surveyQuestions.length - 1 ? "Complete Survey" : "Next Question"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
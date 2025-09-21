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
        category: "Type de thérapie",
        question: "Quel type de thérapie recherchez-vous ?",
        options: [
            "Individuelle (pour moi-même)",
            "En couple (pour moi et mon partenaire)"
        ]
    },
    {
        id: 2,
        category: "Identité",
        question: "Quelle est votre identité de genre ?",
        options: [
            "Femme",
            "Homme",
            "Non binaire",
            "Transféminine",
            "Transmasculin",
            "Sans genre",
            "Je ne sais pas",
            "Je préfère ne pas le dire",
            "Autre"
        ]
    },
    {
        id: 3,
        category: "Identité",
        question: "Comment vous identifiez-vous ?",
        options: [
            "Hétérosexuel.le",
            "Gay",
            "Lesbienne",
            "Bi ou pansexuel.le",
            "Je préfère ne pas le dire",
            "Curieux.euse",
            "Queer",
            "Asexuel.le",
            "Je ne sais pas",
            "Autre"
        ]
    },
    {
        id: 4,
        category: "Identité",
        question: "Souhaitez-vous être mis.e en relation avec un.e thérapeute spécialisé.e dans les questions LGBTQ+ ?",
        options: ["Non", "Oui"]
    },
    {
        id: 5,
        category: "Relations",
        question: "Quel est votre statut amoureux ?",
        options: [
            "Célibataire",
            "En couple",
            "Marié.e",
            "Divorcé.e",
            "Veuf.ve",
            "Autre"
        ]
    },
    {
        id: 6,
        category: "Religion et spiritualité",
        question: "Quelle place la religion occupe-t-elle pour vous ?",
        options: [
            "Très important",
            "Important",
            "Plutôt important",
            "Pas important du tout"
        ]
    },
    {
        id: 7,
        category: "Religion et spiritualité",
        question: "À quelle religion vous identifiez-vous ?",
        options: [
            "Christianisme",
            "Islam",
            "Judaïsme",
            "Hindouisme",
            "Bouddhisme",
            "Autre",
            "Je préfère ne pas le dire"
        ]
    },
    {
        id: 8,
        category: "Religion et spiritualité",
        question: "Vous considérez-vous comme quelqu'un de spirituel.le ?",
        options: ["Non", "Oui"]
    },
    {
        id: 9,
        category: "Expérience",
        question: "Avez-vous déjà été en thérapie ?",
        options: ["Non", "Oui"]
    },
    {
        id: 10,
        category: "Motivations",
        question: "Pourquoi envisagez-vous de consulter un.e thérapeute aujourd'hui ?",
        options: [
            "Je me sens déprimé.e",
            "Je me sens anxieux.euse ou dépassé.e",
            "Mon humeur a un impact sur mon implication au travail ou à l'école",
            "J'ai du mal à nouer ou maintenir des relations",
            "Je ne trouve pas de but ou de sens à ma vie",
            "J'éprouve du chagrin",
            "J’ai vécu un traumatisme",
            "J'ai besoin de parler d’un problème particulier",
            "Je veux avoir confiance en moi",
            "Je veux m'améliorer, mais je ne sais pas par où commencer",
            "On m'a recommandé de le faire (ami, famille, docteur)",
            "J'explore simplement",
            "autres"
        ]
    },
    {
        id: 11,
        category: "Attentes",
        question: "Qu'attendez-vous de votre thérapeute ? Qu'il.elle soit quelqu'un qui…",
        options: [
            "Écoute",
            "Explore mon passé",
            "M'enseigne de nouvelles compétences",
            "Remette en question mes croyances",
            "Me donne des devoirs à faire à la maison",
            "M'aide à me fixer des objectifs",
            "Me contacte de manière proactive",
            "Autre",
            "Je ne sais pas"
        ]
    },
    {
        id: 12,
        category: "Préférences thérapeute",
        question: "Préférez-vous un.e thérapeute à l'approche douce ou directe ?",
        options: [
            "Douce",
            "Plutôt douce",
            "Pas de préférence",
            "Plutôt direct.e",
            "Direct.e"
        ]
    },
    {
        id: 13,
        category: "Préférences thérapeute",
        question: "Préférez-vous un.e thérapeute flexible ou structuré.e ?",
        options: [
            "Flexible",
            "Plutôt flexible",
            "Pas de préférence",
            "Plutôt structuré.e",
            "Structuré.e"
        ]
    },
    {
        id: 14,
        category: "Préférences thérapeute",
        question: "Préférez-vous un.e thérapeute décontracté.e ou formelle ?",
        options: [
            "Décontracté.e",
            "Plutôt décontracté.e",
            "Pas de préférence",
            "Plutôt formel.le",
            "Formel.le"
        ]
    },
    {
        id: 15,
        category: "Santé",
        question: "Comment évalueriez-vous votre santé physique actuelle ?",
        options: ["Bonne", "Normale", "Mauvaise"]
    },
    {
        id: 16,
        category: "Santé",
        question: "Comment évalueriez-vous vos habitudes alimentaires actuelles ?",
        options: ["Bonne", "Normale", "Mauvaise"]
    },
    {
        id: 17,
        category: "Santé mentale",
        question: "Éprouvez-vous actuellement de la tristesse, du chagrin ou une dépression énorme ?",
        options: ["Non", "Oui"]
    },
    {
        id: 18,
        category: "Santé mentale",
        question: "Au cours des deux dernières semaines, combien de fois avez-vous été affecté.e par l'un des problèmes suivants : Je trouve peu d'intérêt ou de plaisir dans ce que je fais.",
        options: ["Pas du tout", "Pendant plusieurs jours", "Durant pratiquement toute la journée", "Presque tous les jours"]
    },
    {
        id: 19,
        category: "Santé mentale",
        question: "Au cours des deux dernières semaines, combien de fois avez-vous été affecté.e par l'un des problèmes suivants : Vous bougez ou parlez si lentement que les autres s'en rendent compte ? Ou au contraire, êtes-vous si agité.e ou nerveux.euse que vous bougez beaucoup plus que d’habitude ?",
        options: ["Pas du tout", "Pendant plusieurs jours", "Durant pratiquement toute la journée", "Presque tous les jours"]
    },
    {
        id: 20,
        category: "Santé mentale",
        question: "Au cours des deux dernières semaines, combien de fois avez-vous été affecté.e par l'un des problèmes suivants : Je me sens abattu.e, déprimé.e ou désespéré.e.",
        options: ["Pas du tout", "Pendant plusieurs jours", "Durant pratiquement toute la journée", "Presque tous les jours"]
    },
    {
        id: 21,
        category: "Santé mentale",
        question: "Au cours des deux dernières semaines, combien de fois avez-vous été affecté.e par l'un des problèmes suivants : J'ai du mal à m'endormir, à rester endormi.e ou je dors trop.",
        options: ["Pas du tout", "Pendant plusieurs jours", "Durant pratiquement toute la journée", "Presque tous les jours"]
    },
    {
        id: 22,
        category: "Santé mentale",
        question: "Au cours des deux dernières semaines, combien de fois avez-vous été affecté.e par l'un des problèmes suivants : Je me sens fatigué.e ou en manque d'énergie.",
        options: ["Pas du tout", "Pendant plusieurs jours", "Durant pratiquement toute la journée", "Presque tous les jours"]
    },
    {
        id: 23,
        category: "Santé mentale",
        question: "Au cours des deux dernières semaines, combien de fois avez-vous été affecté.e par l'un des problèmes suivants : Je manque d'appétit ou mange trop.",
        options: ["Pas du tout", "Pendant plusieurs jours", "Durant pratiquement toute la journée", "Presque tous les jours"]
    },
    {
        id: 24,
        category: "Santé mentale",
        question: "Au cours des deux dernières semaines, combien de fois avez-vous été affecté.e par l'un des problèmes suivants : Vous sentez mal dans votre peau, avez l'impression d'être un.e raté.e, de vous décevoir ou d'avoir déçu sa famille",
        options: ["Pas du tout", "Pendant plusieurs jours", "Durant pratiquement toute la journée", "Presque tous les jours"]
    },
    {
        id: 25,
        category: "Santé mentale",
        question: "Au cours des deux dernières semaines, combien de fois avez-vous été affecté.e par l'un des problèmes suivants : Vous avez du mal à vous concentrer sur quelque chose, par exemple, lire le journal ou regarder la télévision.",
        options: ["Pas du tout", "Pendant plusieurs jours", "Durant pratiquement toute la journée", "Presque tous les joursc"]
    },
    {
        id: 26,
        category: "Santé mentale",
        question: "Au cours des deux dernières semaines, combien de fois avez-vous été affecté.e par l'un des problèmes suivants : Vous pensez que vous feriez mieux de mourir ou de vous faire du mal d'une façon ou d'une autre.",
        options: ["Pas du tout", "Pendant plusieurs jours", "Durant pratiquement toute la journée", "Presque tous les jours"]
    },
    {
        id: 27,
        category: "Santé mentale",
        question: "Au cours des deux dernières semaines, combien de fois avez-vous été affecté.e par l'un des problèmes suivants : Avec ces problèmes, à quel point est-ce difficile pour vous de faire votre travail, de vous occuper de choses à la maison ou de vous entendre avec les autres ?",
        options: ["Pas difficile du tout", "Un peu difficile", "Très difficile", "Extrêmement difficile"]
    },
    {
        id: 28,
        category: "Vie professionnelle",
        question: "Avez-vous un emploi ?",
        options: ["Non", "Oui"]
    },
    {
        id: 29,
        category: "Intimité",
        question: "Avez-vous des problèmes ou des inquiétudes concernant votre intimité ?",
        options: ["Non", "Oui"]
    },
    {
        id: 30,
        category: "Habitudes",
        question: "À quelle fréquence buvez-vous de l'alcool ?",
        options: ["Jamais", "Rarement", "Tous les mois", "Toutes les semaines", "Tous les jours"]
    },
    {
        id: 31,
        category: "Santé mentale",
        question: "Avez-vous déjà pensé à vous suicider ?",
        options: [
            "Jamais",
            "Il y a plus d'un an",
            "Il y a plus de trois mois",
            "Il y a plus d'un mois",
            "Il y a plus de deux semaines",
            "Au cours des deux dernières semaines"
        ]
    },
    {
        id: 32,
        category: "Santé",
        question: "Souffrez-vous actuellement d’anxiété, de crises de panique ou de phobies ?",
        options: ["Non", "Oui"]
    },
    {
        id: 33,
        category: "Santé",
        question: "Suivez-vous un traitement ?",
        options: ["Non", "Oui"]
    },
    {
        id: 34,
        category: "Santé",
        question: "Souffrez-vous de douleurs chroniques ?",
        options: ["Non", "Oui"]
    },
    {
        id: 35,
        category: "Situation",
        question: "Comment évalueriez-vous votre situation financière actuelle ?",
        options: ["Bonne", "Normale", "Mauvaise"]
    },
    {
        id: 36,
        category: "Habitudes",
        question: "Comment évalueriez-vous vos habitudes de sommeil actuelles ?",
        options: ["Bonne", "Normale", "Mauvaise"]
    },
    {
        id: 37,
        category: "Ressources",
        question: "Lesquelles des ressources suivantes vous seraient utiles ?",
        options: [
            "Groupes de soutien",
            "Journal de thérapie",
            "Feuilles de travail",
            "Suivi d'objectif/d'habitude",
            "Webinaires éducatifs",
            "Autre",
            "Je ne sais pas"
        ]
    },
    {
        id: 38,
        category: "Communication",
        question: "Comment souhaitez-vous communiquer avec votre thérapeute ?",
        options: [
            "Essentiellement par messagerie",
            "Essentiellement par téléphone ou sessions de vidéo",
            "Je déciderai plus tard"
        ]
    },
    {
        id: 39,
        category: "Préférences thérapeute",
        question: "Avez-vous des préférences spécifiques concernant votre thérapeute ?",
        options: [
            "Thérapeute homme",
            "Thérapeute femme",
            "Thérapeute de la communauté LGBTQ+",
            "Thérapeute plus âgé(e) (plus de 45 ans)",
            "Thérapeute laïc(que)"
        ]
    },
    {
        id: 40,
        category: "Situation",
        question: "Veuillez cocher toutes les cases qui s'appliquent à votre situation :",
        options: [
            "Je suis étudiant.e",
            "Je suis un ancien combattant",
            "Je suis porteur.euse de handicap",
            "Je suis demandeur.euse d'emploi",
            "J'ai un emploi mais mes revenus sont faibles"
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
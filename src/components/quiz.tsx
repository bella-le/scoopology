"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]); // Add type here
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Upon being sucked into the ice cream cart, you first:",
      answers: [
        { text: "Take a moment to observe the swirling colors and fantastic ice cream architecture around you", type: "I" },
        { text: "Call out \"Hello! Is there anyone here?\"", type: "E" }
      ]
    },
    {
      question: "A group of sprinkle sprites invites you to join their ice cream social. You:",
      answers: [
        { text: "Jump right in and start mixing toppings with them", type: "E" },
        { text: "Thank them but prefer to watch their sprinkle-making first", type: "I" }
      ]
    },
    {
      question: "You discover a map made of chocolate syrup. You:",
      answers: [
        { text: "Follow it to see where it leads!", type: "S" },
        { text: "Imagine all the possible destinations it could reveal - it could go to anywhere!", type: "N" }
      ]
    },
    {
      question: "A crying chocolate chip cookie approaches you. You:",
      answers: [
        { text: "Surely their parent is around?", type: "T" },
        { text: "Comfort it and make sure they feel OK", type: "F" }
      ]
    },
    {
      question: "The ice cream kingdom's clock is melting! You:",
      answers: [
        { text: "Make a plan to fix it before everything melts. Time to be a hero!", type: "J" },
        { text: "Maybe melting time is more fun anyway", type: "P" }
      ]
    },
    {
      question: "You discover you can create ice cream with your thoughts! You:",
      answers: [
        { text: "Try different flavor combinations! Strawberry and lemon might be yummy...", type: "S" },
        { text: "Let your imagination run wild with impossible flavors. Wasabi?", type: "N" }
      ]
    },
    {
      question: "A sugar cone bird family is building a nest. You think to yourself:",
      answers: [
        { text: "Can their construction hold them up? They seem heavy", type: "T" },
        { text: "How sweet and caring they are with each other!", type: "F" }
      ]
    },
    {
      question: "A vanilla bean fairy appears with a riddle. 'I am sweet but can turn bitter. What am I?' You:",
      answers: [
        { text: "Sugar, of course. It's a chemical balance!", type: "T" },
        { text: "Kindness! Sweetness of the heart!", type: "F" }
      ]
    },
    {
      question: "When meeting the Ice Cream Queen, you:",
      answers: [
        { text: "Compliment her beautifully crafted ice cream castle and detailed designs", type: "S" },
        { text: "Describe how you think her kingdom could grow into a dreamy frozen utopia", type: "N" }
      ]
    },
    {
      question: "The royal ice cream feast is about to begin! You:",
      answers: [
        { text: "Help organize the seating arrangement and menu", type: "J" },
        { text: "Sample different treats as they appear!", type: "P" }
      ]
    },
    {
      question: "You find yourself in a room of dancing ice cream scoops. You:",
      answers: [
        { text: "Join the dance party right away!", type: "E" },
        { text: "Watch the beautiful dance from afar", type: "I" }
      ]
    },
    {
      question: "As the dream starts to fade, you:",
      answers: [
        { text: "Try to capture every detail before it slips away. You want to remember this forever", type: "J" },
        { text: "Let the experience wash over you like melting ice cream", type: "P" }
      ]
    }
  ];

  const calculatePersonality = () => {
    const counts = userAnswers.reduce((acc: { [key: string]: number }, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const personality = [
      counts['E'] > (counts['I'] || 0) ? 'E' : 'I',
      counts['S'] > (counts['N'] || 0) ? 'S' : 'N',
      counts['T'] > (counts['F'] || 0) ? 'T' : 'F',
      counts['J'] > (counts['P'] || 0) ? 'J' : 'P'
    ].join('');

    return personality;
};

  const handleAnswer = (type: string) => {
    const newAnswers = [...userAnswers, type];
    setUserAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-purple-50 py-8 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-purple-800">
            🍦 Scoopology: The Ice Cream Personality Test 🍦
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!showResults ? (
            <div className="space-y-6">
              <p className="text-lg mb-4">
                {currentQuestion === 0 ? 
                  "One warm summer evening, you notice a twinkling ice cream cart on your street. As you approach, a swirl of sparkles surrounds you, and suddenly you're pulled into a magical ice cream wonderland!" 
                  : ""}
              </p>
              <div className="text-lg mb-6">
                {questions[currentQuestion].question}
              </div>
              <div className="space-y-4">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer.type)}
                    className="w-full p-4 text-left rounded-lg bg-white hover:bg-purple-100 border border-purple-200 transition-colors duration-200"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <h2 className="text-xl font-bold mb-4">
                You wake up on the floor, and there in your hand is a perfect scoop of ice cream!
              </h2>
              <div className="mb-6">
                <img 
                  src={`/scoopology/mbti-images/${calculatePersonality()}.png`}
                  alt={`Ice cream personality ${calculatePersonality()}`}
                  className="rounded-lg mx-auto shadow-lg"
                />
              </div>
              <button
                onClick={resetQuiz}
                className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Take the test again
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
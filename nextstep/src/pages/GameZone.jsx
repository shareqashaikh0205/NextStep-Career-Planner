
import { useEffect, useRef, useState } from "react";


const memorySymbols = ["🌟", "🚀", "🎯", "🌈", "🎨", "🎵"];

const wordQuestions = [
  { word: "REACT", hint: "A JavaScript library for building user interfaces" },
  { word: "HTML", hint: "Defines the structure of a web page" },
  { word: "CSS", hint: "Styles the appearance of a web page" },
  { word: "CODE", hint: "Instructions written for a computer" },
  { word: "LOGIC", hint: "Helps you solve problems step by step" }
];

const quizQuestions = [
  {
    question: "Which language is primarily used to style web pages?",
    options: ["HTML", "CSS", "SQL", "Java"],
    answer: "CSS"
  },
  {
    question: "Which React hook can manage local component state?",
    options: ["useState", "useRoute", "usePage", "useStyle"],
    answer: "useState"
  },
  {
    question: "Which HTML element creates a hyperlink?",
    options: ["<p>", "<img>", "<a>", "<h1>"],
    answer: "<a>"
  },
  {
    question: "Which of these is a version control tool?",
    options: ["Git", "Bootstrap", "CSS", "Figma"],
    answer: "Git"
  },
  {
    question: "What does CSS mainly control?",
    options: [
      "Page appearance",
      "Database storage",
      "Server hardware",
      "File downloads only"
    ],
    answer: "Page appearance"
  }
];

function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function createMemoryCards() {
  return shuffle(
    [...memorySymbols, ...memorySymbols].map((symbol, index) => ({
      id: index,
      symbol
    }))
  );
}

function scrambleWord(word) {
  if (word.length < 2) return word;

  let letters = word.split("");
  let scrambled = word;

  while (scrambled === word) {
    letters = shuffle(letters);
    scrambled = letters.join("");
  }

  return scrambled;
}

function GameZone() {
  const [game, setGame] = useState("menu");

  // Memory Match states
  const [memoryCards, setMemoryCards] = useState(createMemoryCards);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matchedCards, setMatchedCards] = useState([]);
  const [memoryMoves, setMemoryMoves] = useState(0);
  const [lockMemory, setLockMemory] = useState(false);
  const [memoryMessage, setMemoryMessage] = useState("");

  // Reaction Rush states
  const [reactionStatus, setReactionStatus] = useState("ready");
  const [reactionStart, setReactionStart] = useState(0);
  const [reactionTime, setReactionTime] = useState(null);
  const [reactionBest, setReactionBest] = useState(null);
  const [reactionMessage, setReactionMessage] = useState("");
  const reactionTimer = useRef(null);

  // Word Scramble states
  const [wordIndex, setWordIndex] = useState(0);
  const [scrambled, setScrambled] = useState(() =>
    scrambleWord(wordQuestions[0].word)
  );
  const [wordAnswer, setWordAnswer] = useState("");
  const [wordScore, setWordScore] = useState(0);
  const [wordMessage, setWordMessage] = useState("");
  const [wordSolved, setWordSolved] = useState(false);

  // Quick Quiz states
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizChoice, setQuizChoice] = useState("");
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // Clean up the timer when the component is removed
  useEffect(() => {
    return () => {
      clearTimeout(reactionTimer.current);
    };
  }, []);

  // ---------------- MEMORY MATCH ----------------

  function resetMemory() {
    setMemoryCards(createMemoryCards());
    setFirstCard(null);
    setSecondCard(null);
    setMatchedCards([]);
    setMemoryMoves(0);
    setLockMemory(false);
    setMemoryMessage("");
  }

  function flipMemoryCard(card) {
    if (
      lockMemory ||
      matchedCards.includes(card.id) ||
      firstCard?.id === card.id
    ) {
      return;
    }

    if (firstCard === null) {
      setFirstCard(card);
      setMemoryMessage("");
      return;
    }

    setSecondCard(card);
    setMemoryMoves((moves) => moves + 1);
    setLockMemory(true);

    if (firstCard.symbol === card.symbol) {
      const newMatched = [...matchedCards, firstCard.id, card.id];

      setMatchedCards(newMatched);
      setFirstCard(null);
      setSecondCard(null);
      setLockMemory(false);

      if (newMatched.length === memoryCards.length) {
        setMemoryMessage("Amazing! You matched every pair! 🎉");
      } else {
        setMemoryMessage("Match found! Great job! 🎉");
      }
    } else {
      setMemoryMessage("Not a match. Try another pair!");

      setTimeout(() => {
        setFirstCard(null);
        setSecondCard(null);
        setLockMemory(false);
      }, 800);
    }
  }

  // ---------------- REACTION RUSH ----------------

  function startReactionTest() {
    clearTimeout(reactionTimer.current);

    setReactionStatus("waiting");
    setReactionTime(null);
    setReactionMessage("Wait for the green signal...");

    const delay = 1500 + Math.random() * 2500;

    reactionTimer.current = setTimeout(() => {
      setReactionStart(Date.now());
      setReactionStatus("go");
      setReactionMessage("CLICK NOW!");
    }, delay);
  }

  function clickReactionArea() {
    if (reactionStatus === "waiting") {
      clearTimeout(reactionTimer.current);
      setReactionStatus("early");
      setReactionMessage("Too early! Wait for the green signal.");
      return;
    }

    if (reactionStatus === "go") {
      const elapsed = Date.now() - reactionStart;

      clearTimeout(reactionTimer.current);
      setReactionTime(elapsed);
      setReactionBest((best) =>
        best === null ? elapsed : Math.min(best, elapsed)
      );
      setReactionStatus("done");
      setReactionMessage(`Your reaction time was ${elapsed} ms.`);
    }
  }

  function resetReaction() {
    clearTimeout(reactionTimer.current);
    setReactionStatus("ready");
    setReactionTime(null);
    setReactionMessage("");
  }

  // ---------------- WORD SCRAMBLE ----------------

  function submitWord(event) {
    event.preventDefault();

    if (wordSolved) return;

    if (
      wordAnswer.trim().toUpperCase() === wordQuestions[wordIndex].word
    ) {
      setWordScore((score) => score + 1);
      setWordSolved(true);
      setWordMessage("Correct! Well done! 🎉");
    } else {
      setWordMessage("Not quite. Try again!");
    }
  }

  function nextWord() {
    const next = (wordIndex + 1) % wordQuestions.length;

    setWordIndex(next);
    setScrambled(scrambleWord(wordQuestions[next].word));
    setWordAnswer("");
    setWordMessage("");
    setWordSolved(false);
  }

  function restartWordGame() {
    setWordIndex(0);
    setScrambled(scrambleWord(wordQuestions[0].word));
    setWordAnswer("");
    setWordScore(0);
    setWordMessage("");
    setWordSolved(false);
  }

  // ---------------- QUICK QUIZ ----------------

  function answerQuiz(option) {
    if (quizAnswered) return;

    setQuizChoice(option);
    setQuizAnswered(true);

    if (option === quizQuestions[quizIndex].answer) {
      setQuizScore((score) => score + 1);
    }
  }

  function nextQuizQuestion() {
    if (quizIndex === quizQuestions.length - 1) {
      setQuizFinished(true);
    } else {
      setQuizIndex((index) => index + 1);
      setQuizChoice("");
      setQuizAnswered(false);
    }
  }

  function restartQuiz() {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizChoice("");
    setQuizAnswered(false);
    setQuizFinished(false);
  }

  // ---------------- NAVIGATION ----------------

  function goToMenu() {
    clearTimeout(reactionTimer.current);
    setGame("menu");
  }

  return (
    <main className="container page-container">
      <section className="game-hero">
        <span className="eyebrow">YOUR PLAY ZONE</span>
        <h1>Take a Break. Challenge Yourself.</h1>
        <p>
          Four mini-games to practise memory, reaction speed, word skills
          and basic technology knowledge.
        </p>
      </section>

      {/* GAME MENU */}
      {game === "menu" && (
        <>
          <div className="game-menu-heading">
            <h2>Choose Your Game</h2>
            <p className="text-secondary">
              Pick a game and try to beat your own score.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <button
                className="game-choice memory-choice"
                onClick={() => {
                  resetMemory();
                  setGame("memory");
                }}
              >
                <span>🧠</span>
                <h3>Memory Match</h3>
                <p>Find matching emoji pairs with as few moves as possible.</p>
                <strong>Play Game →</strong>
              </button>
            </div>

            <div className="col-md-6 col-lg-3">
              <button
                className="game-choice reaction-choice"
                onClick={() => {
                  resetReaction();
                  setGame("reaction");
                }}
              >
                <span>⚡</span>
                <h3>Reaction Rush</h3>
                <p>Wait for the signal and test your reaction time.</p>
                <strong>Play Game →</strong>
              </button>
            </div>

            <div className="col-md-6 col-lg-3">
              <button
                className="game-choice word-choice"
                onClick={() => {
                  restartWordGame();
                  setGame("word");
                }}
              >
                <span>🔤</span>
                <h3>Word Scramble</h3>
                <p>Unscramble words with hints and earn points.</p>
                <strong>Play Game →</strong>
              </button>
            </div>

            <div className="col-md-6 col-lg-3">
              <button
                className="game-choice quiz-choice"
                onClick={() => {
                  restartQuiz();
                  setGame("quiz");
                }}
              >
                <span>🏆</span>
                <h3>Quick Quiz</h3>
                <p>Answer technology questions and test your knowledge.</p>
                <strong>Play Game →</strong>
              </button>
            </div>
          </div>
        </>
      )}

      {/* BACK TO GAME MENU */}
      {game !== "menu" && (
        <div className="game-toolbar">
          <button className="btn btn-outline-secondary" onClick={goToMenu}>
            ← All Games
          </button>
        </div>
      )}

      {/* MEMORY MATCH */}
      {game === "memory" && (
        <section className="game-panel">
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <div>
              <h2>🧠 Memory Match</h2>
              <p className="text-secondary">
                Flip two cards at a time and find all six pairs.
              </p>
            </div>

            <div className="game-score">
              <strong>{memoryMoves}</strong>
              <span>Moves</span>
            </div>
          </div>

          <div className="memory-grid">
            {memoryCards.map((card) => {
              const revealed =
                matchedCards.includes(card.id) ||
                firstCard?.id === card.id ||
                secondCard?.id === card.id;

              return (
                <button
                  key={card.id}
                  className={`memory-card ${revealed ? "revealed" : ""} ${
                    matchedCards.includes(card.id) ? "matched" : ""
                  }`}
                  onClick={() => flipMemoryCard(card)}
                  aria-label={revealed ? card.symbol : "Hidden card"}
                  disabled={lockMemory || matchedCards.includes(card.id)}
                >
                  {revealed ? card.symbol : "?"}
                </button>
              );
            })}
          </div>

          <p className="game-message" aria-live="polite">
            {memoryMessage}
          </p>

          {matchedCards.length === memoryCards.length && (
            <p className="alert alert-success">
              You completed the game in {memoryMoves} moves!
            </p>
          )}

          <button className="btn btn-primary" onClick={resetMemory}>
            Restart Memory Match
          </button>
        </section>
      )}

      {/* REACTION RUSH */}
      {game === "reaction" && (
        <section className="game-panel">
          <h2>⚡ Reaction Rush</h2>
          <p className="text-secondary">
            Click the game area only when it turns green.
          </p>

          <button
            className={`reaction-area ${reactionStatus}`}
            onClick={clickReactionArea}
            disabled={
              reactionStatus === "ready" ||
              reactionStatus === "done" ||
              reactionStatus === "early"
            }
          >
            {reactionStatus === "ready" && "Ready?"}
            {reactionStatus === "waiting" && "Wait..."}
            {reactionStatus === "go" && "CLICK!"}
            {reactionStatus === "done" && `${reactionTime} ms`}
            {reactionStatus === "early" && "Too Early!"}
          </button>

          <p className="game-message" aria-live="polite">
            {reactionMessage}
          </p>

          {reactionBest !== null && (
            <p className="game-stat">
              Best reaction time this session:{" "}
              <strong>{reactionBest} ms</strong>
            </p>
          )}

          {(reactionStatus === "ready" ||
            reactionStatus === "done" ||
            reactionStatus === "early") && (
            <button className="btn btn-primary" onClick={startReactionTest}>
              {reactionStatus === "ready" ? "Start Test" : "Try Again"}
            </button>
          )}
        </section>
      )}

      {/* WORD SCRAMBLE */}
      {game === "word" && (
        <section className="game-panel word-panel">
          <div className="d-flex justify-content-between flex-wrap gap-2">
            <h2>🔤 Word Scramble</h2>

            <div className="game-score">
              <strong>{wordScore}</strong>
              <span>Points</span>
            </div>
          </div>

          <p className="text-secondary">
            Word {wordIndex + 1} of {wordQuestions.length}
          </p>

          <div className="scrambled-word">
            {scrambled.split("").join(" ")}
          </div>

          <p>
            <strong>Hint:</strong> {wordQuestions[wordIndex].hint}
          </p>

          <form onSubmit={submitWord}>
            <label className="form-label" htmlFor="wordAnswer">
              Your Answer
            </label>

            <input
              id="wordAnswer"
              className="form-control form-control-lg"
              value={wordAnswer}
              onChange={(event) => setWordAnswer(event.target.value)}
              placeholder="Type the correct word"
              disabled={wordSolved}
              required
            />

            {!wordSolved && (
              <button className="btn btn-primary mt-3" type="submit">
                Check Answer
              </button>
            )}
          </form>

          <p className="game-message" aria-live="polite">
            {wordMessage}
          </p>

          {wordSolved && (
            <button className="btn btn-success" onClick={nextWord}>
              Next Word →
            </button>
          )}

          {wordSolved && wordIndex === wordQuestions.length - 1 && (
            <p className="small text-secondary mt-3">
              You have completed the word list! Next Word starts a new round.
            </p>
          )}

          <button
            className="btn btn-outline-secondary mt-3 ms-2"
            onClick={restartWordGame}
          >
            Restart
          </button>
        </section>
      )}

      {/* QUICK QUIZ */}
      {game === "quiz" && (
        <section className="game-panel">
          {!quizFinished ? (
            <>
              <div className="d-flex justify-content-between flex-wrap gap-2">
                <h2>🏆 Quick Quiz Challenge</h2>

                <div className="game-score">
                  <strong>{quizScore}</strong>
                  <span>Points</span>
                </div>
              </div>

              <div className="progress my-3">
                <div
                  className="progress-bar"
                  style={{
                    width: `${
                      ((quizIndex + 1) / quizQuestions.length) * 100
                    }%`
                  }}
                />
              </div>

              <p className="text-secondary">
                Question {quizIndex + 1} of {quizQuestions.length}
              </p>

              <h3 className="quiz-question">
                {quizQuestions[quizIndex].question}
              </h3>

              <div className="d-grid gap-3 mt-4">
                {quizQuestions[quizIndex].options.map((option) => {
                  let className = "quiz-option";

                  if (
                    quizAnswered &&
                    option === quizQuestions[quizIndex].answer
                  ) {
                    className += " correct";
                  } else if (quizAnswered && option === quizChoice) {
                    className += " incorrect";
                  }

                  return (
                    <button
                      key={option}
                      className={className}
                      disabled={quizAnswered}
                      onClick={() => answerQuiz(option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {quizAnswered && (
                <div className="mt-4">
                  <p className="game-message">
                    {quizChoice === quizQuestions[quizIndex].answer
                      ? "Correct answer! 🎉"
                      : `Correct answer: ${quizQuestions[quizIndex].answer}`}
                  </p>

                  <button
                    className="btn btn-primary"
                    onClick={nextQuizQuestion}
                  >
                    {quizIndex === quizQuestions.length - 1
                      ? "View Final Score"
                      : "Next Question →"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <div className="quiz-trophy">🏆</div>
              <h2>Quiz Completed!</h2>
              <h3>
                {quizScore} / {quizQuestions.length}
              </h3>

              <p>
                {quizScore === quizQuestions.length
                  ? "Perfect score! Excellent work."
                  : "Good effort! Review the answers and try again."}
              </p>

              <button className="btn btn-primary" onClick={restartQuiz}>
                Play Again
              </button>
            </div>
          )}
        </section>
      )}

      <p className="game-disclaimer">
        These games are for entertainment and learning. Reaction time can be
        affected by your device and browser.
      </p>
    </main>
  );
}

export default GameZone;

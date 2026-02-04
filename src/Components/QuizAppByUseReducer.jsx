import { useEffect, useReducer } from "react";
const questions = [
  {
    question: "What is React?",
    options: ["Framework", "Library", "Language", "Database"],
    correctAnswer: "Library",
  },
  {
    question: "Which hook handles complex state?",
    options: ["useState", "useReducer", "useEffect", "useMemo"],
    correctAnswer: "useReducer",
  },
  {
    question: "React is mainly used for?",
    options: ["Styling", "Backend", "UI Development", "Testing"],
    correctAnswer: "UI Development",
  },
];

const EXAM_DURATION = 60;

const initialState = {
  currentQuestion: 0,
  score: 0,
  startTime: null,
  elapsedSeconds: 0,
  examEnded: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "START_EXAM":
      return {
        ...state,
        startTime: Date.now(),
      };

    case "TICK":
      return {
        ...state,
        elapsedSeconds: action.payload,
      };

    case "ANSWER_CORRECT":
      return {
        ...state,
        score: state.score + 1,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

    case "END_EXAM":
      return {
        ...state,
        examEnded: true,
      };

    case "RESTART":
      return initialState;

    default:
      return state;
  }
};

const QuizAppByUseReducer = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentQuestion, score, startTime, elapsedSeconds, examEnded } =
    state;

  useEffect(() => {
    if (!startTime || examEnded) return;

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);

      if (elapsed >= EXAM_DURATION) {
        dispatch({ type: "TICK", payload: EXAM_DURATION });
        dispatch({ type: "END_EXAM" });
        clearInterval(interval);
      } else {
        dispatch({ type: "TICK", payload: elapsed });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, examEnded]);

  const handleAnswer = (option) => {
    if (examEnded) return;

    if (option === questions[currentQuestion].correctAnswer) {
      dispatch({ type: "ANSWER_CORRECT" });
    }

    if (currentQuestion === questions.length - 1) {
      dispatch({ type: "END_EXAM" });
    }
    dispatch({ type: "NEXT_QUESTION" });
  };

  if (examEnded) {
    return (
      <div style={styles.container}>
        <h2>Exam Ended ⏱️</h2>
        <h3>
          Final Score: {score} / {questions.length}
        </h3>
        <p>Total Time Taken: {elapsedSeconds}s</p>
        <button
          onClick={() => dispatch({ type: "RESTART" })}
          style={{
            border: "5px solid #f13ae5",
            backgroundColor: "#f13ae5",
            borderRadius: "5px",
          }}
        >
          Restart Exam
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button
        onClick={() => dispatch({ type: "START_EXAM" })}
        style={{
          border: "5px solid #55d5e9",
          borderRadius: "5px",
          backgroundColor: "#4ed4e9",
        }}
      >
        Start Exam
      </button>
      <h2>
        Question {currentQuestion + 1} / {questions.length}
      </h2>

      <p>
        ⏱️ Time Elapsed: {elapsedSeconds}s / {EXAM_DURATION}s
      </p>

      <h3>{questions[currentQuestion].question}</h3>

      {questions[currentQuestion].options.map((option) => (
        <button
          key={option}
          style={styles.optionBtn}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #0c0d0d",
    borderRadius: "8px",
  },
  optionBtn: {
    width: "90%",
    padding: "10px",
    margin: "8px 0",
    backgroundColor: "#f0d660",
    border: "1px solid #f7db3c",
    borderRadius: "5px",
  },
};

export default QuizAppByUseReducer;

const questions = [
  "世の中食べ物全てチーズかチーズの入った食べ物しかないと思いますか？",
  "チーズを食べないと気分が沈んでしまいますか？",
  "仕事や学業など、日常生活に支障が出るほどチーズを食べたいと思いますか？",
  "チーズを食べることで一時的に幸せな気分になりますか？",
  "チーズを食べ過ぎることで健康に悪影響があると分かっていても止められないですか？"
];

const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const resultsDiv = document.getElementById("results");
const rateMeter = document.getElementById("rate-meter");
const resultText = document.getElementById("result-text");
const resultImage = document.getElementById("result-image");

let currentQuestionIndex = 0;
let yesCount = 0;
let question; 


startButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    if (question) {
      questionContainer.removeChild(question);
    }
    question = showQuestion(); // ここで question への代入を追加
    currentQuestionIndex++;
  }
});

function showQuestion() {
  const newQuestion = document.createElement("div");
  newQuestion.textContent = questions[currentQuestionIndex];
  questionContainer.appendChild(newQuestion);
  return newQuestion;
}







  // let startX = 0;
  // let endX = 0;
  
//   // スワイプ開始時の座標を記録
//   question.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX;
//   });
  
//   // スワイプ中の座標を更新
//   question.addEventListener('touchmove', (e) => {
//     endX = e.touches[0].clientX;
//   });
  
//   // スワイプ終了時に方向を判定
//   question.addEventListener('touchend', () => {
//     const swipeDistance = endX - startX;
//     const swipeThreshold = 50; // スワイプとして認識する閾値
  
//     if (swipeDistance > swipeThreshold) {
//       onSwipeComplete('right'); // 右にスワイプ
//     } else if (swipeDistance < -swipeThreshold) {
//       onSwipeComplete('left'); // 左にスワイプ
//     }
//   });

//   // スワイプ完了時に呼び出される関数
// function onSwipeComplete(swipeDirection) {
//   if (swipeDirection === 'left') {
//     card.classList.add('swipe-left');
//   } else if (swipeDirection === 'right') {
//     card.classList.add('swipe-right');
//   }

//   // アニメーションが完了した後、次の質問を表示するなどの処理を追加できます。
//   setTimeout(() => {
//     card.classList.remove('swipe-left', 'swipe-right');
//     questionContainer.removeChild(question);
//     currentQuestionIndex++;
//     showNextQuestion();
//   }, 500); // アニメーションの期間を500ミリ秒に設定
// }

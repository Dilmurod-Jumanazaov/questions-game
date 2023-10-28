const elQuestionText = document.querySelector(".js-question-text");
const elInput = document.querySelector(".js-input");
const elTableWrapper = document.querySelector(".hero__table-wrapper");
const elTable = document.querySelector(".js-table");
const elTableHeader = document.querySelector(".js-table-header");
const elTableBody = document.querySelector(".js-table-body");
const questionsArr = [
  {
    question: "Java Script dasturlash tilining dastlabki nomi?",
    correct_answer: "Live Script",
    user_answer: "",
  },
  {
    question: "Function qaysi data tipga kiradi?",
    correct_answer: "Reference type",
    user_answer: "",
  },
  {
    question: "Stringdagi .includes() metodi nechta parametr oladi va qanaqa tipda?",
    correct_answer: "2 ta parametr, 1-string, 2-number(index)",
    user_answer: "",
  },
  {
    question: ".concat() metodi nimani metodi hisoblanadi?",
    correct_answer: "string, array",
    user_answer: "",
  },
  {
    question: "Java Scriptda nechta variable bor va qaysilarini redeclered qilib bo'lmaydi?",
    correct_answer: "3 ta, let, const",
    user_answer: "",
  },
  {
    question: "cosole.log(typeof, null); savol consolega nima chiqadi?",
    correct_answer: "SyntaxError",
    user_answer: "",
  },
  {
    question: "?. bu nima? Va nomini toping.",
    correct_answer: "constructor, Optional chaining",
    user_answer: "",
  },
  {
    question: "console.log(typeof true,false); consolega nima chiqadi?",
    correct_answer: "boolean, false",
    user_answer: "",
  },
  {
    question: "Java Scriptda nechta data type bor?",
    correct_answer: "8 ta",
    user_answer: "",
  },
  {
    question: "console.log(nima chiqadi); savol consolega nima chiqadi?",
    correct_answer: "SytaxError",
    user_answer: "",
  }
];

function renderTable(array,node) {
  node.innerHTML = "";
  array.forEach(element => {

    const tableBodyRow = document.createElement("tr");
    const tableDescQuestion = document.createElement("td");
    const tableDescCorrectAnswer = document.createElement("td");
    const tableDescUserAnswer = document.createElement("td");
    
    tableBodyRow.classList.add("hero__table-body-row");
    tableDescQuestion.classList.add("hero__table-desc");
    tableDescCorrectAnswer.classList.add("hero__table-desc");
    tableDescUserAnswer.classList.add("hero__table-desc");
    
    tableDescQuestion.textContent = element.question;
    tableDescCorrectAnswer.textContent = element.correct_answer;
    tableDescUserAnswer.textContent = element.user_answer;
    
    tableBodyRow.append(tableDescQuestion,tableDescCorrectAnswer,tableDescUserAnswer);

    elTableBody.append(tableBodyRow);
  });
  elTable.append(elTableHeader,elTableBody);
};

function* generator(array) {
  for(let i = 0; i < array.length; i++) {
    let questionTextResult = elQuestionText.textContent = array[i].question;
    array[i].user_answer = yield questionTextResult;
  };   
};

const genFunc = generator(questionsArr);
genFunc.next();

// function questionWrite() {
//   let typed = new Typed('.typed', {
//     stringsElement: '.typed-strings',
//     typeSpeed: 40,
//     backSpeed: 10,
//     loop: true,
//     loopCount: 1,
//     showCursor: false,
//   });
// }
// questionWrite(); // birinchi bu yozyabdi

elInput.addEventListener("keyup", (evt) => {
  const enterKeyCode = "13";
  if(enterKeyCode == evt.keyCode) {
    const inputValue = evt.target.value;
    // questionWrite(); // ikkinchi bu yozyabdi
    if(genFunc.next(inputValue).done == true) {
      alert("GAME OVER");
      elQuestionText.textContent = questionsArr[0].question;
      elTableWrapper.style.display = "block";
      renderTable(questionsArr,elTable);
      if(enterKeyCode == evt.keyCode) {
        elTableWrapper.style.display = "none";
        elQuestionText.textContent = questionsArr[0].question;
      }
    }
    elInput.value = "";
  }
});

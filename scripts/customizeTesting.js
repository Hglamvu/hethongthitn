// Hàm thêm câu hỏi
function addQuestion() {
    var questionsContainer = document.getElementById('questionsContainer');

    var questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    var questionLabel = document.createElement('label');
    questionLabel.textContent = 'Câu hỏi:';
    var questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.classList.add('question-text');
    questionLabel.appendChild(questionInput);

    var answersDiv = document.createElement('div');
    answersDiv.classList.add('answers');

    for (var i = 1; i <= 4; i++) {
        var answerLabel = document.createElement('label');
        answerLabel.textContent = 'Đáp án ' + i + ':';
        var answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.classList.add('answer-text');
        answerLabel.appendChild(answerInput);
        answersDiv.appendChild(answerLabel);
    }

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa câu hỏi';
    deleteButton.onclick = function() {
        questionsContainer.removeChild(questionDiv);
    };

    questionDiv.appendChild(questionLabel);
    questionDiv.appendChild(answersDiv);
    questionDiv.appendChild(deleteButton);

    questionsContainer.appendChild(questionDiv);
}

// Thêm sự kiện thêm câu hỏi cho nút "Thêm câu hỏi"
document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form submission để xử lý thông qua JavaScript

    // Lấy dữ liệu từ form
    var examName = document.getElementById('examName').value;
    var description = document.getElementById('description').value;
    var examType = document.getElementById('examType').value;
    var questionsData = [];

    var questions = document.querySelectorAll('.question');
    questions.forEach(function(question) {
        var questionText = question.querySelector('.question-text').value;
        var answers = [];
        var answerInputs = question.querySelectorAll('.answer-text');
        answerInputs.forEach(function(answerInput) {
            answers.push(answerInput.value);
        });
        questionsData.push({ question: questionText, answers: answers });
    });

    // Xử lý dữ liệu ở đây (ví dụ: gửi dữ liệu đến máy chủ, lưu vào cơ sở dữ liệu, v.v.)
    console.log("Tên kỳ thi:", examName);
    console.log("Mô tả:", description);
    console.log("Loại kỳ thi:", examType);
    console.log("Danh sách câu hỏi:", questionsData);
});

document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form submission để xử lý thông qua JavaScript

    // Lấy dữ liệu từ form
    var examName = document.getElementById('examName').value;
    var description = document.getElementById('description').value;
    var examType = document.getElementById('examType').value;
    var questionsData = [];

    // Xử lý dữ liệu ở đây (ví dụ: gửi dữ liệu đến máy chủ, lưu vào cơ sở dữ liệu, v.v.)

    // Hiển thị thông tin đề thi
    document.getElementById('examNamePreview').textContent = "Tên kỳ thi: " + examName;
    document.getElementById('descriptionPreview').textContent = "Mô tả: " + description;
    document.getElementById('examTypePreview').textContent = "Loại kỳ thi: " + examType;

    // Hiển thị danh sách câu hỏi
    var questionsPreview = document.getElementById('questionsPreview');
    questionsPreview.innerHTML = ""; // Xóa nội dung hiện tại của phần tử

    questionsData.forEach(function(questionData) {
        var questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        var questionText = document.createElement('p');
        questionText.textContent = "Câu hỏi: " + questionData.question;

        var answersText = document.createElement('p');
        answersText.textContent = "Đáp án: " + questionData.answers.join(", ");

        questionDiv.appendChild(questionText);
        questionDiv.appendChild(answersText);

        questionsPreview.appendChild(questionDiv);
    });

    // Hiển thị phần tử "examPreview"
    document.getElementById('examPreview').style.display = 'block';
});

document.getElementById('importButton').addEventListener('click', function() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
  
    fileInput.addEventListener('change', function(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
  
      reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });
  
        // Xử lý dữ liệu từ file Excel ở đây
        // Ví dụ: lấy dữ liệu từ sheet đầu tiên
        var worksheet = workbook.Sheets[workbook.SheetNames[0]];
        var jsonData = XLSX.utils.sheet_to_json(worksheet);
  
        // Xử lý dữ liệu jsonData ở đây (ví dụ: lưu vào cơ sở dữ liệu, hiển thị lên giao diện, v.v.)
      };
  
      reader.readAsArrayBuffer(file);
    });
  
    fileInput.click();
  });

  function otherPages() {
    document.getElementById('js-stats-page').addEventListener('click', () => {
      window.location = "http://127.0.0.1:5500/trangthongke.html#";
    });
    
    document.getElementById('js-dashboard-page').addEventListener('click', () => {
      window.location = "http://127.0.0.1:5500/dashboard.html";
    });
    
    document.getElementById('js-results-page').addEventListener('click', () => {
      window.location = "http://127.0.0.1:5500/trangxemketquasinhvien.html";
    });
  }

  function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }

   function validateLogin() {
    window.location = "http://127.0.0.1:5500/userlogin.html";
  }
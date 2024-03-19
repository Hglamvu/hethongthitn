const exams = [
    { name: "Luyện tập-Truy cập tự do", status: "free" },
    { name: "Giữa kỳ-Yêu cầu thời gian cụ thể", status: "scheduled" },
    { name: "Cuối kỳ-Yêu cầu thơi gian cụ thể", status: "scheduled" },
    { name: "Luyện tập tháng 7-Truy cập tự do", status: "free" }
  ];
  
  const examList = document.getElementById('examList');
  const searchInput = document.getElementById('searchInput');
  const statusFilter = document.getElementById('statusFilter');
  
  function renderExams() {
    examList.innerHTML = '';
    const searchText = searchInput.value.toLowerCase();
    const filterStatus = statusFilter.value;
  
    exams.forEach(exam => {
      if ((exam.name.toLowerCase().includes(searchText) || searchText === '') && 
          (filterStatus === 'all' || exam.status === filterStatus)) {
        const li = document.createElement('li');
        li.textContent = exam.name;
        examList.appendChild(li);
        li.addEventListener('click', () => {
          // Xử lý khi người dùng chọn bài thi
          alert(`Bạn đã chọn bài thi: ${exam.name}`);
          window.location = "baithi1.html";
        });
      }
    });
  }
  
  searchInput.addEventListener('input', renderExams);
  statusFilter.addEventListener('change', renderExams);
  
  // Ban đầu, render danh sách kỳ thi
  renderExams();

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

  function otherPages() {
    document.getElementById('js-testing-page').addEventListener('click', () => {
      window.location = "http://127.0.0.1:5500/baithi1.html";
    });
  }
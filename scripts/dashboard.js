const testingList = [{
  name: 'Thi giữa kỳ',
  dueDate: '2024-04-22'
}, {
  name: 'Thi cuối kỳ',
  dueDate: '2024-06-22'
}];

renderTestingList();

function renderTestingList() {
  let testingListHTML = '';

  for (let i = 0; i < testingList.length; i++) {
    const testingObject = testingList[i];
    const { name, dueDate } = testingObject;
    //const name = testingObject.name;
    //const dueDate = testingObject.dueDate;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        testingList.splice(${i}, 1);
        renderTestingList();
      " class="delete-testing-button">Xóa</button> 
      <button onclick="
      editTesting(${i});
    " class="edit-testing-button">Chỉnh sửa</button>
    `;
    testingListHTML += html;
  }

  document.querySelector('.js-testing-list')
    .innerHTML = testingListHTML;
}

function addTesting() {
  const inputElement = document.querySelector('.js-testing-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (!name || !dueDate) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return; 
  }

  testingList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTestingList(); 
}

const userList = [{
  username: 'nguyenbaduong0906',
  nameTesting: 'Thi cuối kì',
  score: '4.5',
  dob: '2003-06-09'
}, {
  username: 'nguyenduc1505',
  nameTesting: 'Thi cuối kì',
  score: '9.5',
  dob: '2003-05-15'
}, {
  username: 'hoangluonvuituoi',
  nameTesting: 'Thi cuối kì',
  score: '0',
  dob: '2003-10-05'
}, {
  username: 'ddminh3004',
  nameTesting: 'Thi cuối kì',
  score: '8',
  dob: '2003-04-30'
}];

renderUserList();

function renderUserList() {
  let userListHTML = '';

  for (let i = 0; i < userList.length; i++) {
    const userObject = userList[i];
    const { username, nameTesting, score, dob } = userObject;
    const html = `
      <div>${username}</div>
      <div>${nameTesting}</div>
      <div>${score}</div>
      <div>${dob}</div>
      <button onclick="
        userList.splice(${i}, 1);
        renderUserList();
      " class="delete-user-button">Xóa</button> 
      <button onclick="
        editUser(${i});
      " class="customize-user-button">Chỉnh sửa</button> 
    `;
    userListHTML += html;
  }

  document.querySelector('.js-user-list')
    .innerHTML = userListHTML;
}

function addUser() {
  const nameInputElement = document.querySelector('.js-username-input');
  const username = nameInputElement.value;

  const testingInputElement = document.querySelector('.js-nameTesting-input');
  const nameTesting = testingInputElement.value;

  const scoreInputElement = document.querySelector('.js-score-input');
  const score = scoreInputElement.value;

  const dobInputElement = document.querySelector('.js-dob-input');
  const dob = dobInputElement.value;

  if (!username || !nameTesting || !score || !dob) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return; // Dừng hàm nếu thông tin không hợp lệ
  }

  userList.push({
    username,
    nameTesting,
    score,
    dob
  });

  nameInputElement.value = '';
  testingInputElement.value = '';
  scoreInputElement.value = '';
  dobInputElement.value = '';

  renderUserList();
}

function editTesting(index) {
  const testingObject = testingList[index];
  const nameInputElement = document.querySelector('.js-testing-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');

  nameInputElement.value = testingObject.name;
  dateInputElement.value = testingObject.dueDate;

  // Xóa phần tử cũ
  testingList.splice(index, 1);
  renderTestingList();
}

function editUser(index) {
  const userObject = userList[index];
  const nameInputElement = document.querySelector('.js-username-input');
  const testingInputElement = document.querySelector('.js-nameTesting-input');
  const scoreInputElement = document.querySelector('.js-score-input');
  const dobInputElement = document.querySelector('.js-dob-input');

  nameInputElement.value = userObject.username;
  testingInputElement.value = userObject.nameTesting;
  scoreInputElement.value = userObject.score;
  dobInputElement.value = userObject.dob;

  // Xóa phần tử cũ
  userList.splice(index, 1);
  renderUserList();
}

function myMenuFunction() {
  var i = document.getElementById("navMenu");
  if(i.className === "nav-menu") {
      i.className += " responsive";
  } else {
      i.className = "nav-menu";
  }
 }

 function otherPages() {
  document.getElementById('js-stats-page').addEventListener('click', () => {
    window.location = "http://127.0.0.1:5500/trangthongke.html#";
  });
  
  document.getElementById('js-customize-page').addEventListener('click', () => {
    window.location = "http://127.0.0.1:5500/customizeTesting.html";
  });
  
  document.getElementById('js-results-page').addEventListener('click', () => {
    window.location = "http://127.0.0.1:5500/trangxemketquasinhvien.html";
  });
}

function validateLogin() {
  window.location = "userlogin.html";
}

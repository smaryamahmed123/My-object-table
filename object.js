var politician1 = {
    firstName: "Asif",
    lastName: "Zardari",
    age: 91,
    id: Math.random(),
  };
  
  var politician2 = {
    firstName: "Maryam",
    lastName: "Nawaz",
    age: 22,
    id: Math.random(),
  };
  
  var politician3 = {
    firstName: "Nawaz",
    lastName: "Shareef",
    age: 99,
    id: Math.random(),
  };
  
  var politician4 = {
    firstName: "Shehbaz",
    lastName: "Shareef",
    age: 56,
    id: Math.random(),
  };
  
  var politician5 = {
    firstName: "Imran",
    lastName: "Khan",
    age: 23,
    id: Math.random(),
  };

  var politician6 = {
    firstName: "Murad",
    lastName: "Ali Shah",
    age: 23,
    id: Math.random(),
  }
  
  var tbody = document.getElementById("a");
  var studentCount = document.getElementById("studentCount");
  var studentsList = [politician1, politician2, politician3, politician4, politician5,politician6];
  
  function render() {
    tbody.innerHTML = "";
    studentCount.textContent = studentsList.length;
    for (var i = 0; i < studentsList.length; i++) {
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${i + 1}</td>
        <td>${studentsList[i].firstName}</td>
        <td>${studentsList[i].lastName}</td>
        <td>${studentsList[i].age}</td>
        <td>${studentsList[i].id}</td>`;
      tbody.appendChild(row);
    }
  }
  
  render();


  
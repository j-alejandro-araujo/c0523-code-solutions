const business = {
  opens: '8AM',
  closes: '4PM',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    Frodo: {
      position: 'Groundskeeper',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F'],
    },
    Sam: {
      position: 'Gardener',
      daysOfWeekWorking: ['M', 'F'],
    },
    Treebeard: {
      position: 'Floral Manager',
      daysOfWeekWorking: ['M', 'W'],
    },
    Gandalf: {
      position: 'Wizard',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
  },
};

document.addEventListener('DOMContentLoaded', function () {
  addWeekendsToEmployees();
  setFullTime();
  addNewEmployees();
  deleteEmployee('Sam');
});

function addWeekendsToEmployees() {
  for (const key in business.employees) {
    const employee = business.employees[key];
    employee.daysOfWeekWorking.push('S', 'Sun');
  }
}

function setFullTime() {
  for (const key in business.employees) {
    const employee = business.employees[key];
    const isFullTime = employee.daysOfWeekWorking.length > 5;
    employee.fullTime = isFullTime;
  }
}

function addNewEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';

  function randomWorkdays() {
    const weekdays = ['M', 'T', 'W', 'Th', 'F'];
    const numWorkdays = Math.floor(Math.random() * 5) + 1;
    const workdays = [];

    for (let i = 0; i < numWorkdays; i++) {
      const randomIndex = Math.floor(Math.random() * weekdays.length);
      const workday = weekdays[randomIndex];
      workdays.push(workday);
    }

    return workdays;
  }

  function jobTitles() {
    const jobTitles = [
      'Tree Trimmer',
      'Weed Cutter',
      'Greenhouse Worker',
      'Gardener',
      'Assassin',
      'Alchemist',
      'Chef',
      'Artist',
    ];
    const randomIndex = Math.floor(Math.random() * jobTitles.length);
    return jobTitles[randomIndex];
  }

  xhr.onload = function () {
    if (xhr.status === 200) {
      const employeesToAdd = xhr.response.slice(0, 4);

      for (let i = 0; i < employeesToAdd.length; i++) {
        const employee = employeesToAdd[i];
        const jobTitle = jobTitles();
        const workdays = randomWorkdays();

        workdays.push('S', 'Sun');

        const isFullTime = workdays.length > 5;

        const newEmployee = {
          position: jobTitle,
          daysOfWeekWorking: workdays,
          fullTime: isFullTime,
        };

        business.employees[employee.name] = newEmployee;
      }

      business.totalEmployees += employeesToAdd.length;
    } else {
      console.error('Error:', xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error('Error:', xhr.status);
  };

  xhr.send();
}

function deleteEmployee(employeeName) {
  if (business.employees[employeeName]) {
    delete business.employees[employeeName];
    business.totalEmployees--;
  }
}

console.log(business);

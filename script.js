// document.querySelector('#loginForm').addEventListener('submit', function(e) {
//     var username = document.querySelector('#username').value;
//     var password = document.querySelector('#password').value;
    
//     if (!username || !password) {
//       alert('Masukkan username dan password!');
//       e.preventDefault();
//     }
//   });

function toggleDivs(value) {
  // const radio1 = document.getElementById('tab-1');
  // const radio2 = document.getElementById('tab-2');
  // const radio3 = document.getElementById('tab-3');
  // const radio4 = document.getElementById('tab-4');
  // const radio5 = document.getElementById('tab-5');

  // alert("sukses");
  hideTabs();
  showTabs(value);
  // if (radio1.checked) {
  //     hideTabs();
  //     showTabs('1');
  // } 
  // if (radio2.checked) {
  //   hideTabs();
  //   showTabs('2');
  // } 
  // if (radio3.checked) {
  //   hideTabs();
  //   showTabs('3');
  // } 
  // if (radio4.checked) {
  //   hideTabs();
  //   showTabs('4');
  // } 
  // if (radio5.checked) {
  //   hideTabs();
  //   showTabs('5');
  // } 
}

//   document.addEventListener('DOMContentLoaded', function () {
//     const togglePassword = document.querySelector('.toggle-password');
//     const passwordField = document.getElementById('password');

//     togglePassword.addEventListener('click', function () {
//         const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
//         passwordField.setAttribute('type', type);
//         this.classList.toggle('fa-eye');
//         this.classList.toggle('fa-eye-slash');
//     });
// });


    document.getElementById("regis").onclick = function () {
        location.href = "pendaftaran.html";
    };

window.onload = function() {
  hideTabs();
  showTabs('1');
};

    function openCity(evt, cityName) {
        // Declare all variables
        var i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

  
      function hideTabs() {
        const allDivs = document.querySelectorAll('div');
            allDivs.forEach(div => {
                const classList = Array.from(div.classList);
                if (classList.some(className => className.startsWith('tb'))) {
                    div.classList.add('hidden');
                }
            });
    }

    function showTabs(tab) {
      const allDivs = document.querySelectorAll('div');
            allDivs.forEach(div => {
                const classList = Array.from(div.classList);
                if (classList.some(className => className.startsWith('tb'+tab))) {
                    div.classList.remove('hidden');
                }
            });
  }

function openForm()
 {
  document.getElementById('abc').style.display = "block";
  }

function openEditForm() {
  document.getElementById('abcd').style.display = "block";
  }
    //Function to Hide Popup
function closeForm(){
document.getElementById('abc').style.display = "none";
}

function openQuestionsForm() {
  document.getElementById('def').style.display = "block";
  }

function closeQuestionsForm(){
  document.getElementById('def').style.display = "none";
  }

function openAnswersForm() {
  document.getElementById('answer-f').style.display = "block";
  }

function closeAnswersForm(){
  document.getElementById('answer-f').style.display = "none";
  }

var input = document.getElementById("cinpdata");

input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    document.getElementById("myBtn").click();
  }
});

function opencommets(id){
  // console.log(id);
  document.getElementById(id).style.display = "block";
} 


function editComments(e,a){
  const data=document.getElementsByClassName(e)[0].innerText;
  // console.log(data);
  document.getElementsByClassName(a)[0].value=data;
  // console.log(a);
  document.getElementById(e).remove();
}

function showall(){
  document.getElementById("other-questions").style.height="100%";
  document.querySelector('.answer-right').style.height='auto';
  document.getElementById("other-questions").style.overflow="visible";
}

function hideQuestion(ei){
 document.getElementById(ei).style.display="none";
}


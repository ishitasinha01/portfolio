function myFunction() {
  // let data = "";  let name = document.getElementById("userName").value
  // let email = document.getElementById("userEmail").value
  let comment = document.getElementById("userComment").value;

  data = "You commented : " + comment;

  document.getElementById("data").innerHTML = data; // display data to paragraph
}

const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
  }
};

// SingIn
const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  // Authenticate the User
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    // clear the form
    signInForm.reset();
    // close the modal
    $("#signinModal").modal("hide");
  });
});

// Login with Google
const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInForm.reset();
  $("#signinModal").modal("hide");

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log(result.user.displayName);
    document.querySelector(".Usuario").innerHTML = result.user.displayName;
    document.querySelector("#inicio_sesion").innerHTML = "";
    document.querySelector("#inicio_sesion").style = "display:none";
    document.querySelector("#cerrar_sesion").innerHTML = "Cerrar Sesión";
    document.querySelector("#cerrar_sesion").style = "margin-left: 20rem; display:inline-block";
    
    console.log("google sign in");
  })
  .catch(err => {
    console.log(err);
  })
});

const logout = document.querySelector("#cerrar_sesion");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    document.querySelector(".Usuario").innerHTML = "Invitado";
    document.querySelector("#inicio_sesion").innerHTML = "Iniciar Sesión";
    document.querySelector("#inicio_sesion").style = "margin-left: 20rem; visibility:visible";
    document.querySelector("#cerrar_sesion").innerHTML = "";
    document.querySelector("#cerrar_sesion").style = "margin-left: 0rem; visibility:hidden";
    console.log("signup out");
  });
});
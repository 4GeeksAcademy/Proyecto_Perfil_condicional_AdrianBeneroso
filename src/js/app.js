import "../style/index.css";
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let newName = !variables.name ? "Name" : variables.name;
  let newLastName = !variables.lastName ? "Last name" : variables.lastName; // reset the website body with the new html output
  let newRole = !variables.role ? "role" : variables.role;
  let newCity = !variables.city ? "city" : variables.city;
  let newCountry = !variables.country ? "Country" : variables.country;
  let newTwitter = !variables.twitter
    ? "https://x.com/?lang=es"
    : variables.twitter;
  let newGitHub = !variables.github ? "https://github.com/" : variables.github;
  let newLinkedin = !variables.linkedin
    ? "https://linkedin.com/school/4geeksacademy"
    : variables.linkedin;
  let newInstagram = !variables.instagram
    ? "https://www.instagram.com/"
    : variables.instagram;

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${newName} ${newLastName}</h1>
          <h2>${newRole}</h2>
          <h3>${newCity}, ${newCountry}</h3>
          <ul class="${
            variables.socialMediaPosition === "position-right"
              ? "position-right"
              : "position-left"
          }">
            <li><a href="${newTwitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${newGitHub}"><i class="fab fa-github"></i></a></li>
            <li><a href="${newLinkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${newInstagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}
/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};

// Create an object to store the login credentials
const info = {
  user1: "Alex",
  password1: "admin",
  user2: "AlexL",
  password2: "admin",
};

const projectList = [
  {
    name: "Project 1",
    link: "#",
  },
  { name: "Project 2", link: "#" },
  { name: "Project 3", link: "#" },
];

export { projectList };

// Function to handle the login
export function credentials(username, password) {
  if (info.user1 === username && info.password1 === password) {
    return true; // Log to user1 db
  } else if (info.user2 === username && info.password2 === password) {
    return true; // log to user2 db
  } else {
    return false; // Login failed
  }
}

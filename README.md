# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Product Images

Here are my Calendar App images:

<!-- Small Images with Full View -->
<div>
  <img src="https://i.ibb.co/F3bnpsB/Appointment-Dark-JPG.jpg" alt="Appointment Dark" style="max-width: 200px; cursor: pointer;" onclick="openModal('https://i.ibb.co/F3bnpsB/Appointment-Dark-JPG.jpg')">
  <img src="https://i.ibb.co/Zhc3NKr/Appointment.jpg" alt="Appointment" style="max-width: 200px; cursor: pointer;" onclick="openModal('https://i.ibb.co/Zhc3NKr/Appointment.jpg')">
  <img src="https://i.ibb.co/hm7BbSR/Sign-In-Dark-JPG.jpg" alt="Sign In Dark" style="max-width: 200px; cursor: pointer;" onclick="openModal('https://i.ibb.co/hm7BbSR/Sign-In-Dark-JPG.jpg')">
  <img src="https://i.ibb.co/SRF0FTS/Sign-In.jpg" alt="Sign In" style="max-width: 200px; cursor: pointer;" onclick="openModal('https://i.ibb.co/SRF0FTS/Sign-In.jpg')">
</div>

<!-- Modal for Full Size View -->
<div id="myModal" class="modal">
  <span class="close" onclick="closeModal()">&times;</span>
  <img class="modal-content" id="img01">
</div>

<script>
// Function to open the modal with full size image
function openModal(imageUrl) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imageUrl;
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
</script>

## Available Scripts

In the project directory, you can run:

### Running JSON Server

To run the JSON Server for your mock API, open terminal and run:

### `json-server --watch db.json --port 3000`

Next, open another terminal and run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000 or http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

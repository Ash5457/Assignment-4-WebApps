# 3420 Assignment #4 - Fall 2023

Name(s): Akash Bahl (0470368) Farzad Imran (0729901)

Live Loki link(s): <https://loki.trentu.ca/~demiimran/3420/assn/assn4/>

## Rubric

| Component                                                    | Grade |
| :----------------------------------------------------------- | ----: |
| Edit List Validation                                         |    /4 |
| Register Validation                                          |    /4 |
| Delete confirmation                                          |    /3 |
| Details modal                                                |    /5 |
|                                                              |       |
| Copy Public Link to Clipboard *                              |    /3 |
| Unique Username                                              |    /3 |
| Password Strength                                            |    /3 |
| Show Password *                                              |    /3 |
| Limiting Description Field *                                 |    /3 |
| Star Rating                                                  |    /3 |
|                                                              |       |
| Code Quality (tidyness, validity, efficiency, etc)           |    /4 |
| Documentation                                                |    /3 |
| Testing                                                      |    /3 |
|                                                              |       |
| Bonus                                                        |  /3.5 |
| Deductions (readability, submission guidelines, originality) |       |
|                                                              |       |
| Total                                                        |   /35 |

## Things to consider for Bonus Marks (if any)



## Code & Testing

Put your code and screenshots here, **with proper heading organization**. You don't need to include html/php code (or testing) for any pages that aren't affected by your javascript for this assignment.

### Javascript
```js
"use strict";

// constant fucntion to verify emails.
const checkEmail = str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

// validation.js content
document.addEventListener('DOMContentLoaded', function () {

  // Register form validation
  const registerForm = document.getElementById('register-form');
  if (registerForm) {

    // input and error declaration
    const nameInput = document.getElementById('name');
    const nameError = nameInput.nextElementSibling;

    const genderSelect = document.getElementById('gender');
    const genderError = genderSelect.nextElementSibling;

    const userInput = document.getElementById('username');
    const userError = userInput.nextElementSibling;

    const emailInput = document.getElementById('email');
    const emailError = emailInput.nextElementSibling;

    const passwordInput = document.getElementById('password');
    const passwordError = passwordInput.nextElementSibling;

    const cpassInput = document.getElementById('confirm_password');
    const cpassError = cpassInput.nextElementSibling;

    const titleInput = document.getElementById('title');
    const titleError = titleInput.nextElementSibling;

    const descInput = document.getElementById('description');
    const descError = descInput.nextElementSibling;

    registerForm.addEventListener("submit", (ev) => {
      let errors = false;
      // If validation fails, prevent form submission with ev.preventDefault()

      if (nameInput.value !== "") {
        nameError.classList.add('hidden');
      } else {
        nameError.classList.remove('hidden');
        errors = true;
      }

      // check if there was nothing selected in the dropdown and handle appropriately
      if (genderSelect.value != 0) {
        genderError.classList.add('hidden');
      } else {
        genderError.classList.remove('hidden');
        errors = true;
      }

      if (userInput.value !== "") {
        userError.classList.add('hidden');
      } else {
        userError.classList.remove('hidden');
        errors = true;
      }

      // check if email is valid and handle appropriately
      if (checkEmail(emailInput.value)) {
        emailError.classList.add('hidden');
      } else {
        emailError.classList.remove('hidden');
        errors = true;
      }

      if (passwordInput.value !== "") {
        passwordError.classList.add('hidden');
      } else {
        passwordError.classList.remove('hidden');
        errors = true;
      }

      if (cpassInput.value == passwordInput.value) {
        cpassError.classList.add('hidden');
      } else {
        cpassError.classList.remove('hidden');
        errors = true;
      }

      if (titleInput.value !== "") {
        titleError.classList.add('hidden');
      } else {
        titleError.classList.remove('hidden');
        errors = true;
      }

      if (descInput.value !== "") {
        descError.classList.add('hidden');
      } else {
        descError.classList.remove('hidden');
        errors = true;
      }

        // IF THERE ARE ERRORS, PREVENT FORM SUBMISSION
        if (errors)
        ev.preventDefault();
    });
  }
});


// validation.js content
document.addEventListener('DOMContentLoaded', function () {
  // Edit item form validation
  const editItemForm = document.getElementById('edit-form');
  if (editItemForm) {
    // input and error declaration
    const titleInput = document.getElementById('title');
    const titleError = titleInput.nextElementSibling;

    const descInput = document.getElementById('description');
    const descError = descInput.nextElementSibling;

    const statusButtons = Array.from(document.getElementsByName('status'));
    const statusError = statusButtons[2].closest('div').nextElementSibling;

    const detailsInput = document.getElementById('details');
    const detailsError = detailsInput.nextElementSibling;

    const proofInput = document.getElementById('proof');
    const proofError = proofInput.nextElementSibling;

    editItemForm.addEventListener("submit", (ev) => {
      let errors = false;
      // if validation fails prevent form submission

      if (titleInput.value !== "") {
        titleError.classList.add('hidden');
      } else {
        titleError.classList.remove('hidden');
        errors = true;
      }

      if (descInput.value !== "") {
        descError.classList.add('hidden');
      } else {
        descError.classList.remove('hidden');
        errors = true;
      }

      if (statusButtons.some(button => button.checked)) {
        statusError.classList.add('hidden');
      } else {
        statusError.classList.remove('hidden');
        errors = true;
      }

      if (detailsInput.value !== "") {
        detailsError.classList.add('hidden');
      } else {
        detailsError.classList.remove('hidden');
        errors = true;
      }

      if (proofInput.files.length != 0) {
        proofError.classList.add('hidden');
      } else {
        proofError.classList.remove('hidden');
        errors = true;
      }

        // IF THERE ARE ERRORS, PREVENT FORM SUBMISSION
        if (errors)
        ev.preventDefault();
    });
  }
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var listLink = document.getElementById("preview");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    listLink.addEventListener('click', showModalPopUp);
    
    function showModalPopUp() {
      $('#myModal').modal('show');
      var options = {
        url: listLink.dataset.content, //Set the url of the page
        title: 'View Item', //Set the title for the pop up
        allowMaximize: false,
        showClose: true,
      width: 600,
      height: 400
    };

    //Invoke the modal dialog by passing in the options array variable
    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    const copyLinkBtn = document.getElementById('copyLinkBtn');

    if (copyLinkBtn) {
      copyLinkBtn.addEventListener('click', function () {
        const listItem = this.closest('li');
        const listLink = listItem.querySelector('a');
        const publicListLink = window.location.origin + '/view-item.php?id=' + encodeURIComponent(list_id); // Replace listId with the actual list ID
        copyToClipboard(publicListLink);
        alert('Public list link copied to clipboard!');
      });
    }
  
    function copyToClipboard(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  
  
    function Toggle() {
      let temp = document.getElementById("password");
    
      if (temp.type === "password") {
        temp.type = "text";
      } else {
        temp.type = "password";
      }
    }

  });

```

### Login.php
```xml
<!--PHP section-->
<?php
require './includes/library.php';
session_start(); // Start the session

// Check if the user is already logged in, if so, redirect to the Main Page
if (isset($_SESSION['username'])) {
    header("Location: index.php");
    exit();
}

// Check if a cookie exists, if yes, pre-populate the username box
if (isset($_COOKIE['remember_me'])) {
    $prepopulatedUsername = $_COOKIE['remember_me'];
} else {
    $prepopulatedUsername = '';
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $pdo = connectDB();
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Sanitize all text inputs
  $username= htmlspecialchars($username);
  $password= htmlspecialchars($password);

  $rememberMe = isset($_POST['remember_me']) ? $_POST['remember_me'] : false;

  // Fetch user data from the database
  $stmt = $pdo->prepare("SELECT id, password FROM 3420_assg_users WHERE username = ?");
  $stmt->execute([$username]);
  $userData = $stmt->fetch();

  // Verify password
  if ($userData && password_verify($password, $userData['password'])) {
      // Password is correct, start a new session
      session_start();

      // Store user data in session variables
      $_SESSION['username'] = $username;
      $_SESSION['user_id'] = $userData['id'];

      // Create a cookie if "remember me" is checked
      if ($rememberMe) {
          setcookie('remember_me', $username, time() + (86400 * 30), "/"); // 30 days
      } else {
          // If "remember me" is not checked, clear the cookie
          setcookie('remember_me', '', time() - 3600, "/");
      }

      // Redirect to the Main Page
      header("Location: index.php");
      exit();
  } else {
      $error_message = "Invalid username or password";
  }
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script
      src="https://kit.fontawesome.com/05ad49203b.js"
      crossorigin="anonymous"
    ></script>
    <title>Login</title>
    <!-- include javascript and css-->
    <link rel="stylesheet" href="styles/main.css">
    <script defer src="js/scripts.js"></script>
  </head>
  <body>
    <header>
      <!--This will be the main heading of the page so users know what page they're on-->
      <h1>Login</h1>

      <?php include './includes/nav.php' ?>
    </header>
    <main>
    <?php
      if (isset($error_message)) {
          echo "<p>$error_message</p>";
      }
      ?>
      No account? You can <a href="register.php">sign up now!</a>
      <form id="login-form" action="login.php" method="post" class="login">
        <fieldset>
          <legend>Login Information</legend>
          <div>
            <label for="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              maxlength="32"
              placeholder="ex. JohnDoe123"
              required
            >
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <input type="checkbox" id="showPassword" onclick="Toggle()"> <!-- Use the provided function to toggle password visibility -->
            <label for="showPassword">Show Password</label>
          </div>
          <script>function Toggle() {
    let temp = document.getElementById("password");
  
    if (temp.type === "password") {
      temp.type = "text";
    } else {
      temp.type = "password";
    }
  }
  </script>

          <div>
            <label for="remember_me">Remember me:</label>
            <input type="checkbox" id="remember_me" name="remember_me">
          </div>
        </fieldset>
        <div>
          <a href="forgot.php">Forgot Password?</a>
        </div>
        <input type="submit" value="Login">
      </form>
    </main>
    <?php include './includes/footer.php' ?>
  </body>
</html>
```
### Edit-item.php
```xml
<?php
session_start(); // Start the session

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect to the login page if not logged in
    header("Location: login.php");
    exit();
}
if(isset($_GET['id'])){
  $list_id = $_GET['id'];}

$userid = $_SESSION['user_id'];
// declare error array
$errors = array();


// delcare defaults
$title              = $_POST['title'] ?? "";
$description        = $_POST['description'] ?? "";
$status             = $_POST['status'] ?? "";
$details            = $_POST['details'] ?? "";
$proof              = $_FILES['proof'] ?? null;
$rating             = $_POST['rating'] ?? "50";
$comp_date          = $_POST['completionDate'] ?? "";
$public             = $_POST['public_view'] ?? 'Public';
$oldfile            = false;



//Include library and connect to DB
require './includes/library.php';

$pdo = connectDB();
$check = "SELECT user_id FROM 3420_assg_lists WHERE list_id = ?";
$checkownership = $pdo->prepare($check);
$checkownership->execute([$list_id]);
$result = $checkownership->fetch(PDO::FETCH_ASSOC);
if ($result['user_id'] != $userid){
  header("Location: index.php");
}
$getdata = "SELECT * FROM 3420_assg_lists WHERE list_id = ?";
$userdata= $pdo->prepare($getdata);
$userdata->execute([$list_id]);
$formdata = $userdata->fetch(PDO::FETCH_ASSOC);

if (isset($_POST['submit'])) {
      
    // Sanitize all text inputs
    $title= htmlspecialchars($title);
    $description= htmlspecialchars($description);
    $details= htmlspecialchars($details);
/*
 if (strlen($title) == 0) {
    $errors['title'] = true;
  }
  if (strlen($description) == 0) {
    $errors['description'] = true;
  }
  $valid_status = ["o", "p", "c"];
  if (!in_array($status, $valid_status)) {
    $errors['status'] = true;
  }
  if (strlen($details) === 0) {
    $errors['details'] = true;
  }
  if (isset($formdata['image_url']) && !isset($_FILES["proof"])){
    $oldfile = true;
  }
  else{
    $allowed_image_extension = array(
        "png",
        "jpg",
        "jpeg"
    );
    
    //Set Variables for File Upload
    $file_extension = pathinfo($_FILES["proof"]["name"], PATHINFO_EXTENSION);
    $maxsize    = 1500000;
    $path = WEBROOT."www_data/";
    $fileroot = "ListImage";
    
  if (!isset($formdata['image_url'])) //Removes the file check if there is already one in the directory!
  {

    // Validate file input to check if is not empty
    if (!file_exists($_FILES["proof"]["tmp_name"])) {
        $errors['proof'] = true;
    }    // Validate file input to check if is with valid extension
    else if (!in_array($file_extension, $allowed_image_extension)) {
        $errors['prooftype'] = true;
    }    // Validate image file size
    else if (($_FILES["proof"]["size"] >= $maxsize || ($_FILES["proof"]["size"] == 0))) {
        $errors['proofsize'] = true;
    }
    elseif(is_uploaded_file($_FILES["proof"]['tmp_name'])){
          //get the original file name for extension, where 'fileToProcess' was the name of the
          //file upload form element
          $filename = $_FILES["proof"]['name'];
          $exts = explode(".", $filename); // split based on period
          $ext = $exts[count($exts)-1]; //take the last split (contents after last period)
          $filename = $fileroot.$list_id.".".$ext;  //build new filename
          $newname = $path.$filename; //add path the file name

          // delete previous file in folder (as ones with different extensions would not be replaced)
          if(isset($formdata['image_url'])){
            $del_file = $path.$formdata['image_url'];
            array_map( "unlink", glob($del_file));
            }
          move_uploaded_file($_FILES['proof']['tmp_name'], $newname);
        }

  }
  else {
      //get the original file name for extension, where 'fileToProcess' was the name of the
      //file upload form element
      $filename = $_FILES["proof"]['name'];

      // Get the old extension
      $oldexts = explode(".", $formdata['image_url']);
      $oldext = $oldexts[count($oldexts)-1];

      $exts = explode(".", $filename); // split based on period
      $ext = $exts[count($exts)-1]; //take the last split (contents after last period)

      if (!empty($ext)){
      $filename = $fileroot.$list_id.".".$ext;  //build new filename
      $newname = $path.$filename; //add path to the file name
      echo "$filename";}
      else {
        $filename = $fileroot.$list_id.".".$oldext;  //build new filename
      $newname = $path.$filename; //add path to the file name
      echo "$filename";
      }

      if(is_uploaded_file($_FILES["proof"]['tmp_name'])){
      // delete previous file in folder (as ones with different extensions would not be replaced)
        $del_file = $path.$formdata['image_url'];
        array_map( "unlink", glob($del_file));
        move_uploaded_file($_FILES['proof']['tmp_name'], $newname);
      }
  }
}*/
    // If no errors, update database
    if (count($errors) === 0) {

    // Edit the list in Database`:
    if ($oldfile != true){
    if(empty($comp_date)){$comp_date = "0000:00:00";} // if statement to set a default for database
      $query = "UPDATE `3420_assg_lists` SET `title` = ?, `description` = ?, `status`= ?, `details`= ?, `image_url`= ?, `rating` = ?, `completion_date` = ?, `publicity` = ?
      WHERE `list_id` = ? AND `user_id` = ?";
      $edit_stmt = $pdo->prepare($query);
      $edit_stmt->execute([$title, $description, $status, $details, $filename, $rating, $comp_date, $public, $list_id, $userid]);}
      else{
        $query = "UPDATE `3420_assg_lists` SET `title` = ?, `description` = ?, `status`= ?, `details`= ?, `rating` = ?, `completion_date` = ?, `publicity` = ?
      WHERE `list_id` = ? AND `user_id` = ?";
      $edit_stmt = $pdo->prepare($query);
      $edit_stmt->execute([$title, $description, $status, $details, $rating, $comp_date, $public, $list_id, $userid]);
    }

   // Redirect:
   header("Location: edited.php?id=<?php echo $list_id; ?>");
    exit;
    }
  }

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script
      src="https://kit.fontawesome.com/05ad49203b.js"
      crossorigin="anonymous"
    ></script>
    <title>Edit Item</title>
    <!-- include javascript and css-->
    <link rel="stylesheet" href="styles/main.css">
    <script defer src="./scripts/main.js"></script>
  </head>
  <body>
    <header>
      <!--This will be the main heading of the page so users know what page they're on-->
      <h1>Edit Bucket List Items</h1>

      <?php include './includes/nav.php' ?>
    </header>
    <form id="edit-form" method="post" action="" enctype="multipart/form-data">
      <fieldset>
        <legend>List Info</legend>
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" value="<?php echo $formdata["title"]; ?>">
          <span class="error <?= !isset($errors['title']) ? 'hidden' : '' ?>">Please choose a Title</span>
        </div>
        <div>
        <label for="description">Description:</label>
          <textarea id="description" name="description" value="<?= $description ?>"><?php echo $formdata["description"]; ?></textarea>
          <span class="error <?= !isset($errors['description']) ? 'hidden' : '' ?>">Please choose a Description</span>
        </div>
      </fieldset>
      <fieldset>
        <legend>Status</legend>
        <div>
          <input type="radio" name="status" id="onhold" value="o"
          <?php if(isset($formdata["status"])){if($formdata["status"] == "o") echo 'checked';} ?>>
          <label for="onhold">On Hold</label>
        </div>
        <div>
          <input type="radio" name="status" id="progressing" value="p"
          <?php if(isset($formdata["status"])){if($formdata["status"] == "p") echo 'checked';} ?>>
          <label for="progressing">In Progress</label>
        </div>
        <div>
          <input type="radio" name="status" id="complete" value="c"
          <?php if(isset($formdata["status"])){if($formdata["status"] == "c") echo 'checked';} ?>>
          <label for="complete">Completed</label>
        </div>
        <span class="error <?= !isset($errors['status']) ? 'hidden' : '' ?>">Please Choose List Status.</span>
      </fieldset>
      
      <fieldset>
        <legend>Validation</legend>
        <div>
          <label for="details">Details:</label>
          <textarea id="details" name="details" value="<?= $details ?>"><?php echo $formdata["details"]; ?></textarea>
          <span class="error <?= !isset($errors['details']) ? 'hidden' : '' ?>">Please Describe Your Entry.</span>
        </div>
        <div>
          <label for="proof">Proof (Image upload):</label>
          <input type="file" id="proof" name="proof">
          <span class="error <?= !isset($errors['proof']) ? 'hidden' : '' ?>">Please Upload Your File.</span>
          <span class="error <?= !isset($errors['prooferror']) ? 'hidden' : '' ?>">Something Went Wrong With The Image.</span>
          <span class="error <?= !isset($errors['proofsize']) ? 'hidden' : '' ?>">The File Is Too Large (Max 1.5MB).</span>
          <span class="error <?= !isset($errors['prooftype']) ? 'hidden' : '' ?>">The File Is The Wrong Format (PNG, JPG, JPEG).</span>
        
          <?php 
          $printpath = "/~$direx[2]/www_data/";
          if (isset($formdata['image_url'])) {?>
            <div><?php echo "Current File on The List:"; ?></div>
             <div>
              <img src="<?php echo $printpath . $formdata['image_url']?>" height="300">
             </div>
          		<?php } ?>
        </div>

      </fieldset>
      <fieldset>
        <legend>Completed</legend>
        <div>
          <label for="rating">Score:</label>
          <input type="range" id="rating" name="rating" min="1" max="100" value="<?php if(isset($formdata["rating"])){echo $formdata["rating"];} ?>">
          <output for="rating"></output>
          <?php echo $formdata["rating"]?>
        </div>
        <div>
          <label for="completionDate">Completion Date:</label>
          <input type="date" id="completionDate" name="completionDate" value="<?php if(isset($formdata["completion_date"])){echo $formdata["completion_date"];} ?>">
        </div>
      </fieldset>
      <fieldset>
        <legend>Options</legend>
      <div>
          <label for="public_view">Make List Public?:</label>
          <input type="hidden" id="public_view" name="public_view" value="Private"<?php if($formdata["status"] == 'Private') echo 'checked'; ?>>
          <input type="checkbox" id="public_view" name="public_view" value="Public"<?php if($formdata["status"] == 'Public') echo 'checked'; ?>>
        </div>
      </fieldset>
      <button id="submit" name="submit">Update</button>
    </form>
  </main>
  <?php include './includes/footer.php' ?>
</body>

</html>
```
### Register.php
```xml
<?php

// declare error array
$errors = array();


// delcare defaults
$name               = $_POST['name'] ?? "";
$gender             = $_POST['gender'] ?? "";
$username           = $_POST['username'] ?? "";
$email              = $_POST['email'] ?? "";
$password           = $_POST['password'] ?? "";
$confirmPassword    = $_POST['confirm_password'] ?? "";
$title              = $_POST['title'] ?? "";
$description        = $_POST['description'] ?? "";
$public             = $_POST['public_view'] ?? 'Public';



//Include library and connect to DB
require './includes/library.php';

$pdo = connectDB();

//validate the form
if (isset($_POST['submit'])) {
  // Sanitize all text inputs
  $name               = htmlspecialchars($name);
  $gender             = htmlspecialchars($gender);
  $username           = htmlspecialchars($username);
  $email              = htmlspecialchars($email);
  $password           = htmlspecialchars($password);
  $confirmPassword    = htmlspecialchars($confirmPassword);
  $title              = htmlspecialchars($title);
  $description        = htmlspecialchars($description);
  
  //basic form validation
  if (strlen($name) == 0) {
    $errors['name'] = true;
  }
  if (strlen($gender) == 0) {
    $errors['gender'] = true;
  }
  if (strlen($username) == 0) {
    $errors['username'] = true;
  }else {
    // Check if username is unique
    $query ="SELECT id FROM 3420_assg_users WHERE username = ?";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$username]);

    if ($stmt->rowCount() > 0) {
      $errors['username'] = null;
      $errors['unique'] = true;
    }
  }
  if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    $errors['email'] = true;
  }
  if (strlen($password) == 0) {
    $errors['password'] = true;
  }
   // Validate password match
   if ($password !== $confirmPassword) {
    $errors['match'] = true;
  }
  if (strlen($title) == 0) {
    $errors['title'] = true;
  }
  if (strlen($description) == 0) {
    $errors['description'] = true;
  }


  if (count($errors) === 0) { 

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data into the database
    $userquery = "INSERT INTO 3420_assg_users (`name`, `gender`, `username`, `email`, `password`) VALUES (?, ?, ?, ?, ?)";
    $users_stmt = $pdo->prepare($userquery);
    $users_stmt->execute([$name, $gender, $username, $email, $hashedPassword]);

    $get_uid = "SELECT `id` FROM `3420_assg_users` WHERE `3420_assg_users`.`username` = ?";
    $uid = $pdo->prepare($get_uid);
    $uid->execute([$username]);
    $result = $uid->fetch(PDO::FETCH_ASSOC);
    $userid = $result['id'];
    $listquery = "INSERT INTO 3420_assg_lists (`user_id`, `title`, `description`, `publicity`) VALUES (?, ?, ?, ?)";
    $list_stmt = $pdo->prepare($listquery);
    $list_stmt->execute([$userid, $title, $description, $public]);

    // Redirect to login page
    header("Location: login.php");
    exit();
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/05ad49203b.js" crossorigin="anonymous"></script>
  <title>Register</title>
  <!-- include javascript and css-->
  <link rel="stylesheet" href="styles/main.css">
  <script defer src="./scripts/main.js"></script>
</head>

<body>
  <header>
    <!--This will be the main heading of the page so users know what page they're on-->
    <h1>Create An Account</h1>

    <?php include './includes/nav.php' ?>
  </header>
  <main>
    <form id="register-form" method="post" action="">
      <fieldset>
        <legend>Account Information</legend>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" value="<?= $name ?>">
          <span class="error <?= !isset($errors['name']) ? 'hidden' : '' ?>">Please Enter a Name.</span>
        </div>
        <div>
          <label for="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="">Please Choose One</option>
            <option value="male"<?php if($gender == "male") echo "selected='selected'"; ?>>Male</option>
            <option value="female"<?php if($gender == "female") echo "selected='selected'"; ?>>Female</option>
            <option value="gnc"<?php if($gender == "gnc") echo "selected='selected'"; ?>>Gender Queer/Non-Conforming</option>
            <option value="notsay"<?php if($gender == "notsayy") echo "selected='selected'"; ?>>Prefer not to say</option>
          </select>
          <span class="error <?= !isset($errors['gender']) ? 'hidden' : '' ?>">Please Choose a Gender.</span>
        </div>

        <div class="container">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" value="<?= $username ?>" >
          <span class="error <?= !isset($errors['username']) ? 'hidden' : '' ?>">Please Enter a Username.</span>
          <span class="error <?= !isset($errors['unique']) ? 'hidden' : '' ?>">Invalid Username!</span>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" value="<?= $email ?>" >
          <span class="error <?= !isset($errors['email']) ? 'hidden' : '' ?>">Enter a Valid Email.</span>
        </div>

        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" value="<?= $password ?>" >
          <span class="error <?= !isset($errors['password']) ? 'hidden' : '' ?>">Please Enter a Password.</span>
        </div>
        <div>
          <label for="confirm_password">Confirm Password:</label>
          <input type="password" id="confirm_password" name="confirm_password" value="<?= $confirmPassword ?>">
          <span class="error <?= !isset($errors['match']) ? 'hidden' : '' ?>">Passwords Do Not Match.</span>
        </div>
      </fieldset>
      <fieldset>
        <legend>Create Your First List</legend>
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" value="<?= $title ?>">
          <span class="error <?= !isset($errors['title']) ? 'hidden' : '' ?>">Please Choose a List Title.</span>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" name="description" ><?= $description ?></textarea>
          <span class="error <?= !isset($errors['description']) ? 'hidden' : '' ?>">Please Describe Your List.</span>
        </div>
        <div>
          <label for="public_view">Make List Public?:</label>
          <input type="hidden" id="public_view" name="public_view" value="Private">
          <input type="checkbox" id="public_view" name="public_view" value="Public" checked>
        </div>
      </fieldset>
      <button id="submit" name="submit">Register</button>
    </form>
  </main>
  <?php include './includes/footer.php' ?>
</body>

</html>
```

### Index.php
```xml
<?php
session_start(); // Start the session

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect to the login page if not logged in
    header("Location: login.php");
    exit();
}
$userid = $_SESSION['user_id'];
// declare error array
$errors = array();


// delcare defaults
$title              = $_POST['title'] ?? "";
$description        = $_POST['description'] ?? "";
$public             = $_POST['public_view'] ?? 'Public';



//Include library and connect to DB
require './includes/library.php';

$pdo = connectDB();
if (isset($_POST['submit'])) {
  if (strlen($title) == 0) {
    $errors['title'] = true;
  }
  if (strlen($description) == 0) {
    $errors['description'] = true;
  }

  if (count($errors) === 0) { 
    // Sanitize all text inputs
    $title= htmlspecialchars($title);
    $description= htmlspecialchars($description);
    
    
    $listquery = "INSERT INTO 3420_assg_lists (`user_id`, `title`, `description`, `publicity`) VALUES (?, ?, ?, ?)";
    $list_stmt = $pdo->prepare($listquery);
    $list_stmt->execute([$userid, $title, $description, $public]);
    
    // refresh page
    header("Location: index.php");
    exit();
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/05ad49203b.js" crossorigin="anonymous"></script>
  <title>Index</title>
  <!-- include javascript and css-->
  <link rel="stylesheet" href="styles/main.css">
  <script defer src="./scripts/main.js"></script>
</head>

<body>
  <header>
    <!--This will be the main heading of the page so users know what page they're on-->
    <h1>Welcome to the Main Page</h1>

    <?php include './includes/nav.php' ?>
  </header>

  <main>
    <h2>My Lists</h2>
    <ul>
    <?php
            // Fetch and display user's lists from the database
            $varpub ="Public";
            $varpriv ="Private";
            $query = "SELECT list_id, user_id, title FROM 3420_assg_lists WHERE publicity = ? OR user_id = ? AND publicity = ?";
            $stmt = $pdo->prepare($query);
            $stmt->execute([$varpub, $userid, $varpriv]);
            $user_lists = $stmt->fetchAll();

            foreach ($user_lists as $list) :
            ?>
      <li><a id="preview" href="#view-item.php?id=<?php echo $list["list_id"]; ?>"><?= $list["title"] ?></a>
      <?php if ($list["user_id"] == $userid) { ?> 
        <a href="edit-item.php?id=<?php echo $list["list_id"]; ?>"><i class="fa-solid fa-pen-to-square"></i></a>
          <a href="delete-item.php?id=<?php echo $list["list_id"]; ?>"><i class="fa-solid fa-trash"></i></a>
        </button>
      <?php } ?>

             <!-- Modal -->
              <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
        
            <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                  <fieldset>
                    <div>
                      <label for="title">Title:</label>
                      <input type="text" id="title" name="title" value="<?php echo $item["title"]; ?>" readonly>
                    </div>
                    <div>
                      <label for="title">Description:</label>
                      <input type="text" id="description" name="description" value="<?php echo $item["description"]; ?>" readonly>
                    </div>
                    <div>
                      <label for="rating">User Score: <?php echo $item["rating"]?></label>
                      <input type="range" id="rating" name="rating" min="1" max="100" value="<?php echo $item["rating"]; ?>" disabled>
                      <output for="rating"></output>
                    </div>
                    <div>
                    <label for="title">Completion Date:</label>
                      <input type="date" value="<?php echo $item["completion_date"]; ?>" disabled>
                      </div>
                  </fieldset>
                  <fieldset>
                    <legend>Description</legend>
                    <div>
                      <label for="details">Details:</label>
                      <p><?php echo $item['details']; ?></p>
                    </div>
                    <!-- Other HTML elements using data from $item -->
                    <div>
                      <?php if (isset($item['image_url'])): ?>
                        <label>Image Proof:</label>
                        <img src="<?php echo "/~$direx[2]/www_data/" . $item['image_url']; ?>" height="300">
                      <?php endif; ?>
                    </div>
                  </fieldset>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div> 
        <?php endforeach; ?>
      </li>
    </ul>
    <button id="copyLinkBtn">Copy Public List Link</button>
    <h2>Add New Entry:</h2>
    <form id="add-list-form" method="post" action="">
    <div>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" value="<?= $title ?>">
          <span class="error <?= !isset($errors['title']) ? 'hidden' : '' ?>">Please Choose a List Title.</span>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" name="description" ><?= $description ?></textarea>
          <span class="error <?= !isset($errors['description']) ? 'hidden' : '' ?>">Please Describe Your List.</span>
        </div>
        <div>
          <label for="public_view">Make List Public?:</label>
          <input type="hidden" id="public_view" name="public_view" value="Private">
          <input type="checkbox" id="public_view" name="public_view" value="Public" checked>
        </div>
      </fieldset>
      <button id="submit" name="submit">Make List</button>
    </form>
  </main>
  <?php include './includes/footer.php' ?>
</body>

</html>
```

## image tests
### Javascript form validation for register
![](tests/test1.png)
javascript was able to stop the form from submitting and display all errors upon attempting to submit an enpty form with the php validation commented out.


### Javascript form validation for edit-list item
![](tests/test2.png)
javascript was able to stop the form from submitting and display all errors upon attempting to submit an enpty form with the php validation commented out.

### Modal window for index/public list
![](tests/test3.png)
This feature did not work with the code we have tried, perhaps it is because we implemented the code wrong, or some issue we were unaware of.

### Show password
![](tests/test4.png)

By hitting the checkbox you are able to display the password you typed in, useful for people who have autofill on and can't remember their password :D
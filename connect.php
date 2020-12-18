<?php
  $FirstName=$_POST['FirstName'];
  $lastname=$_POST['LastName'];
  $emailID=$_POST['emailID'];
  $Number=$_POST['Number'];
  $FeedBack=$_POST['FeedBack'];

  //database connection
  $conn = mysqli('localhost','root','','test')
  if($conn->connect_error){
      die('Connection Unsuccessful:'.$conn->connect_error)
  }else{
      $stmt = $conn->prepare("insert into registration(FirstName,LastName,emailID,Number,FeedBack)
       values(?,?,?,?,?)"):
       $stmt->bind_param("sssis", $FirstName, $LastName, $emailID, $Number, $FeedBack);
       $stmt->execute();
       echo"registration successful...";
       $stmt->close();
       $conn->close();
  }

?>
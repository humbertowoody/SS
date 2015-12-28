<!DOCTYPE html>
<?php require_once "php/variables.php"; ?>

<html lang="en" ng-app="SS">
<head>
	<meta charset="UTF-8">
	<title>Home | <?php echo $project_name ?></title>
	<script type="text/javascript" src="assets/js/angular.js"></script>
	<script type="text/javascript" src="assets/js/jquery.js"></script>
    <script type="text/javascript" src="assets/js/app.js"></script>
</head>
<body id="body" ng-controller="main_controller" ng-init="get_secrets()">
    
    <div ng-repeat="s in secrets">
        <p>{{s.content}}</p>
        <sub>{{s.category}}</sub>
        <hr>
    </div>
    
</body>
</html>
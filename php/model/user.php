<?php
    require_once 'bin/OOM.php';
    
    class user extends OOM{
        function __construct(){
            $this->model_name = "user";
            $this->before_save = "before_save";
        }
        
        function before_save(){
            echo "Hi";
            return true; 
        }
    }

?>
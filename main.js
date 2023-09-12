import { Megjelenit } from "./Megjelenit.js"
import { TODOLIST2 } from "./adatok.js"
$(function(){

    new Megjelenit(TODOLIST2, document.getElementsByClassName("tarolo")[0]);
    console.log(".")
})


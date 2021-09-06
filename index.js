class OnMouseOver{
    constuctor(){

    }

    technologyMouseOver(){
       
    }

    puppyMouseOver(){
        let x = document.getElementById("puppies")
        x.innerHTML="<img src=\"https://c.tenor.com/b5eNjsHg5S8AAAAi/love-hit.gif\" width=\"100px\" height=\"100px\" id = \"puppy\">";
    }
    
    puppyMouseOut(){
        document.getElementById("puppies").innerHTML = "puppies"
    }


}




let onMouseOver = new OnMouseOver()
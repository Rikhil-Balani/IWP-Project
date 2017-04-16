var hits = 0;
//<<<<<<< HEAD


//=======

var missed = 0; 



function Shoot()

{
   
var bullet = document.getElementById("bullet");
   
bullet.offsetTop=330;
   
var target = document.getElementById("target");
   
bullet.style.display="inherit";
   
var bPos = 331;
   
var t = setInterval(moveBullet,5);
   
   
function moveBullet()
   {
     
		         if(bPos < 30)
     {
      
					clearInterval(t);
      
					bullet.style.display="none";
      
					missed++;
     }
       
			else
     {
      
					var sameX = (bullet.offsetTop>=36) && (bullet.offsetTop <= 70);

				        var sameY = (target.offsetLeft >=90)&&(target.offsetLeft <=150);
				 
       if(!(sameX && sameY))
       {
        
									bPos -= 3;
        
									bullet.style.top = bPos +"px";
        
									var yb = bPos + "px";         
       }
       
									else
       {
         
											clearInterval(t);
         
											bullet.style.display="none";
         
											hits++;
        
											document.getElementById("explode").style.visibility="inherit";
         
											setTimeout(function(){ document.getElementById("explode").style.visibility="hidden"; },800)
       
                                                                                   }   
      
                                } 
document.getElementById("hits").innerHTML= "Hits: "+hits;
document.getElementById("missed").innerHTML="Missed: "+missed;
   check_hits();
}
function check_hits()
{
	if(count==0)
	{
		if( hits>3){
		count=count+1;
		var w=alert("Congratulations You have 4 hits Speed will be increased.");
		target.style.animationDuration= "3s" ;
		document.getElementById("explode").style.animationDuration= "3s" ;
		}
	}
}
};
function ThankYou(){
alert("Welcome !!!!!!!!");
}
//>>>>>>> 57f15fff207720a17d7c670d93fa23e794c2e1d8

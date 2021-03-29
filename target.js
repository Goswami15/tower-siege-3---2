class target{
    constructor(x,y,width,height){
this.image=loadImage("wood1.png");

        this.Visibility=255;
        var options={
            restitution:0,
            friction:0.5,
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
        
        
            }
            display(){
                
                
               
         
if(this.body.speed>3){

    World.remove(world,this.body);
    push();

    this.Visibility = this.Visibility - 2;
    tint(255,this.Visibility);

    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

    pop();
}else{
    push();
    imageMode(CENTER);
    
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
}


                   
            }

            
  score(){
    if (this.Visibility < 0 && this.Visibility > -100){
      score++;
    }
  }

    }

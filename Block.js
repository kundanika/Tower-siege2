class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility=225
      }
      display() {
        if (this.body.speed<7) {
        
        var pos = this.body.position;
         var angle = this.body.angle;
       
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0, this.width, this.height)
            pop ();
        }
         else {
           
          World.remove(world,this.body);
          push ();

               
                this.visiblity = this.visiblity-5
                tint(255,this.visiblity)
                rect(999,999,this.width,this.height)
                
            pop();
            
        }
    
    }
    
    
    }
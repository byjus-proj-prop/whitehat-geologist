class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		var options = {
			"restituition": 0.3,
			"friction":5,
			"density":1,
			isStatic:false
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r*10,this.r*10);
			pop()
	}
	
	
}
class Rock{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		var options = {
			"restituition": 0.3,
			"friction":5,
			"density":12,
			isStatic:false
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
		console.log(this.body)

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r*10,this.r*10);
			pop()
	}
}
class Metal{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		var options = {
			"restituition": 0.3,
			"friction":5,
			"density":30,
			isStatic:false
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
		console.log(this.body)

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("gray");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r*10,this.r*10);
			pop()
	}
}
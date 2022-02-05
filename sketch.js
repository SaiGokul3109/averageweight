var weight = [36,38,42,48,40,34,36,52,48,32];
var sum=0;

function weight_average(){

  for(var i=0; i<weight.length; i=i+1){
   sum=sum+weight[i];
  }
  var average=sum/weight.length;
  console.log(average);
}

function setup() {
  createCanvas(400,400);
  weight_average();
}

function draw() 
{
  background(30);
}

 


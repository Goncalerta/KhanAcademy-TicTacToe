void setup() {
    size(400, 400);
    
}

//Button Variables
var Button_1 = {
    xPos: 50,
    yPos: 70,
    color: color(143, 105, 59),
    state: 0,
};
var Button_2 = {
    xPos: 150,
    yPos: 70,
    color: color(143, 105, 59),
    state: 0,
};
var Button_3 = {
    xPos: 250,
    yPos: 70,
    color: color(143, 105, 59),
    state: 0,
};

var Button_4 = {
    xPos: 50,
    yPos: 170,
    color: color(143, 105, 59),
    state: 0,
};
var Button_5 = {
    xPos: 150,
    yPos: 170,
    color: color(143, 105, 59),
    state: 0,
};
var Button_6 = {
    xPos: 250,
    yPos: 170,
    color: color(143, 105, 59),
    state: 0,
};

var Button_7 = {
    xPos: 50,
    yPos: 270,
    color: color(143, 105, 59),
    state: 0,
};
var Button_8 = {
    xPos: 150,
    yPos: 270,
    color: color(143, 105, 59),
    state: 0,
};
var Button_9 = {
    xPos: 250,
    yPos: 270,
    color: color(143, 105, 59),
    state: 0,
};

//Suport Variables
var click = false;
var P1turn = true;
var gameEnds = false;
var winner = 0;
var winLine = 0;
var newGame = false;

//Wins Counters
var P1wins = 0;
var P2wins = 0;
var standbyWin = true;

var drawButton = function(Button){
    stroke(51, 27, 1); fill(Button.color); 
    rect(Button.xPos, Button.yPos, 100, 100);
    
    if( !gameEnds &&
        mouseX > Button.xPos     &&
        mouseX < Button.xPos+100 &&
        mouseY > Button.yPos     &&
        mouseY < Button.yPos+100 &&
        Button.state === 0  )    {
            Button.color = color(145, 124, 100);
            if(click){
                Button.color = color(46, 43, 40);
                if(P1turn){
                    Button.state = 1; 
                }else{
                    Button.state = 2;
                }
                P1turn = !P1turn;
            }
        }else{
        Button.color = color(143, 105, 59);
    }
        
    if(Button.state === 1){
        fill(204, 53, 53); stroke(204, 53, 53); 
        line(Button.xPos+6, Button.yPos+6, Button.xPos+95, Button.yPos+95); 
        line(Button.xPos+95, Button.yPos+6, Button.xPos+6, Button.yPos+95);
    }else if(Button.state === 2){
        stroke(56, 104, 224); ellipse(Button.xPos+50, Button.yPos+50, 90, 90);    
    }
};

var checkWin = function(){
    //Check Wins
    if(Button_1.state === Button_2.state && Button_1.state === Button_3.state){
        if(Button_1.state === 1){
            winner = 1;
        }else if(Button_1.state === 2){
            winner = 2;
        }
        
        if(Button_1.state === 2 || Button_1.state === 1){
        gameEnds = true;
        winLine = 1;
        }
    }
    if(Button_4.state === Button_5.state && Button_4.state === Button_6.state){
        if(Button_4.state === 1){
            winner = 1;
        }else if(Button_4.state === 2){
            winner = 2;
        }
        if(Button_4.state === 2 || Button_4.state === 1){
        gameEnds = true;
        winLine = 2;
        }
    }
    if(Button_7.state === Button_8.state && Button_7.state === Button_9.state){
        if(Button_7.state === 1){
            winner = 1;
            fill(255, 0, 0);
        }else if(Button_7.state === 2){
            winner = 2;
            fill(0, 153, 255);
        }
        if(Button_7.state === 2 || Button_7.state === 1){
        gameEnds = true;
        winLine = 3;
        }
    }
    
    if(Button_1.state === Button_4.state && Button_1.state === Button_7.state){
        if(Button_1.state === 1){
            winner = 1;
            fill(255, 0, 0);
        }else if(Button_1.state === 2){
            winner = 2;
            fill(0, 153, 255);
        }
        if(Button_1.state === 2 || Button_1.state === 1){
        gameEnds = true;
        winLine = 4;
        }
    }
    if(Button_2.state === Button_5.state && Button_2.state === Button_8.state){
        if(Button_2.state === 1){
            winner = 1;
            fill(255, 0, 0);
        }else if(Button_2.state === 2){
            winner = 2;
            fill(0, 153, 255);
        }
        if(Button_2.state === 2 || Button_2.state === 1){
        gameEnds = true;
        winLine = 5;
        }
    }
    if(Button_3.state === Button_6.state && Button_3.state === Button_9.state){
        if(Button_3.state === 1){
            winner = 1;
            fill(255, 0, 0);
        }else if(Button_3.state === 2){
            winner = 2;
            fill(0, 153, 255);
        }
        if(Button_3.state === 2 || Button_3.state === 1){
        gameEnds = true;
        winLine = 6;
        }
    }
    
    if(Button_1.state === Button_5.state && Button_1.state === Button_9.state){
        if(Button_1.state === 1){
            winner = 1;
            fill(255, 0, 0);
        }else if(Button_1.state === 2){
            winner = 2;
            fill(0, 153, 255);
        }
        if(Button_1.state === 2 || Button_1.state === 1){
        gameEnds = true;
        winLine = 7;
        }
    }
    if(Button_3.state === Button_5.state && Button_3.state === Button_7.state){
        if(Button_3.state === 1){
            winner = 1;
            fill(255, 0, 0);
        }else if(Button_3.state === 2){
            winner = 2;
            fill(0, 153, 255);
        }
        if(Button_3.state === 2 || Button_3.state === 1){
        gameEnds = true;
        winLine = 8;
        }
    }
    
    //Check Withdraws
    if(Button_1.state !== 0 &&
       Button_2.state !== 0 &&
       Button_3.state !== 0 &&
       Button_4.state !== 0 &&
       Button_5.state !== 0 &&
       Button_6.state !== 0 &&
       Button_7.state !== 0 &&
       Button_8.state !== 0 &&
       Button_9.state !== 0 ){
        gameEnds = true;
    }
};

void draw() {
    strokeWeight(6);
    
    //Background 
        //Gradient
    noStroke();
    for(var g = 0; g < 100; g+=2){
        fill(220-g, 150-g, 93-g);
        rect(-10, -10+g*10, 410, 410);
    }
        //Line
    noFill(); stroke(51, 27, 1);
    rect(1, 1, 398, 398);
    
    //Board
    drawButton(Button_1);
    drawButton(Button_2);
    drawButton(Button_3);
    drawButton(Button_4);
    drawButton(Button_5);
    drawButton(Button_6);
    drawButton(Button_7);
    drawButton(Button_8);
    drawButton(Button_9);
    
    //Player Turn Light
    fill(255, 0, 0); stroke(51, 27, 1); strokeWeight(3);
    if(P1turn){fill(252, 68, 68);}else{fill(115, 0, 0);}
    rect(25, 20, 70, 30);
    if(!P1turn){fill(0, 174, 255);}else{fill(0, 63, 112);}
    rect(305, 20, 70, 30);
    
    //Result
    textSize(23);
    textAlign(LEFT, BASELINE);fill(255, 0, 0); text("P1 - " + P1wins, 100, 28, 200, 200);
    textAlign(RIGHT, BASELINE); fill(0, 153, 255); text(P2wins + " - P2", 100, 28, 200, 200);
    textAlign(CENTER, BASELINE); fill(0, 0, 0); text("Vs.", 100, 28, 200, 200);
    
    checkWin();
    
    if(gameEnds){
        fill(0, 200, 0); strokeWeight(8);
        switch(winLine){
            case 1: line(100, 125, 300, 125); break;
            case 2: line(100, 225, 300, 225); break;
            case 3: line(100, 325, 300, 325); break;
            
            case 4: line(100, 125, 100, 325); break;
            case 5: line(200, 125, 200, 325); break;
            case 6: line(300, 125, 300, 325); break;
            
            case 7: line(100, 125, 300, 325); break;
            case 8: line(100, 325, 300, 125); break;
        }
        
        if(winner === 1){
            if(standbyWin){P1wins++;}
            standbyWin = false;
            
            rotate(-0.209);
            fill(143, 74, 0);
            rect(29, 199, 250, 90); 
            fill(0, 0, 0); textAlign(CENTER, CENTER); textSize(35);
            text("Player 1 Wins", 34, 178, 240, 110);
            textSize(10); text("Click anywere on the screen to start a new game.", 35, 220, 240, 110);
            rotate(0.209);
            
        }else if(winner === 2){
            if(standbyWin){P2wins++;}
            standbyWin = false;
            
            rotate(-0.209);
            fill(143, 74, 0);
            rect(29, 199, 250, 90); 
            fill(0, 0, 0); textAlign(CENTER, CENTER); textSize(35);
            text("Player 2 Wins", 34, 178, 240, 110);
            textSize(10); text("Click anywere on the screen to start a new game.", 35, 220, 240, 110);
            rotate(0.209);
            
        }else{
            rotate(-0.209);
            fill(143, 74, 0);
            rect(29, 199, 250, 90); 
            fill(0, 0, 0); textAlign(CENTER, CENTER); textSize(40);
            text("Draw", 34, 178, 240, 110);
            textSize(10); text("Click anywere on the screen to start a new game.", 35, 220, 240, 110);
            rotate(0.209);
        }
        
        if(newGame){
            P1turn = !P1turn;
            winner = 0;
            winLine = 0;
            standbyWin = true;
            Button_1.state = 0; 
            Button_2.state = 0; 
            Button_3.state = 0; 
            Button_4.state = 0; 
            Button_5.state = 0; 
            Button_6.state = 0; 
            Button_7.state = 0; 
            Button_8.state = 0; 
            Button_9.state = 0; 
            gameEnds = false;
            newGame = false;
        }
        
    }
    click = false;
};


void mouseClicked() {
    click = true;
    if(gameEnds){newGame = true;}
};
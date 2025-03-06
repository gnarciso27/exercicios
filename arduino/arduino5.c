byte ledPin[] = {4,5,6,7,8,9,10,11,12,13};

int ledDelay(65);
int direction = 1;
int currentLed = 0;
unsigned long changeTime;

void setup(){
    for(int x=0; x<10; x++){
        pinMode(ledPin[x], OUTPUT);
    }
    changeTime = millis();
}

void loop(){
    if((millis() -changeTime)> ledDelay){
        changeLed();
        changeTime = millis();
    }
}

void changeLed(){
    for(int x = 0; x<10;x++){
        digitalWrite(ledPin[x], LOW);
    }
    digitalWrite(ledPin[currentLed], HIGH);
    currentLed += direction;

    if(currentLed == 9){direction = -1;}
    if(currentLed ==0){direction = 1;}
}
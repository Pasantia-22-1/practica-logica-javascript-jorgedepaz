class Calculadora{
    constructor(name){
        this._name = name;
        this._data;
    }

    div(a,b)  {return a / b};
    mult(a,b) {return a * b};
    suma(a,b) {return a + b};
    rest(a,b) {return a - b}; 
    
    filter(data){
        let flag = true;
        this._data = data;
        for (let i = 0; i < this._data.length; i++) {
            if (( (this._data[i] >= 'A' &&  this._data[i] <= 'Z') ||(this._data[i] >= 'a' &&  this._data[i] <= 'z') )) {
                flag = false;
                break;
              }else{
                flag = true;
              }    
        }
        if (flag == true) {
            //this.newSplit(this._data);
            this.calculate(this._data);
            
        }else if (flag == false) {
            return console.log("Cadena invalida");
        }

    }
    
    newSplit(data){
        this._data = data;
        //console.log(this._data);
        //for (let i = 0; i < this._data.length; i++) {
            this._data = this._data.replace("+"," ");
            this._data = this._data.replace("-"," ");
            this._data = this._data.replace("/"," ");
            this._data = this._data.replace("*"," ");
        //}
        return console.log(this._data.split(" "));
    };

    calculate(data){
        console.log(data);
        this._data = data.split('');
        
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i]=='/') {
                
                let div = this.div(Number(this._data[i-1]),Number(this._data[i+1]));
                this._data.splice(i-1,3)
                this._data.splice(i-1, 0, div);
                console.log(this._data.join(''));
                i=0;
            }
            
        }
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i]=='*') {
                
                let mul = this.mult(Number(this._data[i-1]),Number(this._data[i+1]));
                this._data.splice(i-1,3)
                this._data.splice(i-1, 0, mul);
                console.log(this._data.join(''));
                i=0;
                
            }
        }
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i]=='+') {
                
                let sum = this.suma(Number(this._data[i-1]),Number(this._data[i+1]));
                this._data.splice(i-1,3)
                this._data.splice(i-1, 0, sum);
                console.log(this._data.join(''));
                i=0;
            }
            if (this._data[i]=='-') {
                
                let res = this.rest(Number(this._data[i-1]),Number(this._data[i+1]));
                this._data.splice(i-1,3)
                this._data.splice(i-1, 0, res);
                console.log(this._data.join(''));
                i=0;
            }
            
        }
        
    }
}

let calculadora = new Calculadora("Calc");
//calculadora.calculate("4*2+5-6/2");
calculadora.filter("4*2+5-6/2");
//calculadora.filter("54+565/5*6564");
//calculadora.calculate("4-7+8+9/2*3");
//calculadora.calculate("6-4+3*6-8*5+1");
//calculadora.calculate("10-8/2+6-4*5+8");
//calculadora.newSplit("10-8/2+6-4*5+8");
//calculadora.filter("10-8/2+6-4*5+8");
//calculadora.filter("54+564/5*6564");
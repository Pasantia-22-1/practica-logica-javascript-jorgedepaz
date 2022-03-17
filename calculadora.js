class Calculadora{
    constructor(name){
        this._name = name;
        this._data;
    }

    div(a,b)  {return a / b};
    mult(a,b) {return a * b};
    suma(a,b) {return a + b};
    rest(a,b) {return a - b}; 

    calculate(data){
        console.log(data);
        this._data = data.split('');
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i]=='/') {
                
                let div = this.div(Number(this._data[i-1]),Number(this._data[i+1]));
                this._data.splice(i-1,3)
                this._data.splice(i-1, 0, div);
                console.log(this._data.join(''));
                
            }
            
        }
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i]=='*') {
                
                let mul = this.mult(Number(this._data[i-1]),Number(this._data[i+1]));
                this._data.splice(i-1,3)
                this._data.splice(i-1, 0, mul);
                console.log(this._data.join(''));
                
            }
        }
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i]=='+') {
                
                let sum = this.suma(Number(this._data[i-1]),Number(this._data[i+1]));
                this._data.splice(i-1,3)
                this._data.splice(i-1, 0, sum);
                console.log(this._data.join(''));
            }
        }
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i]=='-') {
                
                let res = this.rest(Number(this._data[i-1]),Number(this._data[i+1]));
                this._data.splice(i-1,3)
                this._data.splice(i-1, 0, sum);
                console.log(this._data.join(''));
            }
        }
        //console.log(this._data);
    }
}

let calculadora = new Calculadora("Calc");
calculadora.calculate("4/4+8+9/2*3");

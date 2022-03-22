class Stack{
    constructor(){
        this.stack = [];
    }

    get length(){
        return this.stack.length;
    }

    push(item){
        return this.stack.push(item);
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.length - 1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }
}

const pila = new Stack();
const  add = (item) =>{
    
   
    pila.push(document.getElementById(item).textContent);
    //console.log(item);
    console.log(pila);
}



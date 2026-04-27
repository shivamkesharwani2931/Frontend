class Account{
    #url
    #age
    constructor(name,url,age){
        this.name=name,
        this.#url=url,
        this.#age=age
    }
    get hideValue(){
        return this.#age;
    }
}

const a1=new Account('Shivam','https://www.google.com',20);
console.log(a1.hideValue)
console.log(a1)
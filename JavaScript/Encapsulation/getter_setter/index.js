const obj={
    f_name:'Shivam',
    l_name:'Kesharwani',

    get fullName(){
        return this.f_name + " " +this.l_name;
    },

    set fullName(value){
        const[f_name,l_name]=value.split(' ');
        this.f_name=f_name || '';
        this.l_name=l_name || '';
    },
};

obj.fullName="hello";
console.log('obj',obj.fullName)
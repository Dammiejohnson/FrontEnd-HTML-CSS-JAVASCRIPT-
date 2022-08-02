class Human {
        gender = 'male';
         name = 'Dami'

    printGenderAndName  = () =>{
        console.log(this.gender);
        console.log(this.name);
    }
}

class Person extends Human{
   name = 'Ola';
   gender = 'female'
 
}

const person = new Person();
person.printGenderAndName();
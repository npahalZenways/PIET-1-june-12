class school{
    private schoolName: string;
    constructor(name){
        this.schoolName = name;
    }
}

// var schoolobj = school()

// inheritance and access specifiers

class student extends school{
    name: string;
    rollnum: number;
    constructor(name, roll, schoolName){
        super(schoolName);
        this.name = name;
        this.rollnum = roll;
    }
}

var student1 = new student('nitin', 12, 'ABC school');

// console.log(student1.schoolName) 
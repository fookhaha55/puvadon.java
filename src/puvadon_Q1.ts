// Q1 ให้สร้าง 5 Tuples ของนักเรียน [id, name, mid, final, project, grade]
//                          [ 1, 'Sarawut',20,25,30,""]
// Output: <id>:<name>, Total: <mid + final + project>, Grade: <grade>
// grade 4,3.5,3,2.5,2,1.5,1,0
let students : [Number, String, Number, Number, Number, Number, Number][]
students = [
    [1, "JR", 20, 38, 40, 0, 0],
    [2, "PP", 15, 17, 15, 0, 0],
    [3, "LL", 12, 22, 40, 0, 0],
    [4, "NUM", 19, 17, 23, 0, 0],
    [5, "TT", 18, 12, 39, 0, 0],
]
students.forEach((s)=>{
    s[5] = s[2]+s[3]+s[4];
    if(s[5]<50){
        s[6] = 1
    }else if(s[5]<=55){
        s[6] = 1.5
    }else if(s[5]<=60){
        s[6] = 2
    }else if(s[5]<=65){
        s[6] = 2.5
    }else if(s[5]<=70){
        s[6] = 3
    }else if(s[5]<=75){
        s[6] = 3.5
    }else if(s[5]<=80){
        s[6] = 4
    }else{
        s[6] = 4
    }
    console.log(`${s[0]} : ${s[1]}, Total: ${s[5]}, Grade: ${s[6]}`)
});
let marks = parseInt(prompt("Enter your marks"));
let grade;

if (marks > 90) {
    grade = "A";

} else if (marks > 70 && marks <= 90) {
    grade = "B";
} else if (marks > 50 && marks <= 70) {
    grade = "C"; 
} else {
    grade = "Fail"; 
}
console.log("Your Grade is ", grade);
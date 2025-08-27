const students = [
  { name: "Amit", marks: 85 },
  { name: "Priya", marks: 92 },
  { name: "Ravi", marks: 76 },
  { name: "Sneha", marks: 88 }
];

export const showStudents = (req, res) => {
  res.render("students", { students });
};

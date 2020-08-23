const $studentList = document.querySelector("#student-list")
const $studentForm = document.querySelector("#add-student")
const studentData = [
    {
        name: "student1",
        age: "10",
        subject: "english",
        step: "beginner",
    },
    {
        name: "student2",
        age: "18",
        subject: "math",
        step: "intermediate",
    },
]
function studentTemplate(student) {
    return `<tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.subject}</td>
        <td>${student.step}</td>
        <td><button class="remove-student">X</button></td>
    </tr>`
}
$studentList.innerHTML = studentData
    .map((student) =>
        studentTemplate({
            name: student.name,
            age: student.age,
            subject: student.subject,
            step: student.step,
        })
    )
    .join("")
$studentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const { name, age, subject, step } = $studentForm
    $studentList.innerHTML += studentTemplate({
        name: name.value,
        age: age.value,
        subject: subject.value,
        step: step.value,
    })
})
$studentList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-student")) {
        e.target.parentElement.parentElement.remove()
    }
})

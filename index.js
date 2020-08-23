const $studentList = document.querySelector("#student-list")
const $teacherList = document.querySelector("#teacher-list")
const $studentForm = document.querySelector("#add-student")
const $teacherForm = document.querySelector("#add-teacher")
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
const teacherData = [
    {
        name: "teacher1",
        subject: "english",
    },
    {
        name: "teacher2",
        subject: "math",
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
function teacherTemplate(teacher) {
    return `<tr>
        <td>${teacher.name}</td>
        <td>${teacher.subject}</td>
        <td><button class="remove-teacher">X</button></td>
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
$teacherList.innerHTML = teacherData.map((teacher) => teacherTemplate(teacher)).join("")

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

$teacherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const { name, subject } = $teacherForm
    $teacherList.innerHTML += teacherTemplate({
        name: name.value,
        subject: subject.value,
    })
})

$studentList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-student")) {
        e.target.parentElement.parentElement.remove()
    }
})
$teacherList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-teacher")) {
        e.target.parentElement.parentElement.remove()
    }
})

const $teacherList = document.querySelector("#teacher-list")
const $teacherForm = document.querySelector("#add-teacher")
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

function teacherTemplate(teacher) {
    return `<tr>
        <td>${teacher.name}</td>
        <td>${teacher.subject}</td>
        <td><button class="remove-teacher">X</button></td>
    </tr>`
}

$teacherList.innerHTML = teacherData.map((teacher) => teacherTemplate(teacher)).join("")

$teacherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const { name, subject } = $teacherForm
    $teacherList.innerHTML += teacherTemplate({
        name: name.value,
        subject: subject.value,
    })
})

$teacherList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-teacher")) {
        e.target.parentElement.parentElement.remove()
    }
})

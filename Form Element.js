let myformEl = document.getElementById("myform");
let nameErrorEl = document.getElementById("nameError");
let emailErrorEl = document.getElementById("emailError");
let emailEl = document.getElementById("email");
let nameEl = document.getElementById("name");
let workingStatusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");


genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
    //console.log(formData);
});
genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
    // console.log(formData);
})

workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
    //console.log(formData.status);
})

let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}
//console.log(formData);6006490/  6019878

function submitFormData(formData) {
    let option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer d262ca417a1d247996b05fc9f0470926fd5f2a7a2c5e7e955eb3c385682d8c76"
        },
        body: JSON.stringify(formData)
    };
    let url = "https://gorest.co.in/public-api/users";

    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrorEl.textContent = "Email aldready exists";
                }
            }

        });

}



myformEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submitFormData(formData);
});

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrorEl.textContent = "Required*";
    } else {
        nameErrorEl.textContent = "";
    }
})

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrorEl.textContent = "Required*";
    } else {
        nameErrorEl.textContent = "";
    }
    //console.log("blur event triggred");
    formData.name = event.target.value;
    //console.log(formData.name);
})
emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrorEl.textContent = "Required*";
    } else {
        emailErrorEl.textContent = "";
    }
})

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrorEl.textContent = "Required*";
    } else {
        emailErrorEl.textContent = "";
    }
    //console.log("blur event triggred");
    formData.email = event.target.value;
    //console.log(formData.email);
})

// Activity 1
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
               { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
    ],    
    

    getSection: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        return sectionIndex;
    },

    enrollStudent: function(sectionNum) {
        if (this.getSection(sectionNum) >= 0) {
            this.sections[sectionIndex].enrolled++;
            outputSections(this.sections);
        }
    },

    dropStudent: function(sectionNum) {
        if (this.getSection(sectionNum) >= 0) {
            this.sections[sectionIndex].enrolled--;
            outputSections(this.sections);
        }
    }
    // solution
    // changeEnrollment: function (sectionNum, add = true) {
    //     // find the right section...Array.findIndex will work here
    //     const sectionIndex = this.sections.findIndex(
    //       (section) => section.sectionNum == sectionNum
    //     );
    //     if (sectionIndex >= 0) {
    //       if (add) {
    //         this.sections[sectionIndex].enrolled++;
    //       } else {
    //         this.sections[sectionIndex].enrolled--;
    //       }
    //       renderSections(this.sections);
    //     }
    //   }


};

function setCourseNameNum(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function outputSections(sections) {
    const html = sections.map(
        (section) => <tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>
    );
    document.querySelector("#sections").innerHTML = html.join("");

}


//event listeners for enroll and drop student
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(section);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
})

setCourseInfo(aCourse);
outputSections(aCourse.sections);








 

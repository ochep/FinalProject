import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        id: "0",
        title: "Grill kijang grand 1.5 Chrome Horizontal",
        watchHref: "https://www.tokopedia.com/agokigarage/grill-kijang-grand-1-5-chrome-horizontal",
        authorId: "Ochep",
        length: "350000",
        category: "Sparepart",
        pictureSrc : "http://ticket.citrarayawaterworld.com/img/grill-kijang.jpg"
    },
    {
        id: "1",
        title: "Stop lamp crystal Kijang Super G / Grand Extra",
        watchHref: "https://www.tokopedia.com/agokigarage/stop-lamp-crystal-kijang-super-g-grand-extra",
        authorId: "Ochep",
        length: "225000",
        category: "Sparepart",
        pictureSrc : "http://ticket.citrarayawaterworld.com/img/stop-lamp.jpg"
    },
    {
        id: "2",
        title: "Fog lamp kijang kapsul 2000",
        watchHref: "https://www.tokopedia.com/agokigarage/fog-lamp-kijang-kapsul-2000",
        authorId: "Ochep",
        length: "250000",
        category: "Sparepart",
        pictureSrc : "http://ticket.citrarayawaterworld.com/img/fog-lamp.jpg"
    },
    {
        id: "3",
        title: "Lampu Rotator / Lightbar Senken Type LTF-2000 LED",
        watchHref: "https://www.tokopedia.com/agokigarage/lampu-rotator-lightbar-senken-type-ltf-2000-led-komplit",
        authorId: "Ochep",
        length: "2500000",
        category: "Accessories",
        pictureSrc : "http://ticket.citrarayawaterworld.com/img/lightbar.jpg"
    },
    {
        id: "4",
        title: "spion BMW e36",
        watchHref: "https://www.tokopedia.com/agokigarage/spion-bmw-e36",
        authorId: "Ochep",
        length: "1200000",
        category: "Sparepart",
        pictureSrc : "http://ticket.citrarayawaterworld.com/img/spion-bmw.jpg"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id === course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => course.id === courseId);
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingCourseIndex = courses.findIndex(course => course.id === courseId);
                
                const courseFound = Object.assign({}, courses[existingCourseIndex]);

                resolve(courseFound);

            }, delay);
        });
    }

}

export default CourseApi;

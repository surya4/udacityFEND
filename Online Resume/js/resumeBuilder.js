var bio = {
    "name": "Surya Singh",
    "role": "Web Developer",
    "contacts": {
        "mobile": "783-828-0376",
        "email": "surya2902@gmail.com",
        "github": "surya4",
        "twitter": "@surya2902",
        "blog": "theshayna.com",
        "location": "Bangalore"
    },
    "welcomeMessage": "Welcome back Surya!!",
    "skills": ["Web Development",
        "Git/Guthub",
        "BootStrap",
        "Java"
    ],
    "biopic": "images/fry.jpg"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var fomattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var fomattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var fomattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var fomattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var fomattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    $('#topContacts , #footerContacts').append(formattedMobile);
    $('#topContacts , #footerContacts').append(fomattedEmail);
    $('#topContacts , #footerContacts').append(fomattedTwitter);
    $('#topContacts , #footerContacts').append(fomattedGithub);
    $('#topContacts').append(fomattedBlog);
    $('#topContacts').append(fomattedLocation);

    $('#header').append(formattedImage);
    $('#header').append(formattedMessage);


    $('#header').append(HTMLskillsStart);
    for (skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $('#skills').append(formattedSkills);
    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "HackerRank",
        "title": "Campus Operations",
        "dates": "July 2015 - Present",
        "location": "Bangalore",
        "description": "Our mission is to build a meritocratic platform that makes" +
            " the world flat – where the only thing that matters is your actual objectively-measured " +
            "skill and not which school you went to or the companies you’ve been at, or your gender, or how" +
            " privileged you’ve been. Here at HackeRank I take care of all the campus activities."
    }, ]
};

work.display = function() {
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedworktitle = HTMLprojectTitle.replace("%data%", work.jobs[job].title);
        var formatEmployerTitle = formattedemployer + formattedworktitle;
        $(".work-entry:last").append(formatEmployerTitle);

        var formattedworkdate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedworklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formatteddescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedworkdate);
        $(".work-entry:last").append(formattedworklocation);
        $(".work-entry:last").append(formatteddescription);

    }
};

work.display();

var projects = {
    "projects": [{
        "title": "ZhaynZ",
        "dates": "Auguest 2013 - November 2014",
        "description": "Merged offline commerce system with online commerce system." +
            " Added multiple to features to make each customer move easily between offline to online and vice versa." +
            " Created a few features using JSP and Servlet so customer can test their product by themselves.",
        "images": ["images/zhay.jpg"]
    }, {
        "title": "MirrorSharing",
        "dates": "Feb 2014 - April 2014",
        "description": "A place through which people going through can share thier pain and lighten their heart.",
        "images": ["images/mirror.png"]
    }, {
        "title": "TheShayna",
        "dates": "June 2014 - July 2014",
        "description": "A common blog where anybody can share their knowledge with others.",
        "images": ["images/theshay.jpg"]
    }, {
        "title": "Hospital Management System",
        "dates": "March 2015 - May 2015",
        "description": "Single platform using Java and JavaScript to manage complete traction of Hospital." +
            " Developed a full-page map that take care of all medical and non medical usage." +
            " User can view the availability of products (retrieved by AJAX request to system).",
        "images": ["http://placehold.it/320x200"]
    }, ]
};

projects.display = function() {
    for (project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedprojecttitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedprojecttitle);

        var formattedprojectdate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedprojectdate);

        var formattedprojectdescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedprojectdescription);

        for (var i = 0; i < projects.projects[project].images.length; i++) {
        var formattedprojectimage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
        $(".project-entry:last").append(formattedprojectimage);
      }}
};


projects.display();

var education = {
    "schools": [{
        "name": "Ch. B.P. Govenment Enginnering College",
        "degree": "B.Tech",
        "dates": "Aug 2011 - Jun 2015",
        "location": "New Delhi",
        "majors": ["Information Technology"],
        "url": "http://www.gecdelhi.ac.in/"
    }, {
        "name": "Columbia Foundation School",
        "degree": "XII",
        "dates": "2010",
        "location": "New Delhi",
        "majors": ["Physics"],
        "url": "http://www.columbiaschool.in/"
    }, {
        "name": "Kendiya Vidyalaya",
        "degree": "X",
        "dates": "2008",
        "location": "Mau",
        "majors": ["Mathematics"],
        "url": "http://www.kvmau.org/"
    }, ],
    "onlineCourses": [{
        "title": "Git and GitHub",
        "school": "Udacity",
        "dates": "June 2016",
        "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    }, {
        "title": "Javascript Basics",
        "school": "Udacity",
        "dates": "June 2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, {
        "title": "HTML/CSS",
        "school": "Udacity",
        "dates": "June 2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud304"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "June 2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud882"
    }, {
        "title": "Intro to AJAX",
        "school": "Udacity",
        "dates": "June 2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud110"
    }, {
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "June 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, ]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (school = 0; school < education.schools.length; school++ ) {
        var formatname = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formatdegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formatDegreeSchool = formatname + formatdegree;
        $(".education-entry:last").append(formatDegreeSchool);

        var formatdates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formatdates);

        var formatlocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formatlocation);
        for (var i = 0; i < education.schools[school].majors.length; i++) {
        var formatmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
        $(".education-entry:last").append(formatmajor);
    }}
    $("#education").append(HTMLonlineClasses);
    for (course = 0; course < education.onlineCourses.length; course++ ) {
        $("#education").append(HTMLschoolStart);
        var formattitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formatschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var fortitileschool = formattitle + formatschool;
        $(".education-entry:last").append(fortitileschool);

        var formatonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formatonlinedates);

        var formatonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formatonlineurl);
    }
};

education.display();

$("#mapDiv").append(googleMap);


$(document).ready(function () {


    console.log("jQuery is ready!");


    // Task 1: Selectors and CSS

  
    $("h1").css("letter-spacing", "1px");


    $("#mainTitle").text("Welcome to My Portfolio");

 
    $(".studentName").css("color", "#f2c94c");

    $("#changeGreeting").click(function () {
        $("#mainTitle").text("Hello! Welcome to My Portfolio");
        $("#headline").text("I am learning jQuery and web development!");
    });


    $("#lightTheme").click(function () {
        $("body").removeClass("darkTheme");
        $("body").css({
            "background-color": "#f2f5f9",
            "color": "#333333"
        });
    });

    $("#darkTheme").click(function () {
        $("body").addClass("darkTheme");
        $("body").css({
            "background-color": "#1b1b1b",
            "color": "#eeeeee"
        });
    });


    // Task 2: Visibility Methods

    $("#hideButton").click(function () {
        $("#statusMessage, #funFacts").hide();
    });

    $("#showButton").click(function () {
        $("#statusMessage, #funFacts").show();
    });

    $("#toggleButton").click(function () {
        $("#statusMessage, #funFacts").toggle();
    });


    // Task 3: Fade Methods

    $("#fadeInButton").click(function () {
        $(".galleryImage").fadeIn(800);
    });

    $("#fadeOutButton").click(function () {
        $(".galleryImage").fadeOut(800);
    });

    $("#fadeToggleButton").click(function () {
        $(".galleryImage").fadeToggle(800);
    });


    // Task 4: Slide Methods

    
    $(".slidePanel").hide();

    $(".slideHeading").click(function () {
        $(this).next(".slidePanel").slideToggle(400);
    });

    $("#slideUpButton").click(function () {
        $(".slidePanel").slideUp(400);
    });

  
    $("#slideDownButton").click(function () {
        $(".slidePanel").slideDown(400);
    });

    $("#slideToggleButton").click(function () {
        $(".slidePanel").slideToggle(400);
    });


    // Task 5: Add and Remove Elements

  
    $("#addSkillButton").click(function () {
        let skill = $("#skillInput").val().trim();

        if (skill === "") {
            $("#skillMessage").text("Please enter a skill.");
            return;
        }

        $("#skillsList").append("<li></li>");
        $("#skillsList li").last().text(skill);

        $("#skillMessage").text("Skill added successfully.");
        $("#skillInput").val("");
    });

   
    $("#prependSkillButton").click(function () {
        let skill = $("#skillInput").val().trim();

        if (skill === "") {
            $("#skillMessage").text("Please enter a skill.");
            return;
        }

        let newSkill = $("<li></li>").text(skill);

        $("#skillsList").prepend(newSkill);

        $("#skillMessage").text("Skill added to the beginning.");
        $("#skillInput").val("");
    });

    $("#removeSkillButton").click(function () {
        if ($("#skillsList li").length > 0) {
            $("#skillsList li").last().remove();
            $("#skillMessage").text("Last skill removed.");
        } else {
            $("#skillMessage").text("There are no skills to remove.");
        }
    });


    // Task 6: Modifying Attributes

    let githubLinkChanged = false;

    $("#changeLinkButton").click(function () {

        if (githubLinkChanged === false) {
            $("#socialLink").attr("href", "https://www.linkedin.com/");
            $("#socialLink").text("My LinkedIn");

            $("#linkMessage").text("The link now points to LinkedIn.");

            githubLinkChanged = true;

        } else {

            $("#socialLink").attr("href", "https://github.com/Matiullah77/Forms-and-Validation.git");
            $("#socialLink").text("My GitHub");

            $("#linkMessage").text("The link now points to GitHub.");

            githubLinkChanged = false;
        }

    });


    // Task 7: Form Interaction

    $("#visitorName").on("input", function () {
        let name = $(this).val();

        if (name.trim() === "") {
            $("#nameOutput").text("Not entered yet");
        } else {
            $("#nameOutput").text(name);
        }
    });

    $("#visitorEmail").on("input", function () {
        let email = $(this).val();

        if (email.trim() === "") {
            $("#emailOutput").text("Not entered yet");
        } else {
            $("#emailOutput").text(email);
        }
    });


    // Task 8: Basic Animation

    let skillsAnimated = false;

    $("#animateSkillsButton").click(function () {

        if (skillsAnimated === false) {

            $("#htmlProgress").animate({
                width: "90%"
            }, 1000);

            $("#cssProgress").animate({
                width: "80%"
            }, 1000);

            $("#javascriptProgress").animate({
                width: "65%"
            }, 1000);

            skillsAnimated = true;

            $(this).text("Reset My Skills");

        } else {

            $(".skillProgress").animate({
                width: "0%"
            }, 1000);

            skillsAnimated = false;

            $(this).text("Animate My Skills");
        }

    });

});

// slick slider js
//mascot slider
$(document).ready(function() {
    $(".mascot-item-wrapper").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
    });
});

//subject areas slider
$(document).ready(function() {
    $(".subjects-area-wrapper").slick({
        dots: false,
        infinite: false,
        slidesPerRow: 3,
        rows: 2,
        slidesToShow: 6,
        slidesToScroll: 6,
    });
});

//Community Post slider
$(document).ready(function() {
    $(".community-posts-wrapper").slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

//Recent Post slider
$(document).ready(function() {
    $(".recent-posts-wrapper").slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
    //custom-arrow navigation
    $(document).ready(function() {
        $(".previous-slider").click(function() {
            $(".recent-posts-wrapper").slick("slickPrev");
        });

        $(".next-slider").click(function() {
            $(".recent-posts-wrapper").slick("slickNext");
        });
    });
});

//changing active tabs
function changeAtiveTab(event, tabID) {
    let element = event.target;
    while (element.nodeName !== "A") {
        element = element.parentNode;
    }
    ulElement = element.parentNode.parentNode;
    aElements = ulElement.querySelectorAll(".tabs-item > a");
    tabContents = document
        .getElementById("tabs-id")
        .querySelectorAll(".tab-content > div");
    for (let i = 0; i < aElements.length; i++) {
        aElements[i].classList.remove("active");
        tabContents[i].classList.add("hidden");
        tabContents[i].classList.remove("block");
    }

    element.classList.add("active");
    document.getElementById(tabID).classList.remove("hidden");
    document.getElementById(tabID).classList.add("block");
}
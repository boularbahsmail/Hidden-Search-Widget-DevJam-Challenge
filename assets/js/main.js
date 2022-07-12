let search_input = document.querySelector(".search-input");
let button = document.querySelector(".submit-button");

let isSearchWidgetOpen = false;

const toggleSearchWidget = (e) => {
    if (!isSearchWidgetOpen) {
        search_input.classList.add("open");
        button.classList.add("open");
        isSearchWidgetOpen = true;
    } else {
        search_input.classList.remove("open");
        button.classList.remove("open");
        isSearchWidgetOpen = false;
    }
}

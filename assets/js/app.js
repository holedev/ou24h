const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputSearch = $(".search-box__form-input");
const overplay = $(".overplay");
const headerRight = $(".header-right");
const menuRightItems = $$(".header-right__item");
const contactBtn = $(".contact-icon");
const formContact = $(".contact-form ");
const scrollTop = $(".scrollTop");
const headerMobile = $(".header-mobile");

if (headerRight) {
    //đóng, mở search pc
    closeSearch = function () {
        $(".search-box").style.display = "none";
        document.body.style.overflow = "auto";
    };
    openSearch = function () {
        $(".search-box").style.display = "flex";
        inputSearch.focus();
        document.body.style.overflow = "hidden";
    };

    //đóng mở menu mobile
    closeMenuMobile = function () {
        headerRight.classList.remove("active");
        overplay?.classList.remove("active");
        document.body.style.overflow = "auto";
    };

    showMenuMobile = function () {
        headerRight.classList.add("active");
        overplay?.classList.add("active");
        document.body.style.overflow = "hidden";
    };
}

if (headerMobile) {
    headerMobile.onclick = function () {
        if (headerRight.clientHeight == 0) {
            showMenuMobile();
        } else {
            closeMenuMobile();
        }
    };

    //menu onclick
    activeMenu = function (itemMenu) {
        if (!itemMenu.classList.contains("shop")) {
            closeMenuMobile();
        }
    };
    menuRightItems.forEach((item) => {
        item.onclick = function () {
            activeMenu(this);
        };
    });

    //scroll
    scrollToComponent = function (title, component) {
        title.onclick = function () {
            const scrollTop = component.offsetTop - 68;
            window.scroll({
                top: scrollTop,
            });
            activeMenu(this);
        };
    };
}

//mở menu con mobile
if ($(".shop")) {
    $(".shop").onclick = function () {
        const subMenu = $(".header-right__item-more-list");
        if (subMenu.clientHeight === 0) {
            subMenu.classList.add("active");
            $(".header-right__item-icon__add").style.display = "none";
            $(".header-right__item-icon__sub").style.display = "block";
        } else {
            $(".header-right__item-icon__add").style.display = "block";
            $(".header-right__item-icon__sub").style.display = "none";
            subMenu.classList.remove("active");
        }
    };
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
    return {
        handle() {
            const leftItems = $$(".main-left__item");
            const eventsNow = $$(".event-list--now .event-item");
            const achievementItems = $$(".achievement-item");

            leftItems.forEach((i) => {
                i.onclick = function () {
                    const activeItem = $(".main-left__item.active");
                    if (activeItem) activeItem.classList.remove("active");
                    this.classList.add("active");
                    if (this.classList.contains("main-left__item--event")) {
                        console.log("OK");
                        $(".main-right .event").style.display = "block";
                        $(".main-right .achievement").style.display = "none";
                    } else {
                        $(".main-right .event").style.display = "none";
                        $(".main-right .achievement").style.display = "block";
                    }
                };
            });

            hideOverplay = () => {
                $(".overplay").classList.remove("active");
            };

            showOverplay = () => {
                $(".overplay").classList.add("active");
            };

            showEditBox = () => {
                showOverplay();
                $(".box-event").classList.remove("active");
                $(".box-achievement").classList.remove("active");
                $(".box-edit").classList.add("active");
            };

            showEventBox = () => {
                showOverplay();
                $(".box-event").classList.add("active");
                $(".box-achievement").classList.remove("active");
                $(".box-edit").classList.remove("active");
            };

            showAchievementBox = () => {
                showOverplay();
                $(".box-event").classList.remove("active");
                $(".box-achievement").classList.add("active");
                $(".box-edit").classList.remove("active");
            };

            $(".submenu-item--edit").onclick = () => {
                showEditBox();
            };

            eventsNow.forEach((e) => (e.onclick = showEventBox));

            achievementItems.forEach((e) => (e.onclick = showAchievementBox));

            $$(".close-overplay").forEach((i) => (i.onclick = hideOverplay));
        },
        start() {
            this.handle();
        },
    };
})().start();

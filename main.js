const tabSwitcher = document.getElementById("tab-switcher");

const list = new LinkedListArrow();

const data = [
  {
    title: "Chrome",
    img: "https://www.freepnglogos.com/uploads/google-chrome-png-logo/google-chrome-2017-latest-version-png-logo-6.png",
  },
  {
    title: "Android Studio",
    img: "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-android-studio-appjoy-25.png",
  },
  {
    title: "Spotify",
    img: "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png",
  },
  {
    title: "Youtube",
    img: "https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png",
  },
  {
    title: "Instagram",
    img: "https://www.freepnglogos.com/uploads/download-instagram-png-logo-20.png",
  },
  {
    title: "Twitter",
    img: "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png",
  },
];

for (let i in data) {
  list.add({ id: i });
}

tabSwitcher.hidden = true;
let tabbable = false;

let point, children, offset;
setState();
document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "Control") {
    tabbable = true;
    point = list.head;
  }
  if (e.key == "a" && tabbable) {
    tabSwitcher.hidden = false;
    children[offset].classList.remove("sel");
    if (!point.next) {
      point = list.head;
      offset = 0;
    } else {
      point = point.next;
      offset++;
    }
    children[offset].classList.add("sel");
  }
});
document.addEventListener("keyup", function (e) {
  if (e.key === "Control") {
    tabbable = false;
    list.moveToFront(point);
    tabSwitcher.hidden = true;
    setState();
  }
});
function setState() {
  document.querySelector(".open-item").style.background = `url('${
    data[list.head.content.id].img
  }') no-repeat center center`;
  document.querySelector(".open-item").style.backgroundSize = "contain";

  tabSwitcher.innerHTML = "";
  let temp = list.head;
  do {
    tabSwitcher.innerHTML += `<li class="list-item" style="background: url('${
      data[temp.content.id].img
    }') no-repeat center center; background-size:contain"></li>`;
    temp = temp.next;
  } while (temp !== null);
  children = tabSwitcher.childNodes;
  console.log(children);
  children[0].classList.add("sel");
  offset = 0;
}

const calenderPicker = document.querySelector(".calenderContainer");
const calendar = document.querySelector(".calendarPicker");

const monthsName = document.querySelector(".month");
const daysName = document.querySelector(".day");
const dateNum = document.querySelector(".date");
const yearsName = document.querySelector(".year");

const date = new Date();
const currentMonth = date.getMonth();

monthsName.innerText = date.toLocaleString("en", {
  month: "long",
});
daysName.innerText = date.toLocaleString("en", {
  weekday: "long",
});
dateNum.innerText = date.getDate();
yearsName.innerText = date.getFullYear();

calendar.addEventListener("input", (event) => {
  const selectedDate = new Date(event.target.value);

  monthsName.innerText = selectedDate.toLocaleString("en", { month: "long" });
  daysName.innerText = selectedDate.toLocaleString("en", { weekday: "long" });
  dateNum.innerText = selectedDate.getDate();
  yearsName.innerText = selectedDate.getFullYear();
});

 
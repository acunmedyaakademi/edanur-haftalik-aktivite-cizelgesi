//Bir haftalık aktivite çizelgesi oluşturun. Kullanıcıdan her gün için bir gün adı ve o güne ait bir aktivite girilmesini isteyin. Girilen bilgileri bir diziye obje olarak kaydedin ve tüm çizelgeyi konsola yazdırın

let weeklySchedule = [];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < weekDays.length; i++) {
  let activity = prompt(`Write your activity for ${weekDays[i]}`);

  weeklySchedule[i] = {
    day: weekDays[i],
    activity: activity,
  };
}
console.log("Your weekly activity:");
for (let i = 0; i < weeklySchedule.length; i++) {
  console.log(`${weeklySchedule[i].day}: ${weeklySchedule[i].activity}`);
}

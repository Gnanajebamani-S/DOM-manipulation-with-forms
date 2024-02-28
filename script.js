var submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  var address = [];
  address.push(address1.value);
  address.push(address2.value);

  var gender = document.getElementsByName("gender");
  var genderValue;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderValue = gender[i].value;
    }
  }

  var food = document.getElementsByName("food");
  var foodList = [];
  var foodCount = 0;
  console.log(food);
  for (var i = 0; i < food.length; i++) {
    if (food[i].checked) {
      foodList.push(food[i].value);
      foodCount++;
    }
  }
  if (foodList.length >= 2) {
    result = foodList.join(", ");
  } else {
    result = alert("Choose atleast 2 options out of 5 in food");
  }

  createTable(
    fname.value,
    lname.value,
    address.join(", "),
    pin.value,
    genderValue,
    result,
    state.value,
    country.value
  );
  fname.value = "";
  lname.value = "";
  address1.value = "";
  address2.value = "";
  pin.value = "";
  gender.value = "";
  foodList = [];
  state.value = "";
  country.value = "";
});

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var address1 = document.getElementById("address1");
var address2 = document.getElementById("address2");
var pin = document.getElementById("pin");
var gender = document.getElementById("gender");
var food = document.getElementById("food");
var state = document.getElementById("state");
var country = document.getElementById("country");

function createTable(
  fname,
  lname,
  address,
  pincode,
  gender,
  food,
  state,
  country
) {
  var tbody = document.getElementById("tbody");
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  td1.innerHTML = fname;
  td2.innerHTML = lname;
  td3.innerHTML = address;
  td4.innerHTML = pincode;
  td5.innerHTML = gender;
  td6.innerHTML = food;
  td7.innerHTML = state;
  td8.innerHTML = country;

  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
  tbody.append(tr);
}

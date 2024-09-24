let donationBtn = document.querySelector(".donation_btn");
let histroyBtn = document.querySelector(".histroy_btn");
let donateBox = document.querySelectorAll(".donate-box");
let histroyBox = document.querySelectorAll(".histroy-box");
let amount = document.querySelector(".donate_amount span");
let donateCoinBox1 = document.querySelector(".donateCoinBox1 span");
let donateCoinBox2 = document.querySelector(".donate_coin_box2 span");
let donateCoinBox3 = document.querySelector(".donate_coin_box3 span");
let donateNowBtn1 = document.querySelector(".donate_now_btn1");
let donateNowBtn2 = document.querySelector(".donate_now_btn2");
let donateNowBtn3 = document.querySelector(".donate_now_btn3");
let inputBox1 = document.querySelector(".input_box_1");
let inputBox2 = document.querySelector(".input_box_2");
let inputBox3 = document.querySelector(".input_box_3");
const donateAmountBox1 = document.querySelector(".donate_coin span");
const donateAmountBox2 = document.querySelector(".donateCoinBox2 span");
const donateAmountBox3 = document.querySelector(".donateCoinBox3 span");
const histroyContent = document.querySelector(".histroy_wrapper");
let main = document.querySelector("main");

let bdt = 5000;
amount.innerText = `${bdt} BDT`;

let donetCoin1 = 0;
let donetCoin2 = 5000;
let donetCoin3 = 10000;
let donateAmount = 100;

donateCoinBox1.innerText = donetCoin1;
donateCoinBox2.innerText = `${donetCoin2} BDT`;
donateCoinBox3.innerText = donetCoin3;
donateAmountBox1.innerText = `${donateAmount} BDT`;

histroyBtn.addEventListener("click", function () {
  donationBtn.classList.remove("active");
  histroyBtn.classList.add("active");

  for (let i = 0; i < donateBox.length; i++) {
    donateBox[i].classList.add("active");
  }

  histroyContent.classList.add("active");
});

donationBtn.addEventListener("click", function () {
  donationBtn.classList.add("active");
  histroyBtn.classList.remove("active");

  for (let i = 0; i < histroyBox.length; i++) {
    histroyBox[i].classList.remove("active");
  }
  for (let i = 0; i < donateBox.length; i++) {
    donateBox[i].classList.remove("active");
  }

  histroyContent.classList.remove("active");
});

donateNowBtn1.addEventListener("click", function () {
  if (inputBox1.value <= 0) {
    inputBox1.value = 0;
  } else {
    bdt = bdt - inputBox1.value;
    console.log(bdt);
    amount.innerText = `${bdt} BDT`;
    donateAmount = donateAmount + parseInt(inputBox1.value);
    donateAmountBox1.innerText = `${donateAmount} BDT`;
    histroyContent.innerHTML += `
                                  <div class="histroy-box"><h2>${
                                    inputBox1.value
                                  } Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
                                    <p>Date : ${new Date()}
                                     </p>
                                  </div>`;
    alert(`Thank you for your donation ${inputBox1.value} tk`);
  }
  inputBox1.value = "";
});

donateNowBtn2.addEventListener("click", function () {
  if (inputBox2 <= 0) {
    inputBox2.value = 0;
  } else {
    bdt = bdt - inputBox2.value;
    amount.innerText = `${bdt} BDT`;
    donetCoin2 = donetCoin2 + parseInt(inputBox2.value);
    donateAmountBox2.innerText = `${donetCoin2} BDT`;
    histroyContent.innerHTML += `
                                <div class="histroy-box"><h2>${inputBox2.value} Aid for Injured in the Quota Movement</h2>
                                  <p>Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)
                                   </p>
                                </div>`;
    alert(`Thank you for your donation ${inputBox2.value} tk`);
  }
  inputBox2.value = "";
});

donateNowBtn3.addEventListener("click", function () {
  if (inputBox3.value <= 0) {
    inputBox3.value = 0;
  } else {
    bdt = bdt - inputBox3.value;
    amount.innerText = `${bdt} BDT`;
    donetCoin3 = donetCoin3 + parseInt(inputBox3.value);
    donateAmountBox3.innerText = `${donetCoin3} BDT`;
    histroyContent.innerHTML += `
                                <div class="histroy-box"><h2>${inputBox3.value} Donate for Flood Relief in Feni,Bangladesh</h2>
                                  <p>Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)
                                   </p>
                                </div>`;
    alert(`Thank you for your donation ${inputBox3.value} tk`);
  }
  inputBox3.value = "";
});

window.addEventListener("scroll", function () {
  console.log(scrollY > 100);
  if (scrollY > 100) {
    main.classList.add("active");
  } else if (scrollY === 0) {
    main.classList.remove("active");
  }
});

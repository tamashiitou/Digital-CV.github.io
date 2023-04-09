"use strict";

// Thông tin cơ bản
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
document
  .querySelector(`.email-input-btn`)
  .addEventListener(`click`, function () {
    if (document.querySelector(`.email-input`).value.match(emailRegex)) {
      document.querySelector(`.info-detail`).classList.remove(`d-none`);
      document.querySelector(`.info-request`).classList.add(`d-none`);
    } else {
      alert("Email không hợp lệ!");
    }
  });

// Jobs
const jobBodyList = document.querySelectorAll(`.job-body`);
const viewMoreBtn = document.querySelectorAll(`.view-more-btn`);
const jobDetailList = document.querySelectorAll(`.job-detail`);
const viewLessBtn = document.querySelectorAll(`.view-less-btn`);
for (let i = 0; i < viewMoreBtn.length; i++) {
  jobBodyList[i].addEventListener(`mouseenter`, function () {
    viewMoreBtn[i].classList.remove(`invisible`);
  });
  jobBodyList[i].addEventListener(`mouseleave`, function () {
    viewMoreBtn[i].classList.add(`invisible`);
  });
}
for (let i = 0; i < jobDetailList.length; i++) {
  viewMoreBtn[i].addEventListener(`click`, function () {
    jobDetailList[i].classList.remove(`d-none`);
    viewMoreBtn[i].classList.add(`d-none`);
    viewLessBtn[i].classList.remove(`d-none`); // đổi từ remove invisible
  });
}
for (let i = 0; i < jobDetailList.length; i++) {
  viewLessBtn[i].addEventListener(`click`, function () {
    jobDetailList[i].classList.add(`d-none`);
    viewLessBtn[i].classList.add(`d-none`);
    viewMoreBtn[i].classList.remove(`d-none`);
    viewMoreBtn[i].classList.add(`invisible`); //thêm 2 dòng mới
  });
}

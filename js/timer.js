const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

function toggleModal() {
  document.body.classList.toggle("modal-open");
  refs.modal.classList.toggle("is-hidden");
  refs.closeModalBtn.addEventListener("click", toggleModal);
}

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.days = document.querySelector(`${selector} span[data-value="days"]`);
    this.hours = document.querySelector(`${selector} span[data-value="hours"]`);
    this.mins = document.querySelector(`${selector} span[data-value="mins"]`);
    this.secs = document.querySelector(`${selector} span[data-value="secs"]`);
    this.start();
  }

  start() {
    const timer = setInterval(() => {
      this.targetDate = this.targetDate - 1;
      this.days.textContent = "00";
      this.hours.textContent = "00";
      this.mins.textContent = "00";
      if (this.targetDate > 0) {
        // this.days.textContent = this.pad(
        //   Math.floor(differenceInTime / (1000 * 60 * 60 * 24))
        // );
        // this.hours.textContent = this.pad(
        //   Math.floor(
        //     (differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        //   )
        // );
        // this.mins.textContent = this.pad(
        //   Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60))
        // );
        this.secs.textContent = this.targetDate;
      } else {
        this.secs.textContent = "00";
        toggleModal();
        clearInterval(timer);
      }
    }, 1000);
  }
  // pad(value) {
  //   return String(value).padStart(2, "0");
  // }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: 60,
});

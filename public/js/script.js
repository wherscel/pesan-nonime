const btn = document.querySelector(".btn-pesan");
const container = document.querySelector(".feedBack-wrap");
const btnKomen = document.querySelector(".btn-komen");

const globalEvent = (selector, eventListener, callback) => {
  window.addEventListener(eventListener, function (e) {
    if (e.target === selector) callback(e);
  });
};

const balasanContent = (komentar) => {
  return `<div class="card card-pesan">
            <span style="color: rgb(53, 148, 214)">Lihat Detail</span>
            <p class="pesan">${komentar}</p>
            <div class="balasan"></div>
            <form action="">
              <div class="komen-wrapper">
                <input type="text" placeholder="Tulis Komen" />
                <button type="button" class="btn-komen">Kirim</button>
              </div>
            </form>
          </div>
          `;
};

const clear = (text) => {
  text.value = "";
};

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-komen")) {
    // Ambil element, beserta value nya
    const komentxt = e.target.parentElement.parentElement[0];
    const balasanP = document.createElement("p");
    const balasanWrap = e.target.parentElement.parentElement.previousElementSibling;

    const element = balasanWrap.appendChild(balasanP);
    element.insertAdjacentText("beforeend", komentxt.value);

    clear(komentxt);
  }
});

globalEvent(btn, "click", () => {
  // Ambil element pesan
  const textArea = document.querySelector(".pesan-user");

  /*
   * Cek apabila pesan text nya tidak ada
   * Jika tidak ada, kembalikan pesan error,
   * Dan jika ada, masuk ke program berikutnya.
   */
  if (textArea.value === "") {
    textArea.classList.add("error");
    return;
  }

  // Masukan element yang tadi sudah diinputkan kedalam content
  container.insertAdjacentHTML("beforeend", balasanContent(textArea.value));
  clear(textArea);
  textArea.classList.remove("error");
});

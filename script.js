let mybtn = document.querySelector("#add");
let qtt = document.querySelector("#qnt");

mybtn.addEventListener("click", function () {
    var qtn = parseInt(qtt.textContent);
    qtn = qtn + 1;
    qtt.textContent = qtn;
});

let btn = document.querySelector("#remove");

btn.addEventListener("click", function () {
    var qtn = parseInt(qtt.textContent);
    if (qtn > 0) {
        qtn = qtn - 1;
        qtt.textContent = qtn;
    } else {
        let itm = document.querySelector('#item1');
        itm.remove();
    }
});





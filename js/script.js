const nodeList = document.querySelectorAll(".contact-item");

let pageNumber = nodeList.length % 10 === 0 ? Math.floor(nodeList.length / 10) : Math.floor(nodeList.length / 10) + 1;
let pageUl = document.querySelector(".pagination");
for(let i=10;i<nodeList.length;i++){
    nodeList[i].style.display = "none";
}

for (let i = 1; i <= pageNumber; i++) {
    let pageLi = document.createElement("li");
    pageUl.appendChild(pageLi);
    let pageLink = document.createElement("a");
    pageLink.innerText = i;
    pageLi.appendChild(pageLink);
    pageLi.addEventListener("click", function () { show(this.innerText, nodeList); });
}
 document.querySelector(".pagination li a").tabIndex= "-1";
 document.querySelector(".pagination li a").focus();




function show(number, page) {
    let begin = 10 * (number - 1);
    for(let i=0;i<page.length;i++){
        page[i].style.display = "none";
    }
    for(let i=0;i<10;i++){
        page[begin+i].style.display = "block";
    }
}

   

















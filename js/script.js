window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let loadingGif = document.querySelector("#loading");

window.addEventListener("scroll", scrollToEndOfPage)

function scrollToEndOfPage(){

    if ((document.documentElement.clientHeight + document.documentElement.scrollTop) > (document.documentElement.scrollHeight - 1)){
        getData();
    }
}

function getData(){

        loadingGif.classList.remove("invisible");

        fetch('https://akademia108.pl/api/ajax/get-users.php', {
            method: 'GET',
            mode: 'cors'
        })
            .then(data => data.json())
            .then((data) => {
                
                for (i=0; i < data.length; i++){
                    let idParagraph = document.createElement('p');
                    idParagraph.innerHTML = ` User ID: ${data[i].id}`;
                    document.body.insertAdjacentElement("beforeend", idParagraph);
                    let nameParagraph = document.createElement('p');
                    nameParagraph.innerHTML = ` User Name: ${data[i].name}`;
                    document.body.insertAdjacentElement("beforeend", nameParagraph);
                    let websiteParagraph = document.createElement('p');
                    websiteParagraph.innerHTML = ` User Name: ${data[i].website}<br>--------`;
                    document.body.insertAdjacentElement("beforeend", websiteParagraph);
                }

                loadingGif.classList.add("invisible");

            });
}

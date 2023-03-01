fetch("api/teams")
    .then(response => response.json())
    .then(result => {
        const teamWrapperDiv = document.getElementById("teams")

        result.data.forEach(team => {
            const teamDiv = document.createElement("div");

            const teamName = document.createElement("name");
            teamName.innerText = team.name;
            teamDiv.appendChild(teamName);

            const imgElement = document.createElement("img")
            imgElement.setAttribute("src", team.imgURL);
            teamDiv.appendChild(imgElement)

            teamWrapperDiv.appendChild(teamDiv)
        })
    })

const teamSelect1 = document.querySelector('#teamSelect1');

fetch("api/teams")
    .then(respone => respone.json())
    .then(result => {
        result.data.forEach(team => {
            const option = document.createElement('option');
            option.text = team.name;
            option.value = team.id;
            teamSelect1.add(option);
        });
    });

const teamSelect2 = document.querySelector('#teamSelect2');

fetch("api/teams")
    .then(respone => respone.json())
    .then(result => {
        result.data.forEach(team => {
            const option = document.createElement('option');
            option.text = team.name;
            option.value = team.id;
            teamSelect2.add(option);
        });
    });


const countDownDiv = document.getElementById("countdown")

const countDown = () => {
    const actualDate = new Date().getTime();
    const championsLeagueDate = new Date("June 10, 2023 21:00:00").getTime();
    const timeDifference = championsLeagueDate - actualDate;

    //inspiration from here https://www.w3schools.com/howto/howto_js_countdown.asp
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countDownDiv.innerHTML = `There is ${days}d ${hours}h ${minutes}m ${seconds}s until the Champions League final!`;

}

setInterval(countDown, 1000)

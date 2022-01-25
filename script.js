function upgrade()
{
    this.textContent = (parseInt(this.textContent)+1).toString();
}

const players = document.querySelectorAll(".counter")

players.forEach(player => player.addEventListener("click", upgrade));
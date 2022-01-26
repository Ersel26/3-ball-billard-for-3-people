const counts = Array.from(document.querySelectorAll(".counter"));

function increment(n)
{
    counts[n].textContent = (parseInt(counts[n].textContent)+1).toString();
}

function decrement(n)
{
    counts[n].textContent = (parseInt(counts[n].textContent)-1).toString();
}
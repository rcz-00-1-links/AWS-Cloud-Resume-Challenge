const counter = document.querySelector("viewcount");
async function updateCounter() {
    let response = await fetch("https://lffsxmx3cyeqxiwl6uhuqdkycu0skwvx.lambda-url.ap-southeast-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
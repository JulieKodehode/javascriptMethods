const myEmojis = ["👩🏻‍💻", "🥱", "🍔"];

// This function takes the emoji container and display the emojies
function renderEmojis() {
	const emojiContainer = document.getElementById("emojiContainer");
	emojiContainer.innerHTML = "";
	for (let i = 0; i < myEmojis.length; i++) {
		const emoji = document.createElement("span");
		emoji.textContent = myEmojis[i];
		emojiContainer.append(emoji);
	}
}

renderEmojis();

// This function adds a emoji to the back
const pushBtn = document.getElementById("pushButton");
pushBtn.addEventListener("click", function () {
	const emojiInput = document.getElementById("emojiInput");
	if (emojiInput.value) {
		myEmojis.push(emojiInput.value);
		emojiInput.value = "";
		renderEmojis();
	}
	console.log("Adds emoji to the back");
});

// This function adds a emoji to the front
const unshiftBtn = document.getElementById("unshiftButton");
unshiftBtn.addEventListener("click", function () {
	const emojiInput = document.getElementById("emojiInput");
	if (emojiInput.value) {
		myEmojis.unshift(emojiInput.value);
		emojiInput.value = "";
		renderEmojis();
	}
	console.log("Adds emoji to the front");
});

// This function removes a emoji to the back
const popBtn = document.getElementById("popButton");
popBtn.addEventListener("click", function () {
	myEmojis.pop();
	renderEmojis();
	console.log("Removes emoji to the back");
});

// This function adds a emoji to the front
const shiftBtn = document.getElementById("shiftButton");
shiftBtn.addEventListener("click", function () {
	myEmojis.shift();
	renderEmojis();
	console.log("Removes emoji to the front");
});

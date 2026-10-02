const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const currentYear = document.querySelector("#current-year");

menuToggle.addEventListener("click", () => {
	const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
	menuToggle.setAttribute("aria-expanded", String(!isExpanded));
	menuToggle.setAttribute("aria-label", isExpanded ? "მენიუს გახსნა" : "მენიუს დახურვა");
	navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
	if (event.target.closest("a")) {
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", "მენიუს გახსნა");
		navigation.classList.remove("is-open");
	}
});

contactForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const formData = new FormData(contactForm);
	const subject = encodeURIComponent(`ახალი პროექტი — ${formData.get("name")}`);
	const body = encodeURIComponent(
		`სახელი: ${formData.get("name")}\nელფოსტა: ${formData.get("email")}\n\n${formData.get("message")}`
	);

	formStatus.textContent = "ელფოსტის აპს ვხსნით შეტყობინების გასაგზავნად.";
	window.location.href = `mailto:hello@forma.ge?subject=${subject}&body=${body}`;
});

currentYear.textContent = new Date().getFullYear();

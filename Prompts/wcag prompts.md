make one interactive and perfectly keyboard accessble html example that explains keyubopard navigation perfectly.
use below code . combine it and give me perfect example that includes all.

<div role="button" tabindex="0" onclick="submitForm()" onkeydown="if(event.key==='Enter'){submitForm()}">
    Submit
</div>
🚨 Don't remove focus outlines! It makes navigation impossible for keyboard users.

✅ Correct Approach: Use a Visible Focus Style
button:focus, a:focus, input:focus {
    outline: 3px solid blue;
}

// Manage Keyboard Focus in Modals & Popups
<button id="openModal">Open Modal</button>

<div id="modal" role="dialog" aria-labelledby="modalTitle" class="hidden">
    <h2 id="modalTitle">Modal Window</h2>
    <p>This is a keyboard-accessible modal.</p>
    <button id="closeModal">Close</button>
</div>

<script>
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const modal = document.getElementById("modal");

    openModalBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.setAttribute("tabindex", "-1");
        modal.focus(); // Move focus to the modal
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        openModalBtn.focus(); // Return focus to the button
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeModalBtn.click(); // Close on Escape key
    });
</script>

// Make Dropdowns & Menus Keyboard-Friendly
<button id="menuButton" aria-haspopup="true" aria-expanded="false">Menu</button>
<ul id="menuList" class="hidden" role="menu">
    <li><a href="#" role="menuitem">Item 1</a></li>
    <li><a href="#" role="menuitem">Item 2</a></li>
</ul>

<script>
    const menuButton = document.getElementById("menuButton");
    const menuList = document.getElementById("menuList");

    menuButton.addEventListener("click", () => {
        const expanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", !expanded);
        menuList.classList.toggle("hidden", expanded);
        if (!expanded) menuList.querySelector("a").focus(); // Move focus to first item
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            menuButton.setAttribute("aria-expanded", "false");
            menuList.classList.add("hidden");
            menuButton.focus(); // Return focus to button
        }
    });
</script>
// Use Skip Links for Faster Navigation
<a href="#mainContent" class="skip-link">Skip to main content</a>

<main id="mainContent">
    <h1>Welcome</h1>
</main>

<style>
    .skip-link {
        position: absolute;
        top: -40px;
        left: 10px;
        background: #000;
        color: #fff;
        padding: 8px;
    }
    .skip-link:focus {
        top: 10px;
    }
</style>
// Ensure aria-keyshortcuts for Custom Keyboard Controls
<input type="text" id="search" aria-keyshortcuts="Control+/">

<script>
    document.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.key === "/") {
            document.getElementById("search").focus();
        }
    });
</script>


document.addEventListener("DOMContentLoaded", function() {
    const articleForm = document.getElementById("articleForm");
    const articleList = document.getElementById("article-section");

    articleForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Untuk mendapatkan value dari articleTitle, articleImageURL, dan articleContent
        const articleTitle = document.getElementById("articleTitle").value;
        const articleImageURL = document.getElementById("articleImageURL").value;
        const articleContent = document.getElementById("articleContent").value;

        // Untuk publish time berdasarkan `Time.Now()`
        const currentTime = new Date();
        const publishTime = currentTime.toLocaleString();

        // Untuk membuat artikel baru yang bertambah pada section
        const articleCard = document.createElement("div");
        articleCard.className = "card mb-3";
        articleCard.innerHTML = `
            <div class="row g-0">
                <div class="col-md-2">
                    <img src="${articleImageURL}" class="img-fluid rounded-start article-img">
                    </div>
                    <div class="col-md-10">
                        <div class="card-body">
                            <h5 class="card-title">${articleTitle}</h5>
                            <p class="card-text"><small class="text-body-secondary">published at: ${publishTime}</small></p>
                            <p class="card-text">${articleContent}</p>
                            <button class="btn btn-danger deleteBtn">Delete</button>
                        </div>
                    </div>
                </div>
        `;

        // Untuk menambah artikel ke article list
        articleList.appendChild(articleCard);

        // Form akan kembali dikosongkan
        articleForm.reset();
    });

        // Menambahkan event listener to delete buttons 
        articleList.addEventListener("click", function(e) {
            if (e.target.classList.contains("deleteBtn")) {
                // Untuk menemukan parent element terdekat dengan class "card" dan menghapusnya
                const articleCard = e.target.closest(".card");
                if (articleCard) {
                    articleCard.remove();
                }
            }
        });
});

    const deleteButton = document.querySelectorAll(".deleteBtn");

    deleteButton.forEach(function (deleteButton) {
        deleteButton.addEventListener("click", function() {
            // Untuk menemukan parent element terdekat dengan class "card" dan menghapusnya
            const articleCard = deleteButton.closest(".card");
            if (articleCard) {
                articleCard.remove();
            }
        });
    });
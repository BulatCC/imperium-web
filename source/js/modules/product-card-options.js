const productCards = document.querySelectorAll('[data-produt-card]');

export const productCardoptions = () => {
    const MAX_PREVIEWS = 7;

    // меняет картинку по клику на превью
    productCards[0] && productCards.forEach(card => {
        const cardImg = card.querySelector('[data-product-card-img]');
        const previews = card.querySelectorAll('[data-choice]');
        const showAllButton = card.querySelector('[data-show-all-preview]');

        previews.forEach((preview, i) => {
            // скрывает не поместившиеся превьюшки
            if (previews.length > MAX_PREVIEWS && i > 5) {
                preview.classList.add('hidden');
                showAllButton.classList.remove('hidden');
                showAllButton.addEventListener('click', () => {
                    previews.forEach(previewItem => previewItem.classList.remove('hidden'));
                    showAllButton.remove();
                });
            }
            preview.addEventListener('click', () => {
                const dataValues = JSON.parse(preview.dataset.choice);
                cardImg.src = dataValues.imgLink;
                previews.forEach(previewImg => previewImg.classList.remove('active'));
                preview.classList.add('active');
            });
        });
    });
};

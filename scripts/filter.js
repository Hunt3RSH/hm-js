function app() {
    const buttons = document.querySelectorAll(`.pbuttons`)
    const cards = document.querySelectorAll (`.grid-item`)

    function filter (category, items) {
        items.forEach((item) => {
            const isItemsFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === `all`
            if (isItemsFiltered && !isShowAll) {
                item.classList.add(`anime`)
            } else {
                item.classList.remove(`hide`)
                item.classList.remove(`anime`)
            }
        })
    }
    function changeActivePosition(activeItem){
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('current');
        }
        activeItem.classList.add('current');
    };
    
    buttons.forEach((button) => {
        button.addEventListener(`click`, () => {
            changeActivePosition(button)
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach ((card) => {
        card.ontransitionend = function() {
            if (card.classList.contains(`anime`)) {
                card.classList.add(`hide`)
            }
        }
    }
    )
}
app()
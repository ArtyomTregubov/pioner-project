class Card {
    constructor(name, link, alt, selectorTemplate) {
        this.name = name
        this.link = link
        this.alt = alt
        this.dom_template = document.querySelector(selectorTemplate)
    }

    create() {
    const contentTemplate = this.dom_template.content

    const productsCard = contentTemplate.querySelector('.products__card')

    const cloneNodeProductsCard = productsCard.cloneNode(true)

    const cardImageDom = cloneNodeProductsCard.querySelector('.products__card-image')

    const cardNameDom = cloneNodeProductsCard.querySelector('.products__card-title')

    cardImageDom.src = this.link

    cardImageDom.alt = this.alt

    cardNameDom.textContent = this.name

    return cloneNodeProductsCard
    }
}
const contenedor_cards = document.getElementById('contenedor-cards')

// Los datos son sacados del archivo data.js
cardsData.map((data, index) => {
  const template = `
    <li class="card-section__card">
      <a
        href="${data.url}"
        class="card"
        target="_blank"
      >

        <div class="card__title">
          <div class="card__icon">
            ${icons[index]}
          </div>
          
          <h3>${data.title}</h3>
          <time datetime="${data.date.datetime}">${data.date.text}</time>
        </div>

        <div class="card__description">
          <p>
            ${data.description}
          </p>
        </div>
      </a>
  </li>`
  contenedor_cards.innerHTML += template
})

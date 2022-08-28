export function generateMarkupModalInfo() {
return `<div class="film-screen"></div>
      <div class="film-container--descr">
        <h2 class="film-title">Test</h2>
        <table class="film-description">
          <tr>
            <th class="title-description">Vote / Votes</th>
            <td>
              <span class="description-vote">0.0</span> /
              <span class="description-votes">1000</span>
            </td>
          </tr>
          <tr>
            <th class="title-description">Popularity</th>
            <td>00</td>
          </tr>
          <tr>
            <th class="title-description">Original Title</th>
            <td class="title-original-description">test</td>
          </tr>
          <tr>
            <th class="title-description">Genre</th>
            <td>test</td>
          </tr>
        </table>
        <p class="film-delineation--title">About</p>
        <p class="film-delineation">
          Lorem sit consectetur adipisicing elit. Commodi, facere officia illum
          porro nobis eius temporibus doloremque rem molestiae voluptatum
          quaerat laborum dolore ipsum placeat ab asperiores suscipit natus
          accusantium facilis optio aut distinctio voluptates? Pariatur odio qui
          repellat neque alias officia. Quam molestias et consequuntur,
          inventore quis iusto odit.
        </p>
        <div class="film-description--btns">
          <button
            class="film-description--btn js-btn__info--watched"
            type="button"
          >
            add to Watched
          </button>
          <button
            class="film-description--btn js-btn__info--queue"
            type="button"
          >
            add to queue
          </button>
        </div>
      </div>`
};

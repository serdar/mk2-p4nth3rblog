const AboutTableOfContents = require("../_components/aboutTableOfContents");
const OpenGraph = require("../../lib/openGraph");

const pageTitle = "Things whitep4nth3r uses for coding, streaming, and everything else";

var md = require("markdown-it")({
  html: true,
});

exports.data = {
  layout: "base.html",
  title: pageTitle,
  metaDescription:
    "I receive a lot of questions on stream about my setup and what I use. So here's a (probably very incomplete) list!",
  openGraphImageUrl: OpenGraph.generateImageUrl({ title: pageTitle }),
  openGraphImageAlt: OpenGraph.generateImageAlt(pageTitle),
  openGraphImageWidth: OpenGraph.imageWidth,
  openGraphImageHeight: OpenGraph.imageHeight,
};

exports.render = function (data) {
  const { categories, things } = data;

  return /* html */ `
      <div class="twoColumnWide__header">
        <h1 class="twoColumnWide__headerTitle">things <span class="colorHighlight">I use</span></h1>
      </div>

      <div class="twoColumnWide__container">
        <aside class="twoColumnWide__aside">
          <div class="twoColumnWide__asideStickyGroup">
            ${AboutTableOfContents({ onUses: true, categories })}
          </div>
        </aside>

        <div class="twoColumnWide__content">
          <aside class="twoColumnWide__inlineAside">
            ${AboutTableOfContents({ onUses: true, categories })}
          </aside>

              <p class="uses__intro">I receive a lot of questions on stream about my setup and what I use. Here's a (probably very incomplete) list to make it easier to share.</p>

              ${categories
                .map(
                  (cat) => `
                <section id="${cat}">
                  <div class="uses__sectionHeader">
                    <h2 class="uses__sectionHeaderTitle">${cat}</h2>
                  </div>
                  <ol class="uses__list">
                  ${things[cat]
                    .map(
                      (thing) =>
                        `
                      <li class="uses__listItem">
                        <div>
                          <h3 class="uses__listItemName uses__listItemName--small">${thing.name}</h3>
                          <img class="uses__listItemImg" src="${thing.image.url}?w=200" alt="${
                          thing.image.description
                        } height="${thing.image.height}" width="${thing.image.width}" />
                        </div>
                        <div>
                          <h3 class="uses__listItemName uses__listItemName--large">${thing.name}</h3>
                          <div class="uses__listItemDesc">${md.render(thing.description)}</div>
                          ${
                            thing.link
                              ? `<a href="${thing.link}" class="uses__listItemLink" target="_blank" rel="nofollow noreferrer">More <span class="uses__listItemLink--sr">${thing.name}</span> details <span class="colorHighlight" role="presentation">→</span></a>`
                              : ""
                          }
                        </div>
                      </li>
                    `,
                    )
                    .join("")}
                  </ol>
                </section>`,
                )
                .join("")}

        </div>
      </div>
  `;
};

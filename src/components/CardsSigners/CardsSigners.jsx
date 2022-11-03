import React from "react";

const DUMMY_DATA = [
  {
    text: "Nullam ante mi, ultrices eget cursus et, dignissim sed odio. Duis sollicitudin purus in sem condimentum, ut tristique eros commodo. Vestibulum at neque sed massa rhoncus euismod a sed...",
    name: "Anthony Hind",
  },
  {
    text: "Nullam ante mi, ultrices eget cursus et, dignissim sed odio. Duis sollicitudin purus in sem condimentum, ut tristique eros commodo. Vestibulum at neque sed massa rhoncus euismod a sed...",
    name: "Marine Moore",
  },
  {
    text: "Vestibulum at neque sed massa rhoncus euismod a sed nunc. Sed dolor ligula, semper a malesuada a, malesuada consequat lectus.",
    name: "Diane Moore",
  },
  {
    text: "Sed euismod velit non semper malesuada. Vestibulum cursus lacus vitae tellus sodales, ac sollicitudin nisl bibendum. Donec fermentum orci ut eleifend scelerisque.",
    name: "Charlie Black",
  },
  {
    text: "Nullam ante mi, ultrices eget cursus et, dignissim sed odio. Duis sollicitudin purus in sem condimentum, ut tristique eros commodo. Vestibulum at neque sed massa rhoncus euismod a sed...",
    name: "Anthony Hind",
  },
  {
    text: "Nullam ante mi, ultrices eget cursus et, dignissim sed odio. Duis sollicitudin purus in sem condimentum, ut tristique eros commodo. Vestibulum at neque sed massa rhoncus euismod a sed...",
    name: "Marine Moore",
  },
  {
    text: "Vestibulum at neque sed massa rhoncus euismod a sed nunc. Sed dolor ligula, semper a malesuada a, malesuada consequat lectus.",
    name: "Diane Moore",
  },
  {
    text: "Sed euismod velit non semper malesuada. Vestibulum cursus lacus vitae tellus sodales, ac sollicitudin nisl bibendum. Donec fermentum orci ut eleifend scelerisque.",
    name: "Charlie Black",
  },
];

const CardsSigners = () => {
  return (
    <>
      <h5 className="text-left">The following people have signed this card:</h5>
      <br />

      <div className="envelope-messages masonry masonry--v">
        {DUMMY_DATA.map((el, idx) => {
          return (
            <div
              className="card masonry-brick masonry-brick--v"
              key={"name" + idx}
            >
              <p className="font-square-peg">{el.text}</p>
              <strong>{el.name}</strong>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardsSigners;

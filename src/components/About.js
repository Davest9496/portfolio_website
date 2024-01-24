import { MdArrowOutward } from "react-icons/md";

export function About() {
  return (
    <article id="about">
      <h2 className="secondary-header">about</h2>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <br />
      <p>
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have
        evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like). Where does it come from? Contrary to
        popular belief, Lorem Ipsum is not simply random text. It has roots in a
        piece of classical Latin literature from 45 BC, making it over 2000
        years old.
      </p>
      <br />
      <h3 className="text-highlight">
        View resume here <MdArrowOutward />
      </h3>
    </article>
  );
}

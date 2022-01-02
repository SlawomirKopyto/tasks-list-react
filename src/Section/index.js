import "./style.css"

const Section = ({title, body, extraHeaderContent}) => (
    <section className="section">
      <div className="section__header">
        <h3>{title}</h3>
        {extraHeaderContent}
      </div>
      <div className="section__body">
        {body}
      </div>
    </section>
);

export default Section;
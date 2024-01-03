import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <div
      className="mx-auto mt-8 rounded-lg pl-0 box-border md:mt-4
"
    >
      <h2 className="text-center text-5xl font-bold m-0 text-darkFont md:text-3xl">
        {title}
      </h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

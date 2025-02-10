import PropTypes from 'prop-types';

function ProtectedRoute({ children }) {
  return <div>{children}</div>;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

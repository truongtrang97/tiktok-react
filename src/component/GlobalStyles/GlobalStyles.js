import './GlobalStyles.scss';
// import React from 'react';
import PropTypes from 'prop-types';
function GlobalStyles({ children }) {
    return children;
    // return React.Children.only(children);
    // trường hợp muốn truyền vào duy nhất 1 children
}
GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;

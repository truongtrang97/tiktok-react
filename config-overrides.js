/* config-overrides.js */

// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
//   }

//  create-react-app không log file bablelrc được (k tự động nộp file ni vào cấu hình webpack được) nên phải cấu hình lại ở đây


const { override, useBabelRc } = require('customize-cra');
module.exports = override(
    // module.exports: tương ứng với export default của ES6
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
);

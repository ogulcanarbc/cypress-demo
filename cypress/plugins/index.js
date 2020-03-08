const cypressConfigResolver = require("../config/cypress_config_resolver");

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    return cypressConfigResolver;

}

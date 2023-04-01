const contrato = artifacts.require("smartTrans");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(contrato);
  };
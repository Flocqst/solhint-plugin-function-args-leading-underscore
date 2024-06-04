class FunctionArgsLeadingUnderscore {
  constructor(reporter, config) {
    this.ruleId = 'function-args-leading-underscore';

    this.reporter = reporter;
    this.config = config;
  }

  FunctionDefinition(node) {
    node.parameters.forEach((parameter) => {
      if (!parameter.name.startsWith('_')) {
        this.error(parameter, 'Function parameter name must be prefixed with _')
      }
    })
  }

}

module.exports = FunctionArgsLeadingUnderscore;
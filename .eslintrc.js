//Помимо любых шаблонов в .eslintignore файле, ESLint всегда следует нескольким неявным правилам игнорирования, даже если --no-ignore флаг передан. 
//Неявные правила заключаются в следующем: node_modules/ игнорируется. Поэтому не добавила его в .eslintignore
module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 
          'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 2018
  },
  plugins: ['@typescript-eslint',
          'jest'],
  rules: {
    "@typescript-eslint/no-var-requires": ["off"]
  },
};

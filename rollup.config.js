import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/NotificationToaster.js',
  format: 'umd',
  moduleName: 'NotificationToaster',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  globals: {
    react: 'React',
    immutable: 'immutable',
    'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup'
  },
  dest: 'dist/NotificationToaster.js'
}


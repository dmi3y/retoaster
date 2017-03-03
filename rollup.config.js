import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import precss from 'precss'
import autoprefixer from 'autoprefixer'

export default {
  format: 'umd',
  moduleName: 'NotificationToaster',
  plugins: [
    postcss({
      plugins: [
        precss(),
        autoprefixer()
      ]
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  globals: {
    'react': 'React',
    'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup'
  }
}

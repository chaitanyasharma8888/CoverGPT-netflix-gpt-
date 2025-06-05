module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-normalize',
      {
        allowDuplicates: false,
      },
    ],
    'tailwindcss',
    [
      'autoprefixer',
      {
        flexbox: 'no-2009',
      },
    ],
  ],
}
// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = './src';
const buildFolder = './dist';

export const path = {
   build: {
      html: `${buildFolder}/`,
      css: `${buildFolder}/css/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
      js: `${buildFolder}/js/`,
      files: `${buildFolder}/files/`,
   },
   src: {
      html: `${srcFolder}/*.html`,
      scss: `${srcFolder}/scss/style.scss`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      svgicons: `${srcFolder}/svgicons/*.svg`,
      js: `${srcFolder}/js/main.js`,
      files: `${srcFolder}/files/**/*.*`,
   },
   watch: {
      html: `${srcFolder}/**/*.html`,
      scss: `${srcFolder}/scss/**/*.scss`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      svgicons: `${srcFolder}/svgicons/*.svg`,
      js: `${srcFolder}/js/**/*.js`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: buildFolder,
   srcFolder: srcFolder,
   buildFolder: buildFolder,
   rootFolder: rootFolder,
   ftp: ''
}
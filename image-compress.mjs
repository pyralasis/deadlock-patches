import imagemin from 'imagemin';
import pngquant from 'imagemin-pngquant';
import svgo from 'imagemin-svgo';


const files = await imagemin(['dist/backgrounds/*.{jpg,jpeg,png,svg}'], {
    destination: 'dist/backgrounds',
    plugins: [
        pngquant({ quality: [0.6, 0.8] }),
    ],
});

const files2 = await imagemin(['dist/hero_icons/*.{jpg,jpeg,png,svg}'], {
    destination: 'dist/hero_icons',
    plugins: [
        pngquant({ quality: [0.6, 0.8] }),
        svgo()
    ],
});

const files3 = await imagemin(['dist/nameplates/*.{jpg,jpeg,png,svg}'], {
    destination: 'dist/nameplates',
    plugins: [
        pngquant({ quality: [0.6, 0.8] }),
        svgo()
    ],
});

console.log(`Optimized ${files.length} images`);
console.log(`Optimized ${files2.length} images`);
console.log(`Optimized ${files3.length} images`);
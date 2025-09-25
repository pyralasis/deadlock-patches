import imagemin from 'imagemin';
import pngquant from 'imagemin-pngquant';
import svgo from 'imagemin-svgo';
import webp from 'imagemin-webp';

async function optimizeImages() {
    const files = await imagemin(['dist/backgrounds/*.{jpg,jpeg,png,svg}'], {
        destination: 'dist/backgrounds',
        plugins: [
            pngquant({ quality: [0.6, 0.8] }),
        ],
    });

    const filesWebp = await imagemin(['dist/backgrounds/*.png'], {
        destination: 'dist/backgrounds',
        plugins: [
            webp({ quality: 75 })
        ]
    });

    const files2 = await imagemin(['dist/hero_icons/*.{jpg,jpeg,png,svg}'], {
        destination: 'dist/hero_icons',
        plugins: [
            pngquant({ quality: [0.6, 0.8] }),
            svgo()
        ],
    });

    const files2Webp = await imagemin(['dist/hero_icons/*.png'], {
        destination: 'dist/hero_icons',
        plugins: [
            webp({ quality: 75 })
        ]
    });

    const files3 = await imagemin(['dist/nameplates/*.{jpg,jpeg,png,svg}'], {
        destination: 'dist/nameplates',
        plugins: [
            pngquant({ quality: [0.6, 0.8] }),
            svgo()
        ],
    });

    const files3Webp = await imagemin(['dist/nameplates/*.png'], {
        destination: 'dist/nameplates',
        plugins: [
            webp({ quality: 75 })
        ]
    });

    console.log(`Optimized ${files.length} images in backgrounds`);
    console.log(`Converted ${filesWebp.length} PNGs to WebP in backgrounds`);

    console.log(`Optimized ${files2.length} images in hero_icons`);
    console.log(`Converted ${files2Webp.length} PNGs to WebP in hero_icons`);

    console.log(`Optimized ${files3.length} images in nameplates`);
    console.log(`Converted ${files3Webp.length} PNGs to WebP in nameplates`);
}

optimizeImages();

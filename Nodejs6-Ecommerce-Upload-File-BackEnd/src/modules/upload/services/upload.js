import { v2 as cloudinary } from 'cloudinary';
import { ENV } from '../../../constants/index.js';
import fsExtra from 'fs-extra';
import sharp from 'sharp';

cloudinary.config({
    cloud_name: ENV.CLOUD_NAME,
    api_key: ENV.API_KEY,
    api_secret: ENV.API_SECRET // Click 'View API Keys' above to copy your API secret
});
const uploadService = async (file) => {

    return new Promise((resolve, reject) => {
        const filePath = `src/modules/upload/uploads/`;
        const dir = `src/modules/upload/uploads/${file.filename}`;
        const finalDir = `${filePath}/resize-${file.filename}`;
        // fsExtra.readFile(`src/modules/upload/uploads/${file.filename}`, (err, file) => {
        sharp(dir)
            .png({ quality: 40 })
            .toFile(finalDir, async (err, info) => {
                console.log('err', 'info', err, info);
                cloudinary.uploader.upload(finalDir,
                    {
                        folder: 'Ecommerce',
                        public_id: file.filename

                    },
                    function (error, result) {
                        if (error) {
                            reject(error)
                            return;
                        }
                        fsExtra.removeSync(dir)
                        resolve(result)
                    }
                )
            })


    })
    // })


}

export default uploadService;
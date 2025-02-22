// import express from 'express'
// import { addFood,listFood, removeFood } from '../controllers/foodController.js'
// import multer from 'multer' 

// const foodRouter = express.Router();


// // Image storage engine
// const storage = multer.diskStorage({
//     destination:'uploads',
//     filename:(req,file,cb) => {
//         return cb(null, `${Date.now()}${file.originalname}`)  // cb = callback
//     }
// })

// const  upload = multer({storage:storage})

// foodRouter.post("/add",upload.single('image'),addFood)
// foodRouter.get("/list",listFood)
// foodRouter.post("/remove",removeFood)





// export default foodRouter;
import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Configure multer to use the writable /tmp directory
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/tmp'); // Use /tmp instead of /var/task/uploads
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Apply multer only on the specific route that requires file upload
foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', listFood);
foodRouter.post('/remove', removeFood);

export default foodRouter;

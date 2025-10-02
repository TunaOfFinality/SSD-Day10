import authMiddleware from "../middlewares/authMiddleware.js"
import userController from "../controllers/userController.js"
import upload from "../middlewares/uploadMiddleware.js"

const useUserRoute = async (router) => {
  router.get('/user', authMiddleware(), userController.getAllUsers)
  router.get('/user/:id', userController.getUserById)
  router.post('/register', userController.register)
  router.post('/login', userController.login)
  router.get('/test', userController.test)
  router.post('/upload', upload, userController.upload)
}

export default useUserRoute
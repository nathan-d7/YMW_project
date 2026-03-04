import express, { json } from 'express'
import cors from 'cors'
import multer, { diskStorage } from 'multer'
import path from 'path'

const app = express()
app.use(json())
app.use(cors())

const storage = diskStorage({
  destination: './formFiles',
  filename: (req, file, cb) => {

    const parsed = path.parse(file.originalname)
    const safeName = parsed.name.replace(/\s+/g, '_')
 
    const filename = safeName + '_' + parsed.ext

    cb(null, filename)
  }
}) 


const upload = multer({ storage: storage })

app.post('/upload', upload.single('formFiles'), (req, res) => {
  console.log('SAVED FILE:', req.file)
  if (!req.file) {
    return res.status(400).send('Файл не найден')
  }
  res.send(`Файл загружен: ${req.file.filename}`)
})

app.listen(5050, function () {
  console.log('Сервер для загрузки файлов запущен')
})
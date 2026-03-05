import express, { json } from 'express'
import cors from 'cors'
import multer, { diskStorage } from 'multer'
import path from 'path'
import fs from "fs"


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


const materialsDir = path.resolve('materials', 'grade7', 'grammar7')
const materialsJson = path.join(materialsDir, 'materials.json')

console.log(materialsDir)
console.log(materialsJson)

app.get(`${materialsDir}`, (req, res) => {
  const data = fs.readFileSync(materialsJson, 'utf-8')
  res.json(JSON.parse(data))
})


app.get(`/file_download`, (req, res) => {
  const { id } = req.params

  const data = JSON.parse(fs.readFileSync(materialsJson, 'utf-8'))

  const material = data.find(item => item.id === id)

  if (!material) {
    return res.status(404).send('Файл не найден')
  }

  const filePath = path.join(materialsDir, material.storedName)

  res.download(filePath, material.originalName)
})


app.listen(5050, function () {
  console.log('Сервер для загрузки файлов запущен')
})
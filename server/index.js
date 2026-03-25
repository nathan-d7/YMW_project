import express, { json } from 'express'
import cors from 'cors'
import multer, { diskStorage } from 'multer'
import path from 'path'
import fs from "fs"
import mime from "mime-types"


const app = express()
app.use(json())

app.use(cors({
  origin: "*", // или список доменов
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Disposition"], // если нужно читать этот заголовок
}))

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


const materialsDir = path.resolve(import.meta.dirname, 'materials')
// const materialsJson = path.join(materialsDir, 'materials.json')
const materialsJson = path.resolve('materials','materials.json')

console.log("MaterialsDir", materialsDir)
console.log(materialsJson)

app.get('/:category', (req, res) => {
  const { grade, category } = req.query
  const data = JSON.parse(fs.readFileSync(materialsJson, 'utf-8'))

  const filteredData = data.filter(item => item.category[0].type === category && item.category[0].grade === grade)

  console.log("FILTERED DATA", filteredData)
  // res.json(JSON.parse(data))
  res.json(filteredData)
})

// должен всегда прилетать content-type

// app.get('/file_download/:id', (req, res) => {
//   const { id } = req.params

//   const data = JSON.parse(fs.readFileSync(materialsJson, 'utf-8'))

//   const material = data.find(item => item.id === id)

//   if (!material) {
//     return res.status(404).send('Файл не найден')
//   }

//   console.log(material)

//   const filePath = path.join(materialsDir, material.originalName)

//   res.download(filePath, material.originalName)
// })

app.get("/file_download/:id", (req, res) => {
  const { id } = req.params

  const data = JSON.parse(fs.readFileSync(materialsJson, 'utf-8'))

  const material = data.find(item => item.category[0].id === id)
  console.log("Материалы:", material)

  if (!material) {
    return res.status(404).send('Файл не найден')
  }

  // const filePath = path.join(materialsDir, material.material[0].originalName)
  const materialGrade = material.category[0].grade
  const materialCategoryType = material.category[0].type

  const filePath = path.join(materialsDir, `grade${materialGrade}`, `${materialCategoryType}${materialGrade}`, material.material[0].originalName)

  console.log('Grade:', materialGrade)
  console.log('Directory:', materialCategoryType)
  console.log('FilePath:', filePath)

  const contentType = mime.lookup(filePath) || "application/octet-stream"

  res.setHeader("Content-Type", contentType)
  res.setHeader("Content-Disposition", `attachment; filename="${material.material[0].originalName}"`)

  fs.createReadStream(filePath).pipe(res)
})


app.listen(5050, function () {
  console.log('Сервер для загрузки файлов запущен')
})
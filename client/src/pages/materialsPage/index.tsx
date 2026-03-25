import { useEffect, useState, type FC } from "react"
import TableContainer from "@mui/material/TableContainer"
import Table  from "@mui/material/Table"
import TableHead  from "@mui/material/TableHead"
import TableCell  from "@mui/material/TableCell"
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import IconButton  from "@mui/material/IconButton"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import LinkIcon from '@mui/icons-material/Link'
import axios from "axios"
import "../../index.css"
import "./materialsPage.css"
import { useParams } from "react-router-dom"

const GrammarMaterialsTable: FC = () => {

  const [materials, setMaterials] = useState<any[]>([])
  const materialCategory = useParams()

  console.log("Faaa", materialCategory)

  useEffect(() => {
    getMaterials()
  }, [])

  const openInNewTab = (url: string) => {
    window.open(url, '_blank');
  } 

  const getMaterials = async () => {
    const responce =  await axios.get(`http://localhost:5050/${materialCategory.category}`, { params: {grade: materialCategory.grade, category: materialCategory.category}})
    if(!responce) return
    const data = responce.data
    setMaterials(data)
  }

const handleDownload = async (id: string) => {
    try {
      const responce = await axios.get(`http://localhost:5050/file_download/${id}`, { responseType: 'blob' })
      let fileName = responce.data
      const disposition = responce.headers['content-disposition']
      
      if (disposition) {
        const match = disposition.match(/filename\*?=(?:UTF-8''|")?([^";]+)/i)
        if (match) fileName = match[1]
      }

      const blob = new Blob([responce.data])
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = fileName
      link.click()

      URL.revokeObjectURL(link.href)
    } catch (error) {
      if (error instanceof Error) {
        console.warn(error.message, { variant: 'error' })
      }
    }
  }

  return (
    <section className="materials-page">
      <div className="materials__container container">
        <h2 className="materials__header">{materialCategory.grade} класс</h2>
        <TableContainer className="materials__tableContainer">
          <Table>
            <TableHead className="materials__tableHead">
              <TableRow className="materials__content-row">
                <TableCell className="materials__cell-name cell-mr">Тема</TableCell>
                <TableCell className="materials__cell-name cell-mr">Unit</TableCell>
                <TableCell className="materials__cell-name cell-mr">Lesson</TableCell>
                <TableCell className="materials__cell-name cell-mr">Тип</TableCell>
                <TableCell className="materials__cell-name" align="center">Скачать</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {materials.map(item => (
                <TableRow key={item.category[0].id} className="materials__content-row">
                  <TableCell className="materials__file-name cell-padding cell-mr">{item.material[0].title}</TableCell>
                  <TableCell className="materials__file-unit cell-padding cell-mr">{item.material[0].unit}</TableCell>
                  <TableCell className="materials__file-lesson cell-padding cell-mr">{item.material[0].lesson}</TableCell>
                  <TableCell className="materials__file-type cell-padding">
                    <span className="materials__file-type-tag cell-mr" style={{backgroundColor: `${item.materialType[0].typeInfo[0].backgroundColor}`, color: `${item.materialType[0].typeInfo[0].color}`}}>{item.materialType[0].typeInfo[0].type}</span>
                  </TableCell>
                  <TableCell className="materials__file-download cell-padding" align="center">
                    {item.material[0]?.srcLink ?
                      <IconButton onClick={() => openInNewTab(item.material[0].srcLink)}>
                        <LinkIcon />
                      </IconButton> :
                      <IconButton
                        onClick={() => handleDownload(item.category[0].id)}
                      >
                        <FileDownloadOutlinedIcon />
                      </IconButton>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </div>
    </section>
  )
}

export default GrammarMaterialsTable
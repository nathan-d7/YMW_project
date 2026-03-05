import { useEffect, useState, type FC } from "react"
import TableContainer from "@mui/material/TableContainer"
import Table  from "@mui/material/Table"
import TableHead  from "@mui/material/TableHead"
import TableCell  from "@mui/material/TableCell"
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import IconButton  from "@mui/material/IconButton"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import axios from "axios"

const GrammarMaterialsTable: FC = () => {

  const [materials, setMaterials] = useState<any[]>([])

   useEffect(() => {
    getMaterials()
  }, [])

  const getMaterials = async () => {
    const responce =  await axios.get('http://localhost:5050/materials/grade7/grammar7')
    const data = responce.data
    setMaterials(data)
  }

  console.log(materials)

  const handleDownload = async (id: string) => {
  const response = await axios.get(
    `http://localhost:5050/file_download/${id}`,
    { responseType: 'blob' }
  )

  const blob = new Blob([response.data])
  const link = document.createElement('a')

  link.href = URL.createObjectURL(blob)
  link.download = 'file'
  link.click()

  URL.revokeObjectURL(link.href)
}


  return (
    <TableContainer>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Тип</TableCell>
            <TableCell align="center">Скачать</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {materials.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => handleDownload(item.id)}
                >
                  <FileDownloadOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default GrammarMaterialsTable
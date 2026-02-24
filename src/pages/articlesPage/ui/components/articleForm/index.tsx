import { useState, type FC } from "react"
import "./articleForm.css"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Typography, TextField } from "@mui/material"
import DefaultBtn from "../../../../../widgets/ui/defaultButton/defaultButton"
import axios from "axios"
import FormModal from "./formSentModal"


const ArticleForm: FC = () => {

  const [openModal, setModalOpen] = useState<boolean>(false)

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Обязательное поле'),
    email: Yup.string().email().required('Обязательное поле').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Неверный формат e-mail"),
    comment: Yup.string().required('Обязательное поле').min(3, 'Введите как минимум 3 символа') 
      .max(50, 'Максимальное количество символов - 80')
  })

  type FormTypes = {
    name: string,
    email: string,
    comment: string
  }

  const formik = useFormik<FormTypes>({
    initialValues: {
      name: '',
      email: '',
      comment: ''
    },
    validationSchema,
    onSubmit: async (values, {setSubmitting, resetForm}) => {
      try {
        const dataObj = {
            body: values.comment,
            postId: 476,
            userId: crypto.randomUUID()
          } 

        const response = await axios.post('https://dummyjson.com/test', dataObj)

        console.log('Ответ сервера:', response.data.status)

        setModalOpen(true)
        resetForm()

      } catch (error) {
        console.log('Ошибка отправки', error)
      } finally {
        setSubmitting(false)
      }
    }
  })

  const {values, errors, handleChange, handleBlur, handleSubmit, handleReset, touched, isSubmitting} = formik

  const styledButton = {
    backgroundColor: "#C0A5C7",
    border: "0.3px solid #000",
    width: "130px",
    margin: "0 auto"
  }


  return (
    <Box className="article-form__container">
      <Box className="article-form__info-box">
        <Typography component={'p'} className="article-form__info-text">
          Принимаем ваши предложения для новых статей. Какая тема вас интересует?
        </Typography>
        <Typography component={'span'} className="article-form__info-text">
          Оставьте свой комментарий
        </Typography>
      </Box>
      <Box component={'form'} className="article-form__form-box" onSubmit={handleSubmit}>
        <Box className="article-form__form">
          <TextField
            label="Ваше имя"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={Boolean(errors.name) && Boolean(touched.name)}
            helperText={errors.name}
            onBlur={handleBlur}
            className="article-form__item" />
          <TextField
            label="e-mail" 
            name="email"
            value={values.email}
            onChange={handleChange}
            error={Boolean(errors.email) && Boolean(touched.email)}
            helperText={errors.email}
            onBlur={handleBlur}
            className="article-form__item" />
          <TextField
            label="Комментарий" 
            multiline
            minRows={4}
            name="comment"
            value={values.comment}
            onChange={handleChange}
            error={Boolean(errors.comment) && Boolean(touched.comment)}
            helperText={errors.comment}
            onBlur={handleBlur}
            className="article-form__item" />

            <DefaultBtn 
              type={'submit'} 
              componentType={'button'} 
              text={'Отправить'} 
              styles={styledButton}
              disabled={isSubmitting}
            >
            </DefaultBtn>

            {openModal && <FormModal setModal={setModalOpen}/>}

        </Box>
      </Box>
    </Box>
  )
}

export default ArticleForm
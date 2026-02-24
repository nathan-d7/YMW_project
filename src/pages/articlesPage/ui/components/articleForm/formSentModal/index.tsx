import type { FC } from "react"
import formImg from "../../../../../../assets/images/promo_bg_sup.png"
import "./formModal.css"
import { IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

type FormModalProp = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const FormModal: FC<FormModalProp> = ({setModal}) => {
  return (
    <div className="form-modal">
      <div className="form-modal__box">
        <div className="form-modal__img-block">
          <img className="form-modal__img" src={formImg} />
        </div>
        <p className="form-modal__message">
          Предложение успешно отправлено
          Спасибо за вашу идею!
        </p>

        <IconButton
          className="form-modal__close-button" 
          onClick={() => setModal(false)}
          sx={{
            color: "#000",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "#fff"
            }
          }}
          >
          <CloseIcon 
            sx={{
              transition: "all .4s linear"
            }}/>
        </IconButton>
      </div>
    </div>
  )
}

export default FormModal
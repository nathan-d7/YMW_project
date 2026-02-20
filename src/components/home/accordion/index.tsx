import { type FC, useState } from "react"
// import style from "./accordion.module.css"
import "../../../index.css"
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { Typography } from "@mui/material"
import "./accordion.css"

const AccordionHomePage: FC = () => {

  const [expanded, setExpanded] = useState<string | false>('')
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
  }

  const handleMouseEnter = (panel:string) => {
    setHoveredPanel(panel)
  }

  const handleMouseLeave = (param: null) => {
    setHoveredPanel(param)
  }

  return (
    <section  className="accordion-home">
      <div className={"accordion__container container"}>
        <h3 className={"accordion__title"}>Часто задаваемые вопросы</h3>
        <div className="accordion-box">
          <Accordion className="accordion__item" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={
              <AddBoxIcon 
                onMouseEnter={() => handleMouseEnter('panel1')} 
                onMouseLeave={() => handleMouseLeave(null)} 
                sx={{fill: `${(hoveredPanel === 'panel1') ? '#FF799B' : '#6C686A'}`, 
                    transition: 'fill .2s linear'}}
                fontSize="large"
              />}
              className="accordion__item-summery"
              aria-controls="panel1-content"
              id="panel1-header"
              >
              <Typography className="accordion__item-heading" component="span">Есть ли на платформе поурочные планы?</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion__item-text">
              Да, мы предоставляем готовые поурочные план. Каждый план включает цели урока, пошаговый сценарий, дополнительные активности и материалы для распечатки. Вы можете скачать их в формате PDF или редактируемом документе, чтобы адаптировать под свой класс.
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion__item" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={
              <AddBoxIcon 
                onMouseEnter={() => handleMouseEnter('panel2')} 
                onMouseLeave={() => handleMouseLeave(null)} 
                sx={{fill: `${(hoveredPanel === 'panel2') ? '#FF799B' : '#6C686A'}`, 
                    transition: 'fill .2s linear'}}
                fontSize="large"
              />}
              className="accordion__item-summery"
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="accordion__item-heading" component="span">Как оформить подписку?</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion__item-text">
              <ol style={{paddingInline: '24px'}}>
                <li>Нажмите кнопку «Подписка» в шапке сайта.</li>
                <li>Выберите удобный тариф.</li>
                <li>
                  Введите данные карты — оплата проходит безопасно через платежный шлюз.
                  После оплаты вам сразу откроется доступ ко всем материалам.
                </li>
              </ol>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion__item" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={
              <AddBoxIcon 
                onMouseEnter={() => handleMouseEnter('panel3')} 
                onMouseLeave={() => handleMouseLeave(null)} 
                sx={{fill: `${(hoveredPanel === 'panel3') ? '#FF799B' : '#6C686A'}`, 
                    transition: 'fill .2s linear'}}
                fontSize="large"
              />}
              className="accordion__item-summery"
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography className="accordion__item-heading" component="span">В каком формате скачиваются файлы?</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion__item-text">
              Формат зависит от типа материала:
              <ol style={{paddingInline: '24px', marginTop: '10px'}}>
                <li>Рабочие листы и карточки — PDF (готовы к печати)</li>
                <li>Презентации — PowerPoint (PPTX) или Google Slides (ссылка на копию).</li>
                <li>
                  Текстовые документы — Word (DOCX) — вы можете редактировать их под себя
                </li>
                <li>
                  Интерактивные задания — ссылки на готовые онлайн-упражненияВсе файлы открываются на любых устройствах.
                </li>
              </ol>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion__item" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={
              <AddBoxIcon 
                onMouseEnter={() => handleMouseEnter('panel4')} 
                onMouseLeave={() => handleMouseLeave(null)} 
                sx={{fill: `${(hoveredPanel === 'panel4') ? '#FF799B' : '#6C686A'}`, 
                    transition: 'fill .2s linear'}}
                fontSize="large"
              />}
              className="accordion__item-summery"
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography className="accordion__item-heading" component="span">Можно ли сохранить материалы в избранное?</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion__item-text">
              Да, у нас есть функция «Избранное». Когда вы находите интересный материал, нажмите на звездочку рядом с его названием — он сохранится в вашем личном кабинете в разделе «Избранное». Так вы можете собирать подборки под разные классы или темы и быстро возвращаться к ним.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default AccordionHomePage

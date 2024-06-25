import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionUsage = () => {
  return (
    <div className='max-w-[600px]  shadow-sm mx-auto mt-8' >
      <Accordion className='' >
        <AccordionSummary className='' expandIcon={<ExpandMoreIcon className='text-cyan-500' />}>
          <p className='text-base font-medium my-1 ' >Why To Believe In Insove Medical Healthcare ?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className='text-slate-500 text-sm ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-cyan-500' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className='text-base font-medium my-1 ' >Will We Get Healthcare Updates After Sugery ?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='text-slate-500 text-sm ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-cyan-500' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className='text-base font-medium my-1 ' >What Preparations Are Necessary Before Undergoing Surgery ?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='text-slate-500 text-sm ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-cyan-500' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className='text-base font-medium my-1 ' >How Long Will It Take To Recover After The Surgery</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='text-slate-500 text-sm ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
const Answers = () => {
  return (
    <section>
        <div className="containe w-full ">
            <div className="text-center">
                <h2 className="text-3xl font-medium">We&apos;ve Got Answers</h2>
            </div>
            <div className="">
                <AccordionUsage />
            </div>
        </div>
    </section>
  )
}

export default Answers
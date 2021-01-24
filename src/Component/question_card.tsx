import React , {useState} from 'react'
import { questionPropsType } from './../types/quiz_type'
import './../App.css';



const QuestionCard: React.FC<questionPropsType> = ({ question, options , callback }) => {
    let [selectedAnswer , setselectedAnswer] = useState("")

    const handleChange = (e:any) => {
        setselectedAnswer(e.target.value)
    }
    
    return (
        <div className="container quiz-container shadow-sm p-3 rounded border">
            <h1 className="text-center text-light"><b><u>Quiz App By<i> AfaqueSoft</i></u></b></h1>
            <form className="container p-3" onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAnswer)}>
                <h5 className="fst-normal text-danger mb-3 text-success"><b>{question}</b></h5>
                {
                    options.map((v: string, i: number) => {
                        return <div className="mt-2 form-check" key={i}>
                            <input className="form-check-input" required checked={selectedAnswer === v} onChange={handleChange}  value={v} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label text-light" htmlFor="flexRadioDefault1">{v}</label>
                        </div>

                    })
                }
                <button type="submit" className="container btn btn-dark mt-3"><b>Submit</b></button>
            </form>
        </div>
    )
}

export default QuestionCard
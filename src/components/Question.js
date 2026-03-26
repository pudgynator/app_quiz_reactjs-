import { Component } from "react";
import Options from "./Option";

class Question extends Component {
    render() {
        const { question, selectedOption, onOptionChange, onSubmit } = this.props;

        return (
            <div>
                <h3 className="text-center">Запитання {question.id}</h3>
                <h5 className="mt-2">{question.question}</h5>
                <form onSubmit={onSubmit} className="mt-2 mb-2">
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary mt-2">
                            Підтвердити
                        </button>
                    </div>
                </form>

            </div>
        )
    }
}


export default Question;

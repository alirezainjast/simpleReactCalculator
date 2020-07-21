import React from 'react'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'

export default function Pad() {
    return (
        <div className="pad">
            <OperationButton operation={"C"}/>
            <OperationButton operation={"CE"}/>
            <OperationButton operation={"%"}/>
            <OperationButton operation={"/"}/>
            <DigitButton digit={7} />
            <DigitButton digit={8} />
            <DigitButton digit={9} />
            <OperationButton operation={"X"}/>
            <DigitButton digit={4} />
            <DigitButton digit={5} />
            <DigitButton digit={6} />
            <OperationButton operation={"-"}/>
            <DigitButton digit={1} />
            <DigitButton digit={2} />
            <DigitButton digit={3} />
            <OperationButton operation={"+"}/>
            <DigitButton digit={0} />
            <DigitButton digit={"00"} />
            <DigitButton digit={"."} />
            <OperationButton operation={"="}/>
        </div>
    )
}

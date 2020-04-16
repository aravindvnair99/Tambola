import * as React from 'react';
import { Component } from 'react';
import Box from "./Box"

// TODO: Make unique keys when rendering boxes; keys are repeating in case of 0

interface LineProps {
    numbers: Array<number>
}

interface LineState {

}

class Line extends Component<LineProps, LineState> {
    constructor(props: LineProps) {
        super(props);
    }

    render() {
        let boxes = this.props.numbers.map(function(number) {
            return <Box key={number} value={number}/>;
        });
        return (
            <div style= {{display: "flex"}}>
                {boxes}
            </div>
        )
    }

}

export default Line;
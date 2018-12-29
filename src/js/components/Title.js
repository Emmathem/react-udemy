import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <h1 className = "titleHeader">{this.props.title}</h1>
        );
    }
}
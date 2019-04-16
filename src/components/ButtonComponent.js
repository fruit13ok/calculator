import React from 'react';

class ButtonComponent extends React.Component {
    // when press button pass this button text back to parent
    handleClick = () => {
        this.props.onButtonPressed(this.props.text);
    }

    render() {
        return (
            <button className={this.props.cssStyle} onClick={ this.handleClick }>
                { this.props.text }
            </button>
        );
    }
}

export default ButtonComponent;
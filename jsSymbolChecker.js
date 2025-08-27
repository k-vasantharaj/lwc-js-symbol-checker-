import { LightningElement } from 'lwc';

export default class JsSymbolChecker extends LightningElement {
    symbol;
    message;

    handleChangeSymbol(event) {
        this.symbol = event.target.value;
    }

    handleSymbol() {
        switch(this.symbol) {
            case '%':
                this.message = 'Returns the remainder after division';
                break;
            case '{}':
                this.message = 'Used to define objects or code blocks';
                break;
            case '[]':
                this.message = 'Used to define arrays or access elements';
                break;
            case '=>':
                this.message = 'Defines an arrow function (short function syntax)';
                break;
            case '!':
                this.message = 'Logical NOT, negates a boolean value';
                break;
            case '===':
                this.message = 'Strict equality (checks value and type)';
                break;
            case '==':
                this.message = 'Loose equality (checks value only, does type conversion)';
                break;
            case '||':
                this.message = 'Logical OR, returns true if any condition is true';
                break;
            case '&&':
                this.message = 'Logical AND, returns true if both conditions are true';
                break;
            default:
                this.message = 'Unknown symbol';
        }
    }
}

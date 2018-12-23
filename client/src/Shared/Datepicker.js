import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import $ from "jquery";
import Inputmask from "inputmask";

class Datepicker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value && this.isDate(this.props.value) ? moment(new Date(this.props.value)) : null,
            minDate: this.props.minDate && this.isDate(this.props.minDate) ? moment(new Date(this.props.minDate)) : null,
            maxDate: this.props.maxDate && this.isDate(this.props.maxDate) ? moment(new Date(this.props.maxDate)) : null,
            openToDate: this.props.openToDate && this.isDate(this.props.openToDate) ? moment(this.dateToStringYMD(new Date(this.props.openToDate))) : null
        };

        this.datePickerObserverHandler = this.datePickerObserverHandler.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value != this.props.value) {
            this.setState({value: nextProps.value && this.isDate(nextProps.value) ? moment(new Date(nextProps.value)) : null})
        }
        if (nextProps.minDate != this.props.minDate) {
            this.setState({minDate: nextProps.minDate && this.isDate(nextProps.minDate) ? moment(new Date(nextProps.minDate)) : null})
        }
        if (nextProps.maxDate != this.props.maxDate) {
            this.setState({maxDate: nextProps.maxDate && this.isDate(nextProps.maxDate) ? moment(new Date(nextProps.maxDate)) : null})
        }
        if (nextProps.openToDate != this.props.openToDate) {
            this.setState({openToDate: nextProps.openToDate && this.isDate(nextProps.openToDate) ? moment(this.dateToStringYMD(new Date(nextProps.openToDate))) : null})
        }
    }

    datePickerObserverHandler(mutations) {
        let mutation = mutations[0];
        if (mutation && mutation.addedNodes.length > 0) {
            let addedNode = mutation.addedNodes[0];
            //Якщо календар зрендерився
            if (addedNode.classList.contains('react-datepicker-popper')) {
                //Відслідковування встановлення атрибутів календаря
                var observer = new MutationObserver(mutations => {
                    //Якщо встановлене місцеположення календаря (popperPlacement) - встановлюємо data-placement (впливає на дизайн)
                    if (this.props.popperPlacement) {
                        addedNode.setAttribute('data-placement', this.props.popperPlacement);
                    }
                    observer.disconnect();
                });
                var config = { attributes: true }

                observer.observe(addedNode, config);
            }
        }
    }

    handleInput(e) {
        if (e.target.value == '') {
            this.handleChange(null);
        }
    }

    handleChange(val) {
        val = val ? val._d : null;
        if (val) {
            val = new Date(val.getFullYear(), val.getMonth(), val.getDate());
            val.setMinutes(-val.getTimezoneOffset());
        }
        this.setState({
            value: val && moment(val)
        }, () => this.props.onChange(val));
    }

    handleBlur(e) {
        if (e.target.value) {
            let dateStr = e.target.value;
            this.props.onChange(this.parseStringToDate(dateStr));
        } else {
            this.props.onChange(null);
        }
    }

    componentDidMount() {
        let datePickerDomNode = ReactDOM.findDOMNode(this.refs.datepicker);
        debugger;
        let inputDomNode = datePickerDomNode.children[0];
        //Встановлення маски для дати
        new Inputmask("99.99.9999").mask($(inputDomNode));

        inputDomNode.addEventListener('input', this.handleInput);

        //Відслідковування появи календаря
        var observer = new MutationObserver(this.datePickerObserverHandler);

        var config = { childList: true }

        observer.observe(datePickerDomNode, config);

    }

    isDate(value) {
        return !isNaN(new Date(value.getTime()));
    }

    parseStringToDate(dateStr) {
        let dd = dateStr.slice(0, dateStr.indexOf('.'));
        let mm = dateStr.slice(dateStr.indexOf('.') + 1, dateStr.lastIndexOf('.'));
        let yyyy = dateStr.slice(dateStr.lastIndexOf('.') + 1);

        dd = dd && +dd;
        mm = mm && +mm && +mm - 1;
        yyyy = yyyy && +yyyy;
        let date = new Date(yyyy, mm, dd);
        date.setMinutes(-date.getTimezoneOffset());
        return date;
    }

    dateToStringYMD(date) {
        let Y = date.getFullYear() + '',
            M = date.getMonth() + '',
            D = date.getDate() + '';

        if (M.length == 1) {
            M = `0${M}`;
        }

        if (D.length == 1) {
            D = `0${D}`;
        }

        return `${Y}-${M}=${D}`;
    }

    render() {
        return <DatePicker
            className={this.props.disabled ? 'disabled' : ''}
            ref="datepicker"
            fixedHeight={true}
            dateFormat="DD.MM.YYYY"
            locale="uk"
            selected={this.state.value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            disabledKeyboardNavigation
            disabled={this.props.disabled}
            minDate={this.state.minDate}
            maxDate={this.state.maxDate}
            openToDate={!this.state.value ? this.state.openOnDate || null : null}
            popperClassName={this.props.popperClassName}
            popperPlacement={this.props.popperPlacement}
        />
    };
}

export default Datepicker;
import './post-status-filter.sass'
import { Button } from 'react-bootstrap'
import { Component } from 'react'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            { name: 'all', label: 'Все' },
            { name: 'like', label: 'Понравилось' }
        ]
    }
    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const btnVariant = active ? 'info' : 'outline-secondary';
            return (
                <Button
                    key={name}
                    variant={btnVariant}
                    onClick={() => onFilterSelect(name)}
                >{label}</Button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
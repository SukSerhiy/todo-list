import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'element-react';
import { TaskModal } from '../modals'

class AddTask extends PureComponent {
  static propTypes = {
    loadData: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  handleClick = (e) => {
    this.modalRef.current.open();
  }

  render() {
    const { onSubmit } = this.props;
    return (<Fragment>
      <Button
        className='add-task-button'
        icon='plus'
        onClick={this.handleClick}
      />
      <TaskModal
        ref={this.modalRef}
        onSubmit={onSubmit}
      />
    </Fragment>)
  }
}

export default AddTask;
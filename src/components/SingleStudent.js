import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  CardImg
} from 'reactstrap';

const SingleStudent = ({ student, color }) => (
  <Card body color={color}>
    <CardImg src={student.image} />
    <CardTitle tag="h5">
      {`${student.firstName} ${student.lastName}`}
    </CardTitle>
  </Card>
);

SingleStudent.propTypes = {
  student: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default SingleStudent;

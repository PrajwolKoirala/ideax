import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ClassCard = ({ classItem }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{classItem.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Teacher: {classItem.teacher ? classItem.teacher.name : 'No Teacher Assigned'}
        </Card.Subtitle>
        <Card.Text>
          Description: {classItem.description}
          <br />
          Language: {classItem.language}
          <br />
          Start Date: {classItem.startDate}
        </Card.Text>
        <Button variant="primary">
        <Link
  className='link'
  to={{
    pathname: `/applyclass/${classItem._id}`,
    state: { classId: classItem._id } // Make sure classItem._id is correct
  }}
>
  Apply for Job
</Link>

        </Button>
      </Card.Body>
    </Card>
  );
};

export default ClassCard;

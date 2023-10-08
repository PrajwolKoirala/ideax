// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';

// const ClassCard = ({ classItem }) => {
//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <Card.Body>
//         <Card.Title>{classItem.name}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">
//           Teacher: {classItem.teacher ? classItem.teacher.name : 'No Teacher Assigned'}
//         </Card.Subtitle>
//         <Card.Text>
//           Description: {classItem.description}
//           <br />
//           Language: {classItem.language}
//           <br />
//           Start Date: {classItem.startDate}
//         </Card.Text>
//         <Button variant="primary">
//         <Link
//   className='link'
//   to={{
//     pathname: `/applyclass/${classItem._id}`,
//     state: { classId: classItem._id } // Make sure classItem._id is correct
//   }}
// >
//   APPLY
// </Link>

//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ClassCard;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ClassCard = ({ classItem }) => {
  return (
    <div className="col-md-4"> {/* Use Bootstrap's grid system to display three cards in a row */}
      <Card style={{ margin: '10px' }}>
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
                state: { classId: classItem._id }
              }}
            >
              APPLY
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ClassCard;

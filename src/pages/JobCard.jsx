import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const JobCard = ({ job }) => {
    const handleApplyClick = () => {
        // Handle applying for the job here
        // You can send a request to your backend to apply for the job
      };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{job.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{job.category}</Card.Subtitle>
        <Card.Text>
          Language: {job.language}
          <br />
          Location: {job.location}
          <br />
          Vacancy: {job.vacancy}
        </Card.Text>
        <Button variant="primary">
        <Link className='link'
          to={{
            pathname: `/apply/${job._id}`,
            state: { jobId: job._id } 
          }}
        >
          Apply for Job
        </Link>
      </Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;

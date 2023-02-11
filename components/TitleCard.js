import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export default function TitleCard({
  title, desc, route, btnText,
}) {
  const routes = useRouter();

  return (
    <Card style={{ width: '25rem', margin: '50px' }}>
      <Card.Body>
        <h1>{title}</h1>
        <p>{desc}</p>
        <Button onClick={() => routes.push(`/${route}`)} variant="secondary">{btnText}</Button>
      </Card.Body>
    </Card>
  );
}

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

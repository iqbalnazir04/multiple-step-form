import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export const Submit = ({navigation}) => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
      <h2>Thank you for submitting, you will be notified soon, stay connected</h2>

      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
      </div>
    </Container>
  );
};

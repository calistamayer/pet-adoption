import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Container
} from 'semantic-ui-react';

const Login = () => {
    return (
        <Container className="topPadding">
            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Login
      </Header>
                    <Segment>
                        <Form size="large">
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Email address"
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />

                            <Button color="blue" fluid size="large">
                                Login
          </Button>
                        </Form>
                    </Segment>
                    <Message>
                        Not registered yet?  <Link to="/signup">Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid></Container>
    );
};

export default Login;
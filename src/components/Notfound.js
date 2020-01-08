import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function Notfound() {

    return (
        <div>
            <Link to={'/'}>
                <Button
                    type="submit"
                    className="primary">
                    Back to Homepage
        </Button>
            </Link>
        </div>)
}
import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export function Index() {
  return (
    <div>
      <Jumbotron>
        <div className="row">
          <div className="col-sm-12">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2>
                Northwind data explorer via GraphQL
                <br />
              </h2>
            </div>
            <p>
              This is a true story. The events depicted took place in <b>Northwind company</b> in{' '}
              <b>1996-1998</b>. At the request of the survivors, the names have been changed. Out of
              respect for the dead, the rest has been told exactly as it occurred.
            </p>
            <p style={{ textAlign: 'right', fontWeight: 'bold' }}>© Fargo</p>
          </div>
        </div>
      </Jumbotron>

      <div>
        <h4>Source code of server-side</h4>
        <a
          href="https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind
        </a>
      </div>

      <div style={{ marginTop: 50 }}>
        <h4>🛑 NOTICE</h4>
        <code>__generated__</code> folders should be added to <code>.gitignore</code> file. It's bad
        to keep generated files in repo because it complicates code review. You need to generate
        files everytime before you build or start app in watch mode. In this repo I keep generated
        files only for demo purposes!
      </div>
    </div>
  );
}

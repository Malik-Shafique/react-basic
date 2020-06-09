import React from 'react';
import ReactDom from 'react-dom';

function Hi(){
  return <div> Hello World by Malik!</div>
}
ReactDom.render(<Hi/>,
  document.getElementById('root')
  );

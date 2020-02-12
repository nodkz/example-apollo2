import React from 'react';
import { Customer_dataFragment } from './__generated__/Customer_data';

interface Props {
  data: Customer_dataFragment;
}

export function Customer(props: Props) {
  const { data } = props;

  return (
    <div>
      <div>
        {data.companyName} ({data.address?.city})
      </div>
    </div>
  );
}

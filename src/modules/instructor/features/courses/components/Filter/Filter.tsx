import DropDownGeneric from 'modules/shared/components/DropDownGeneric';
import React from 'react'

function Filter() {
  return (
    <DropDownGeneric
    variant={"secondary"}
      text="Sort by:"
      Options={[
        {
          name: 'Video',
          action: () => {},
        },
        {
          name: 'Attach File',
          action: () => {},
        },
        {
          name: 'Captions',
          action: () => {},
        },
        {
          name: 'Description',
          action: () => {},
        },
        {
          name: 'Lecture Notes',
          action: () => {},
        },
      ]}
    />
  );
}

export default Filter
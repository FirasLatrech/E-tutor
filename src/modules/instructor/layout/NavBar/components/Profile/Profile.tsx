import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';

function Profile() {
  return (
    <div>
      <Avatar className="h-12 w-12">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/112077899?v=4"
          alt="@Firas"
        />
        <AvatarFallback>FL</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default Profile;
